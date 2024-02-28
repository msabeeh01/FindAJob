using System.ComponentModel.DataAnnotations;

namespace server.Models.TestModel
{
    public class Test
    {
        [Key]
        public string? name { get; set; }
    }
}
