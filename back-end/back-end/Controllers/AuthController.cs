using back_end.Data;
using back_end.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly MyDbContext _context;
        //public static Account account = new Account();
        public static AccountDto accountDto = new AccountDto();

        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration, MyDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<AccountDto>> Register(Account request)
        {
            if (AccountExists(request.Username))
            {
                return StatusCode(409, $"Account '{request.Username}' already exists.");
            }

            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            accountDto.Username = request.Username;
            accountDto.PasswordHash = passwordHash;
            accountDto.PasswordSalt = passwordSalt;


            _context.User.Add(request.User);
            await _context.SaveChangesAsync();

            Account newAccount = new Account
            {
                UserId = request.User.Id,
                Username = request.Username,
                Password = passwordHash.ToString()
            };

            _context.Account.Add(newAccount);
            await _context.SaveChangesAsync();

            return Ok(accountDto);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(Account request)
        {
            if (accountDto.Username != request.Username)
            {
                return BadRequest("Account not found.");
            }

            if (!VerifyPasswordHash(request.Password, accountDto.PasswordHash, accountDto.PasswordSalt))
            {
                return BadRequest("Wrong password.");
            }

            string token = CreateToken(accountDto);
            

            return Ok(token);
        }


        private string CreateToken(AccountDto accountDto)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, accountDto.Username)
                //new Claim(ClaimTypes.Role, "Admin")
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }

        private bool AccountExists(string username)
        {
            return _context.Account.Any(e => e.Username == username);
        }
    }
}
