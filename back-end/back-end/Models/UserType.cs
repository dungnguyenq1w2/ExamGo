using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class UserType
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;
    }
}
