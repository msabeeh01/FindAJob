using Microsoft.EntityFrameworkCore;
using server.Models.JobsModel;
using server.Models.UserModel;

namespace server.Models.TestModel
{
    public class TestContext : DbContext
    {
        public TestContext(DbContextOptions<TestContext> options) : base(options)
        {
        }

        public DbSet<Test> Tests { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Job> Jobs { get; set; }
    }
}
