using System.ComponentModel.DataAnnotations;

namespace server.Models.JobsModel
{
    public class Location
    {
        public List<string> area { get; set; }
        public string __CLASS__ { get; set; }
        public string display_name { get; set; }
    }

    public class Company
    {
        public string display_name { get; set; }
        public string __CLASS__ { get; set; }
    }

    public class Category
    {
        public string __CLASS__ { get; set; }
        public string tag { get; set; }
        public string label { get; set; }
    }

    public class Root
    {
        public double longitude { get; set; }
        public string created { get; set; }
        public Location location { get; set; }
        public string adref { get; set; }
        public double latitude { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string id { get; set; }
        public Company company { get; set; }
        public string salary_is_predicted { get; set; }
        public string redirect_url { get; set; }
        public Category category { get; set; }
        public string __CLASS__ { get; set; }
    }

    public class Job
    {
        public int count { get; set; }
        public string __CLASS__ { get; set; }
        public List<Root> results { get; set; }
    }
}
