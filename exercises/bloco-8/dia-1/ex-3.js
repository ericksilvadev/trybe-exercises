const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const testCheck = (template, answers) => {
  let result = 0;
  if (answers !== 'N.A') {
    template === answers ? result += 1 : result -= 0.5;
  }
  return result;
};

const test = (template, studentAnswer, callback) => {
  let score = 0;
  for (let index = 0; index < template.length; index += 1) {
    score += callback(template[index], studentAnswer[index])
  }
  return score;
};

console.log(test(rightAnswers, studentAnswers, testCheck));
