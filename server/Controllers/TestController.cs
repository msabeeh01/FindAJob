using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models.TestModel;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        //create a private readonly TestContext variable
        private readonly TestContext _context;

        //create a constructor that takes a TestContext object
        public TestController(TestContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Test>>> GetTests()
        {
            try
            {
                return await _context.Tests.ToListAsync();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("{name}")]
        public async Task<ActionResult<Test>> GetTest(string name)
        {
            try
            {
                var test = await _context.Tests.FindAsync(name);
                if (test == null)
                {
                    return NotFound();
                }
                return test;
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Test>> PostTest(Test test)
        {
            try
            {
                _context.Tests.Add(test);
                await _context.SaveChangesAsync();
                //return the test object by calling GetTest with the name of the test
                return CreatedAtAction("GetTest", new { name = test.name}, test);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
