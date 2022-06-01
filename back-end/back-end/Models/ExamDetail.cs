using back_end.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Data
{
    public class ExamDetail
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public Exam Exam { get; set; }
        [Required]
        public List<Question> Questions { get; set; }
    }
}
