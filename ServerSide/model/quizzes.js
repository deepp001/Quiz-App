const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const quizzesSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    options: [{ id: Number, text: String, text2: String, text3: String }],
    correct: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (data, res) => {
        const { correct, ...rest } = res;
        return rest;
      },
    },
    versionKey: false,
  }
);

const QuestionBank = model("quizzes", quizzesSchema);

module.exports = QuestionBank;
