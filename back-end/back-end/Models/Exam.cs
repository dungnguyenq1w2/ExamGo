using back_end.Models;
using System.Text.Json.Serialization;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

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
        [Required]
        public DateTime? CreatedTime { get; set; } = null!;

        [ForeignKey("teacherId")]
        public int TeacherId { get; set; }
        [ForeignKey("subjectId")]
        public int SubjectId { get; set; }
        public List<Question> Questions { get; set; }
        //public virtual ICollection<ExamDetail> ExamDetail { get; set; }
    }
}
