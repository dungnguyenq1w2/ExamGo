using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class StudentExam
    {
        [Key] 
        [Column(Order = 0)]
        public int StudentId { get; set; }
        [Key]
        [Column(Order = 1)]
        public int ExamId { get; set; }
        [Required]
        public double Point { get; set; }
        [Required]
        public DateTime StartTime { get; set; }
        [Required]
        public int Duration { get; set; }
    }
}
