using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class StudentExamChoices
    {
        [Key]
        public int StudentId { get; set; }
        //[Key]
        public int ExamId { get; set; }
        //[Key]
        public int QuestionId { get; set; }
        [Required]
        public int ChosenAnswerId { get; set; }
    }
}
