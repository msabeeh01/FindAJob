using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Models.JobsModel;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        // GET: api/<JobsController>
        [HttpGet]
        public async Task<ActionResult<string>> GetJobs()
        {
            try
            {
                var client = new HttpClient();
                var response = await client.GetAsync("https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=7962b1df&app_key=a83d60867cd49b63bd309cc5e7da9c8d&what=fullstack&where=L5M7V1");
                var byteArray = await response.Content.ReadAsByteArrayAsync();
                var content = Encoding.UTF8.GetString(byteArray);
                return Ok(content);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET api/<JobsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<JobsController>
        [HttpPost]
        //[FromBody] string title, string location
        public void Post()
        {


        }

        // PUT api/<JobsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<JobsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
