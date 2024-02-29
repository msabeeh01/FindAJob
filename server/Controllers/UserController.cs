using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using server.DTO;
using server.Models.TestModel;
using server.Models.UserModel;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly TestContext _context;
        //give access to configuration settings
        private IConfiguration _config;

        public UserController(TestContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        private string GenerateJSONWebToken(UserLoginDto user)
        {
            //create claims with information containing the user
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim("username", user.username),
            };

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                             _config["Jwt:Issuer"],
                                          claims,
                                                       expires: DateTime.Now.AddMinutes(120),
                                                                    signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        // login user and return jwt token
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserLoginDto login)
        {
            //find user by name
            var user = await _context.Users.FirstOrDefaultAsync(u => u.username == login.username);

            //if user not found
            if (user == null)
            {
                return BadRequest("Invalid username or password");
            }

            //if password is incorrect
            if (user.password != login.password)
            {
                return BadRequest("Invalid username or password");
            }

            //create jwt token
            var token = GenerateJSONWebToken(login);

            //return the token as an object
            return Ok(new { token });
        }

        // GET api/<UserController>/5
        // use the token provided
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<User>> GetUser()
        {
            //get the user by decoding token
            var handler = new JwtSecurityTokenHandler();
            var token = handler.ReadJwtToken(Request.Headers["Authorization"].ToString().Split(" ")[1]);
            try
            {
                //find username in token claims
                var usernameClaim = token.Claims.FirstOrDefault(claim => claim.Type == "username");
                //find username in database by claim
                var user = await _context.Users.FirstOrDefaultAsync(u => u.username == usernameClaim.Value);
                if (user == null)
                {
                    return BadRequest("User not found");
                }
                return user;
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }   

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }


        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
