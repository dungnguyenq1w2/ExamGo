using back_end.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Data
{
    public class Exam
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int MaxDuration { get; set; }
       
        public DateTime? CreatedTime { get; set; } = null!;

        [ForeignKey("teacherId")]
        public int TeacherId { get; set; }
        [ForeignKey("subjectId")]
        public int SubjectId { get; set; }
        public int IsDeleted { get; set; }
        public List<Question> QuestionList { get; set; }
        //public virtual ICollection<ExamDetail> ExamDetail { get; set; }
    }
}
