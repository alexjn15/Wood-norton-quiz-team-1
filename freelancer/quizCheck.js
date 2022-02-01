let topicScore = 0;

mydata.jillsquiz.forEach((element, index) => {
  let topic = element.topic;
  let mytemplate = "";
  for (let i = 0; i < element.quizquestions.length; i++) {
    let ques = element.quizquestions[i].question;

    let ans = element.quizquestions[i].correct_answer;
    let ans1 = element.quizquestions[i].answers[0];
    let ans2 = element.quizquestions[i].answers[1];
    let ans3 = element.quizquestions[i].answers[2];

    mytemplate =
      mytemplate +
      `<div class="col-lg-12 ml-auto">
        <p class="pre-wrap lead">Question - ${ques}</p>
        <p class="pre-wrap lead">
            <label for="${topic}">Choose an answer:</label>
            <select name="${topic}" id="${topic}-option">
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
      </div>
     `;
     console.log("index", document.getElementById(index.toString()));
  }
  mytemplate = mytemplate + `<button onclick="checkAllAnswers()">Check all answers</button>`;
  document.getElementById(index.toString()).innerHTML = mytemplate;
});

function checkAllAnswers() {
    alert("Score: ", topicScore);
//     for (let i = 0; i < element.quizquestions.length; i++) {
}
function check(thistopic, correctanswer) {
  let answervalue = document.getElementById(`${thistopic}-option`).value;

  if (+answervalue == +correctanswer) {
    alert("Correct");
    //add to total
    topicScore += 1;
    console.log("score: ", topicScore);
  } else {
    alert("Not Correct");
  }
}
