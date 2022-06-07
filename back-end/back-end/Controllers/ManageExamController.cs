using back_end.Data;
using back_end.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManageExamController : ControllerBase
    {
        private readonly MyDbContext _context;

        public ManageExamController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Exam>>> GetRetriveExam()
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

        [HttpPost()]
        public async Task<ActionResult<Exam>> PostExam(Exam exam)
        {
            DateTime now = DateTime.Now;
            var newExam = new Exam
            {
                Name = exam.Name,
                MaxDuration = exam.MaxDuration,
                CreatedTime = now,
                TeacherId = exam.TeacherId,
                SubjectId = exam.SubjectId,
                IsDeleted = 0
            };
            _context.Exam.Add(newExam);
            _context.SaveChanges();

            foreach (var question in exam.QuestionList)
            {
                var newQuestion = new Question
                {
                    Content = question.Content,
                    ExamId = newExam.Id,
                };
                _context.Question.Add(newQuestion);
                _context.SaveChanges();
                var correctAnswerId = 0;
                foreach (var answer in question.AnswerList.Select((value, index) => new { index, value }))
                {
                    var newAnswer = new Answer
                    {
                        Content = answer.value.Content,
                        QuestionId = newQuestion.Id,
                    };
                    _context.Answer.Add(newAnswer);
                    _context.SaveChanges();
                    if (correctAnswerId == answer.index)
                        correctAnswerId = newAnswer.Id;
                }
              
                newQuestion.CorrectAnswerId = correctAnswerId;
                _context.Entry(newQuestion).State = EntityState.Modified;
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetExam), new
            {
                id = newExam.Id
            }, newExam);
        }

        
    }
}
