using back_end.Data;
using back_end.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SelectPdf;
using Syncfusion.Pdf.Graphics;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAllOrigins")]
    public class AdminController : ControllerBase
    {
        private readonly MyDbContext _context;

        public static int PAGE_SIZE { get; set; } = 5;

        public AdminController(MyDbContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAccount(string search, int role, string sortType, int page = 1)
        {
            var accessToken = await HttpContext.GetTokenAsync("access_token");
            var handler = new JwtSecurityTokenHandler();
            var jwtSecurityToken = handler.ReadJwtToken(accessToken);

            int adminId = Int32.Parse(jwtSecurityToken.Claims.First(claim => claim.Type == "nameid").Value);
            var admin = await _context.User.FindAsync(adminId);
            if (admin.UserTypeId != 3)
            {
                return StatusCode(403, $"User '{admin.Name}' is not a admin.");
            }

            var userList = await _context.User.AsQueryable().ToListAsync();

            if (!string.IsNullOrEmpty(search))
            {
                search = search.ToLower();
                userList = userList.Where(e => e.Name.ToLower().Contains(search)).ToList();
            }

            if (role > 0)
            {
                userList = userList.Where(e => e.UserTypeId == role).ToList();
            }

            if (sortType == "name")
            {
                userList = userList.OrderBy(e => e.Name).ToList();
            }
            else if (sortType == "email")
            {
                userList = userList.OrderBy(e => e.Email).ToList();
            }    

            userList = userList.Skip((page - 1) * PAGE_SIZE).Take(PAGE_SIZE).ToList();

            userList = userList.Select(e => new User
            {
                Id = e.Id,
                Name = e.Name,
                Email = e.Email,
                Phone = e.Phone,
                DateOfBirth = e.DateOfBirth,
                CitizenId = e.CitizenId,
                Address = e.Address == null ? e.Address : null,
                UserTypeId = e.UserTypeId,
            }).ToList();

            return userList;
        }

        [Authorize]
        [HttpGet("createUserListPDF")]
        public async Task<IActionResult> CreateUserListPDF(int role = 0)
        {
            var accessToken = await HttpContext.GetTokenAsync("access_token");
            var handler = new JwtSecurityTokenHandler();
            var jwtSecurityToken = handler.ReadJwtToken(accessToken);

            int adminId = Int32.Parse(jwtSecurityToken.Claims.First(claim => claim.Type == "nameid").Value);
            var admin = await _context.User.FindAsync(adminId);
            if (admin.UserTypeId != 3)
            {
                return StatusCode(403, $"User '{admin.Name}' is not a admin.");
            }

            var userList = await _context.User.AsQueryable().ToListAsync();

            if (role != 0)
            {
                userList = userList.Where(e => e.UserTypeId == role).ToList();
            }

            System.Diagnostics.Debug.WriteLine(userList);



            HtmlToPdf converter = new HtmlToPdf();

            PdfTextSection pageNumberingText = new PdfTextSection(0, 20, "Page {page_number} of {total_pages}", new Font("Arial", 10, FontStyle.Bold));
            pageNumberingText.HorizontalAlign = PdfTextHorizontalAlign.Center;
            converter.Footer.Add(pageNumberingText);

            PdfTextSection header = new PdfTextSection(100, 0, "ExamGo - User List", new Font("Arial", 12, FontStyle.Underline));
            header.HorizontalAlign = PdfTextHorizontalAlign.Left;
            converter.Header.Add(header);

            // set converter options
            converter.Options.PdfPageSize = PdfPageSize.A4;
            converter.Options.PdfPageOrientation = PdfPageOrientation.Landscape;
            converter.Options.DisplayFooter = true;
            converter.Options.DisplayHeader = true;
            converter.Options.MarginLeft = 10;
            converter.Options.MarginRight = 10;
            converter.Options.MarginTop = 20;
            converter.Options.MarginBottom = 20;

            var htmlStringBuilder = new StringBuilder();
            var roleFilter = (role == 1 ? "Học sinh" : role == 2 ? "Giáo viên" : role == 3 ? "Quản trị viên" : "Tất cả");

            htmlStringBuilder.Append(@"
                        <html>
                            <head>
                                <style>
                                    table, th, td {
                                        border: thin solid orange;
                                        border-collapse: collapse;
                                    }
                                    
                                    table tr:first-child {
                                        color: white;
                                        background-color: orange;
                                    }
                                    
                                    .header {
                                        font-weight: bold;
                                    }

                                    .header h5 {
                                        color: red;
                                        font-size: 20;
                                        margin-bottom: 0px;
                                        padding-bottom: 0px;
                                    }
                                </style>
                            </head>");

            htmlStringBuilder.AppendFormat(@"
                            <body style='text-align: center'>
                                <div class='header'>
                                    <h5>Danh sách người dùng</h5>
                                    <p>Vai trò: {0}</p>
                                </div>
                                <table align='center'>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên</th>
                                        <th>Email</th>
                                        <th>SĐT</th>
                                        <th>CCCD</th>
                                        <th>Địa chỉ</th>
                                        <th>Vai trò</th>
                                    </tr>"
                        , roleFilter);

            foreach (var user in userList)
            {
                var userType = (user.UserTypeId == 1 ? "Học sinh" : user.UserTypeId == 2 ? "Giáo viên" : "Quản trị viên");

                htmlStringBuilder.AppendFormat(@"
                                    <tr>
                                        <td>{0}</td>
                                        <td>{1}</td>
                                        <td>{2}</td>
                                        <td>{3}</td>
                                        <td>{4}</td>
                                        <td>{5}</td>
                                        <td>{6}</td>
                                    </tr>"
                                  , user.Id, user.Name, user.Email, user.Phone, user.CitizenId, user.Address, userType);
            }


            htmlStringBuilder.Append(@"
                                </table>
                            </body>
                        </html>");

            // create a new pdf document converting an html string
            PdfDocument pdfDocument = converter.ConvertHtmlString(htmlStringBuilder.ToString());

            pdfDocument.AddTemplate(pdfDocument.Pages[0].ClientRectangle.Width, 100);
            //pdfDocument.AddPage();

            // save pdf document
            var bytes = pdfDocument.Save();

            // file name: Example: user-list_student_2022-06-18T15-00-19.pdf
            var fileName = "user-list_" + (role == 1 ? "student" : role == 2 ? "teacher" : role == 3 ? "admin" : "all") + DateTime.Now.ToString("s") + ".pdf";

            // close pdf document
            pdfDocument.Close();

            return File(bytes, "application/pdf", fileName);
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccount(int id, Account account)
        {
            var accessToken = await HttpContext.GetTokenAsync("access_token");
            var handler = new JwtSecurityTokenHandler();
            var jwtSecurityToken = handler.ReadJwtToken(accessToken);

            int adminId = Int32.Parse(jwtSecurityToken.Claims.First(claim => claim.Type == "nameid").Value);
            var admin = await _context.User.FindAsync(adminId);
            if (admin.UserTypeId != 3)
            {
                return StatusCode(403, $"User '{admin.Name}' is not a admin.");
            }

            if (id != account.UserId)
            {
                return BadRequest();
            }

            _context.Entry(account).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool AccountExists(int id)
        {
            return _context.Account.Any(e => e.UserId == id);
        }
    }
}
