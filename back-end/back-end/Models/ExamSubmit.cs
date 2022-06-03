using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class ExamSubmit
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public StudentExam StudentExam { get; set; }
        [Required]
        public List<StudentExamChoice> StudentChoices { get; set; }
    }
}
