const QuestionBank = require("../model/quizzes");

const Onequize = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await QuestionBank.findById(id);
    if (question === null) {
      throw new Error("Record not exist");
    }
    res.send(question);
  } catch (error) {
    res.json({ message: error });
  }
};
const addquizz = async (req, res) => {
  try {
    const newQuestion = new QuestionBank(req.body);
    const savedQuestion = await newQuestion.save();
    res.send(savedQuestion);
  } catch (error) {
    res.json({ message: error });
  }
};
const CheckAns = async (req, res) => {
  try {
    const { body: ansList } = req;
    let result = 0;
    for (let index = 0; index < ansList.length; index++) {
      const element = ansList[index];
      const correctAns = await QuestionBank.findOne({
        _id: element._id,
        correct: element.ans,
      });
      if (correctAns) {
        result += 1;
      }
    }
    res.send({ result, total: ansList.length });
  } catch (error) {
    res.send(error);
  }
};
const Allquizz = async (req, res) => {
  try {
    const searchQuery = {};
    const keys = Object.keys(req.query);

    for (let i = 0; i < keys.length; i += 1) {
      const element = keys[i];
      searchQuery[element] = req.query[element];
    }

    const questions = await QuestionBank.find(searchQuery);

    res.send(questions);
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = {
  Onequize,
  addquizz,
  Allquizz,
  CheckAns,
};
