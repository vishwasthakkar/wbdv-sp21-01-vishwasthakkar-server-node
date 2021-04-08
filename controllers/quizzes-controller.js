const quizService = require('../services/quiz-service');

module.exports = app => {

    const getAllQuizzes = (req, res) =>
        res.send(quizService.findAllQuizzes());

    const getQuizById = (req, res) =>
        res.send(quizService.findQuizById(req.params.quizId));

    app.get('/api/quizzes', getAllQuizzes);
    app.get('/api/quizzes/:quizId', getQuizById);
};







