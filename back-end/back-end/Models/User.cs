using back_end.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        public string Phone { get; set; } 
        public DateTime DateOfBirth { get; set; } 
        public string CitizenId { get; set; }
        public string Address { get; set; }
        [Required]
        public int UserTypeId { get; set; }

        public virtual UserType UserType { get; set; }
        //public virtual Account Account { get; set; }
    }
}
