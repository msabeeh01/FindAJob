using System.ComponentModel.DataAnnotations;

namespace server.Models.UserModel
{
    public class User
    {
        [Key]
        public string? username { get; set; }
        public string? password { get; set; }
        public int? applied { get; set; }
        public int? accepted { get; set; }
        public int? rejected { get; set; }
    }
}
