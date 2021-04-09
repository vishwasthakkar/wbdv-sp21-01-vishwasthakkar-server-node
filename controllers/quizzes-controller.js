const quizService = require('../services/quiz-service');

module.exports = app => {

    const getAllQuizzes = (req, res) =>
        res.json(quizService.findAllQuizzes());

    const getQuizById = (req, res) =>
        res.json(quizService.findQuizById(req.params.quizId));

    app.get('/api/quizzes', getAllQuizzes);
    app.get('/api/quizzes/:quizId', getQuizById);
};







