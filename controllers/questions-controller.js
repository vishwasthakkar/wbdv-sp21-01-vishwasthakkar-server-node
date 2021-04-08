const questionsService = require('../services/questions-service');

module.exports = (app) => {

    const getQuestionsForQuiz = (req, res) =>
        res.send(questionsService.findQuestionsForQuiz(req.params.quizId));

    app.get('/api/quizzes/:quizId/questions', getQuestionsForQuiz);

};