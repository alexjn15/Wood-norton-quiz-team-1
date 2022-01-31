mydata = require("quiz.json");
console.log(mydata);
mydata.jillsquiz.forEach((element, index) => {
  let ques = element.quizquestions[0].question;
  let topic = element.topic;
  let ans = element.quizquestions[0].correct_answer;
  let ans1 = element.quizquestions[0].answers[0];
  let ans2 = element.quizquestions[0].answers[1];
  let ans3 = element.quizquestions[0].answers[2];

  let mytemplate = `<div class="col-lg-12 ml-auto">
        <p class="pre-wrap lead">Question - ${ques}</p>
        <p class="pre-wrap lead">
            <label for="${topic}">Choose an answer:</label>
            <select name="${topic}" id="${topic}">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <ol>
                <li>${ans1}</li>
                <li>${ans2}</li>
                <li>${ans3}</li>
            </ol>
        </p>
        <button onclick="check('${topic}', ${ans})">Check this answer</button>
        <br/><br/>
      </div>`;

  document.getElementById(index.toString()).innerHTML = mytemplate;
});

function check(thistopic, correctanswer) {
  let answervalue = document.getElementById(thistopic).value;
  if (+answervalue == +correctanswer) {
    alert("Correct");
  } else {
    alert("Not Correct");
  }
}
