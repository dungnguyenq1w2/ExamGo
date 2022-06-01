using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class StudentExam
    {
        [Key] 
        public int StudentId { get; set; }
        //[Key]
        public int ExamId { get; set; }
        [Required]
        public double Point { get; set; }
        [Required]
        public DateTime StartTime { get; set; }
        [Required]
        public int Duration { get; set; }
       
    }
}
