using back_end.Data;
using back_end.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;

namespace back_end.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyPolicy")]
    public class ExamController : ControllerBase
    { 
        private readonly MyDbContext _context;
        
        public ExamController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Exam>>> GetExam()
        {
            return await _context.Exam.Select(e => new Exam
            {
                Id = e.Id,
                Name = e.Name,
                MaxDuration = e.MaxDuration,
                CreatedTime = e.CreatedTime,
                TeacherId = e.TeacherId,
                SubjectId = e.SubjectId,
            }).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Exam>> GetExam(int id)
        {
            var exam = await _context.Exam.FindAsync(id);
            if (exam == null)
            {
                return NotFound();
            }

            return exam;
        }

        [HttpGet("take/{id}")]
        public async Task<ActionResult<Exam>> TakeExam(int id)
        {
            List<Question> questionList = (
            from e in _context.Exam
            join q in _context.Question on e.Id equals q.ExamId
            where e.Id == id
            select q
            ).ToList();
            foreach (var question in questionList)
            {
                List<Answer> answers = (
                from a in _context.Answer
                join q in _context.Question on a.QuestionId equals q.Id
                where q.Id == question.Id
                select a
                ).ToList();
                question.AnswerList = answers;
            }
            var exam = await _context.Exam.FindAsync(id);

            //var exam = await _context.Exam.Select(e => new Exam {
            //    Id = e.Id,
            //    Name = e.Name,
            //    MaxDuration = e.MaxDuration,
            //    CreatedTime = e.CreatedTime,
            //    TeacherId = e.TeacherId,
            //    SubjectId = e.SubjectId,
            //}).FindAsync(id);
            if (exam == null)
            {
                return NotFound();
            }
            return new Exam
            {
                Id = exam.Id,
                Name = exam.Name,
                MaxDuration = exam.MaxDuration,
                TeacherId = exam.TeacherId,
                SubjectId = exam.SubjectId,
                QuestionList = questionList,
            };
        }

        [HttpGet("result/{id}")]
        //public async Task<ActionResult<StudentExamResult>> GetStudentExamResult(int examId, int studentId)
        public async Task<ActionResult<StudentExamResult>> GetStudentExamResult(int id) //id <=> examID
        {
            int studentId = 1;
            int examId = id;
            //List<QuestionResult> questionResultList = null;
            //foreach (var question in _context.Question)
            //{
            //    QuestionResult temp = null;
            //    temp.Id = question.Id;
            //    temp.Content = question.Content;
            //    temp.CorrectAnswerId = question.CorrectAnswerId;
            //    temp.ExamId = question.ExamId;
            //    temp.ListAnswers = question.ListAnswers;
            //    //questionResultList
            //}    
            List<QuestionResult> questionResultList = (
            from sec in _context.Student_Exam_Choice
            join q in _context.Question on sec.QuestionId equals q.Id
            where sec.ExamId == examId && sec.StudentId == studentId
            select (new QuestionResult{
                Id = q.Id,
                Content = q.Content,
                CorrectAnswerId = q.CorrectAnswerId,
                ChosenAnswerId = sec.ChosenAnswerId
            })
            ).ToList();
            foreach (var question in questionResultList)
            {
                List<Answer> answers = (
                from a in _context.Answer
                join q in _context.Question on a.QuestionId equals q.Id
                where q.Id == question.Id
                select a
                ).ToList();
                question.AnswerList = answers;
            }
            var examResult = await _context.Student_Exam.FindAsync(studentId, examId); // student
            var exam = await _context.Exam.FindAsync(examId);
            var teacher = await _context.User.FindAsync(exam.TeacherId); 
            var subject = await _context.Subject.FindAsync(exam.SubjectId);
            //var exam = await _context.Exam.Select(e => new Exam {
            //    Id = e.Id,
            //    Name = e.Name,
            //    MaxDuration = e.MaxDuration,
            //    CreatedTime = e.CreatedTime,
            //    TeacherId = e.TeacherId,
            //    SubjectId = e.SubjectId,
            //}).FindAsync(id);
            if (examResult == null)
            {
                return NotFound();
            }
            return new StudentExamResult
            {
                Id = examResult.ExamId,
                Name = exam.Name,
                Teacher = teacher.Name,
                Subject = subject.Name,
                Point = examResult.Point,
                MaxDuration = exam.MaxDuration,
                Duration = examResult.Duration,
                StartTime = examResult.StartTime,
                QuestionResultList = questionResultList
            };
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutExam(int id, Exam exam)
        {
            if (id != exam.Id)
            {
                return BadRequest();
            }

            _context.Entry(exam).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExamExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Exam
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        //[HttpPost]
        //public async Task<ActionResult<Exam>> PostExam(Exam exam)
        //{
        //    DateTime now = DateTime.Now;
        //    var newExam = new Exam
        //    {
        //        Id = exam.Id,
        //        Name = exam.Name,
        //        MaxDuration = exam.MaxDuration,
        //        CreatedTime = now,
        //        TeacherId = exam.TeacherId,
        //        SubjectId = exam.SubjectId
        //    };
        //    //_context.Exam.Add(exam);
        //    _context.Exam.Add(newExam);

        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction(nameof(GetExam), new
        //    {
        //        id = exam.Id
        //    }, newExam);
        //}
        [HttpPost("take")]
        public async Task<ActionResult<StudentExam>> PostExam(ExamSubmit exam)
        {
            //DateTime now = DateTime.Now;
            //var newExam = new Exam
            //{
            //    Id = exam.Id,
            //    Name = exam.Name,
            //    MaxDuration = exam.MaxDuration,
            //    CreatedTime = now,
            //    TeacherId = exam.TeacherId,
            //    SubjectId = exam.SubjectId
            //};
            //_context.Exam.Add(exam);

            //System.Diagnostics.Debug.WriteLine(exam.StudentExam);
            _context.Student_Exam.Add(exam.StudentExam);
            foreach (var choice in exam.StudentChoiceList)
            {
                _context.Student_Exam_Choice.Add(choice);
            }
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetExam), new
            {
                id = exam.Id
            }, exam.StudentExam);
        }
        // DELETE: api/Exam/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Exam>> DeleteExam(int id)
        {
            var Exam = await _context.Exam.FindAsync(id);
            if (Exam == null)
            {
                return NotFound();
            }

            _context.Exam.Remove(Exam);
            await _context.SaveChangesAsync();

            return Exam;
        }
        private bool ExamExists(int id)
        {
            return _context.Exam.Any(e => e.Id == id);
        }
    }
}
