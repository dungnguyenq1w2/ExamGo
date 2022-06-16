using back_end.Data;
using back_end.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly MyDbContext _context;

        public AdminController(MyDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAccount()
        {
            return await _context.User.Select(e => new User
            {
                Id = e.Id,
                Name = e.Name,
                Email = e.Email,
                //Phone = e.Phone == null ? e.Phone : null,
                //DateOfBirth = e.DateOfBirth == DateTime.MinValue? e.DateOfBirth : DateTime.MinValue,
                //CitizenId = e.CitizenId == null ? e.CitizenId : null,
                //Address = e.Address == null ? e.Address : null,
                UserTypeId = e.UserTypeId,
                UserType = e.UserType,
                //Account = e.Account,
            }).ToListAsync();
        }
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccount(int id, Account account)
        {
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
