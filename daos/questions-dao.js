const questionsModel = require('../models/questions/questions-model');
const quizzesModel = require('../models/quizzes/quizzes-model');

const findAllQuestions = () => questionsModel.find();
const findQuestionById = (qid) => questionsModel.findById(qid);
const findQuestionsForQuiz = (qzid) => questionsModel.find({quizId: qzid})
    .then(quizzes => quizzes);

module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz };