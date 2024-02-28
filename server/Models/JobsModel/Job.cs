using System.ComponentModel.DataAnnotations;

namespace server.Models.JobsModel
{
    public class Job
    {
        [Key] 
        public int Id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string? location { get; set; }
        public string? salary { get; set; }
        public string? company { get; set; }
        public string? date { get; set; }
        public string? status { get; set; }
    }
}
