let totalScore = 0;
let topicScore = 0;
let topics = ["celebrities", "conservation", "geography", "history", "law", "politics", "sport"];

// mydata.jillsquiz.forEach((element, index) => {
//   let topic = mydata.jillsquiz[topicIndex].topic;
//   let mytemplate = `<iframe width="280" height="157.5" src='${mydata.jillsquiz[topicIndex].quizquestions[0].video_source}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
//   let numberOfQuestions = mydata.jillsquiz[topicIndex].quizquestions.length;
//   for (let i = 0; i < mydata.jillsquiz[topicIndex].quizquestions.length; i++) {
//     let ques = mydata.jillsquiz[topicIndex].quizquestions[i].question;

//     let ans = mydata.jillsquiz[topicIndex].quizquestions[i].correct_answer;
//     let ans1 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[0];
//     let ans2 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[1];
//     let ans3 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[2];


//     mytemplate =
//       mytemplate +
//       `<div class="col-lg-12 ml-auto">
//         <p class="pre-wrap lead">Question - ${ques}</p>
//         <p class="pre-wrap lead">
//             <label for="${topic}">Choose an answer:</label>
//             <select name="${topic}" id="${topic}-option-${i}">
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//             </select>
//             <ol>
//                 <li>${ans1}</li>
//                 <li>${ans2}</li>
//                 <li>${ans3}</li>
//             </ol>
//         </p>
//         <br/><br/>
//       </div>
//      `;
//   }
//   mytemplate = mytemplate + `<button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" id="check-answer-button-${topic}" onclick="checkAllAnswers('${topic}', '${numberOfQuestions}')">Check all answers</button>`;
//   document.getElementById(index.toString()).innerHTML = mytemplate;
// });


function checkAllAnswers(thistopic, numberOfQuestions) {
    topicScore = 0;
    var topicIndex = topics.indexOf(thistopic);





    for (let i = 0; i < numberOfQuestions; i++) {
        let dummy = document.getElementById(`${thistopic}-option-${i}`).value;
        
        
        if (+dummy == +mydata.jillsquiz[topicIndex].quizquestions[i].correct_answer) {
            //alert("Correct");
            //add to total
            topicScore += 1;
          } else {
            //alert("Not Correct");
          }
    }
    totalScore += topicScore;
    document.getElementById(`check-answer-button-${thistopic}`).disabled = true;
    alert(`Score:  ${topicScore} `);
}
function check(thistopic, correctanswer) {
  let answervalue = document.getElementById(`${thistopic}-option-0`).value;

  if (+answervalue == +correctanswer) {
    alert("Correct");
    //add to total
    topicScore += 1;
  } else {
    alert("Not Correct");
  }
}
function showQuestions(format, difficulty, thistopic) {
    if (format === 'videos' && difficulty === 'easy') {
        
            var topicIndex = topics.indexOf(thistopic);
            let topic = topics[topicIndex];
            let mytemplate = `<iframe width="280" height="157.5" src='${mydata.jillsquiz[topicIndex].quizquestions[0].video_source}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            let numberOfQuestions = mydata.jillsquiz[topicIndex].quizquestions.length;
            mydata.jillsquiz[topicIndex]
            let ques = mydata.jillsquiz[topicIndex].quizquestions[0].question;
        
            let ans = mydata.jillsquiz[topicIndex].quizquestions[0].correct_answer;
            let ans1 = mydata.jillsquiz[topicIndex].quizquestions[0].answers[0];
            let ans2 = mydata.jillsquiz[topicIndex].quizquestions[0].answers[1];
        
            mytemplate =
                mytemplate +
                `<div class="col-lg-12 ml-auto">
                <p class="pre-wrap lead">Question - ${ques}</p>
                <p class="pre-wrap lead">
                <input type="radio" name="${topic}"> True
                <input type="radio" name="${topic}"> False
                </p>
                <br/><br/>
                </div>
            `;
            
            mytemplate = mytemplate + `<button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" id="check-answer-button-${topic}" onclick="checkAllAnswers('${topic}', '${numberOfQuestions}')">Check all answers</button>`;
            document.getElementById(topicIndex.toString()).innerHTML = mytemplate;
        
    } else if (format === 'multiple-choice' && difficulty === 'easy') {
        
            var topicIndex = topics.indexOf(thistopic);
            let topic = topics[topicIndex];
            // let mytemplate = `<iframe width="280" height="157.5" src='${mydata.jillsquiz[topicIndex].quizquestions[0].video_source}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            let mytemplate = ``;
            let numberOfQuestions = mydata.jillsquiz[topicIndex].quizquestions.length;
            for (let i = 0; i < mydata.jillsquiz[topicIndex].quizquestions.length; i++) {
            let ques = mydata.jillsquiz[topicIndex].quizquestions[i].question;
        
            let ans = mydata.jillsquiz[topicIndex].quizquestions[i].correct_answer;
            let ans1 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[0];
            let ans2 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[1];
            let ans3 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[2];
        
            mytemplate =
                mytemplate +
                `<div class="col-lg-12 ml-auto">
                <p class="pre-wrap lead">Question - ${ques}</p>
                <p class="pre-wrap lead">
                    <label for="${topic}">Choose an answer:</label>
                    <select name="${topic}" id="${topic}-option-${i}">
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
                <br/><br/>
                </div>
            `;
            }
            mytemplate = mytemplate + `<button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" id="check-answer-button-${topic}" onclick="checkAllAnswers('${topic}', '${numberOfQuestions}')">Check all answers</button>`;
            document.getElementById(topicIndex.toString()).innerHTML = mytemplate;
        
    } else if (format === 'both' && difficulty === 'easy') {
        var topicIndex = topics.indexOf(thistopic);
            let topic = mydata.jillsquiz[topicIndex].topic;
            let mytemplate = `<iframe width="280" height="157.5" src='${mydata.jillsquiz[topicIndex].quizquestions[0].video_source}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            let numberOfQuestions = mydata.jillsquiz[topicIndex].quizquestions.length;
            for (let i = 0; i < mydata.jillsquiz[topicIndex].quizquestions.length; i++) {
            let ques = mydata.jillsquiz[topicIndex].quizquestions[i].question;
        
            let ans = mydata.jillsquiz[topicIndex].quizquestions[i].correct_answer;
            let ans1 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[0];
            let ans2 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[1];
            let ans3 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[2];
        
            mytemplate =
                mytemplate +
                `<div class="col-lg-12 ml-auto">
                <p class="pre-wrap lead">Question - ${ques}</p>
                <p class="pre-wrap lead">
                    <label for="${topic}">Choose an answer:</label>
                    <select name="${topic}" id="${topic}-option-${i}">
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
                <br/><br/>
                </div>
            `;
            }
            mytemplate = mytemplate + `<button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" id="check-answer-button-${topic}" onclick="checkAllAnswers('${topic}', '${numberOfQuestions}')">Check all answers</button>`;
            document.getElementById(topicIndex.toString()).innerHTML = mytemplate;
    }

    else if (format === 'videos' && difficulty === 'hard') {
        var topicIndex = topics.indexOf(thistopic);
        let topic = topics[topicIndex];
        let mytemplate = `<iframe width="280" height="157.5" src='${mydata.jillsquiz[topicIndex].quizquestions[0].video_source}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        let numberOfQuestions = mydata.jillsquiz[topicIndex].quizquestions.length;
        mydata.jillsquiz[topicIndex]
        let ques = mydata.jillsquiz[topicIndex].quizquestions[0].question;
    
        let ans = mydata.jillsquiz[topicIndex].quizquestions[0].correct_answer;
        let ans1 = mydata.jillsquiz[topicIndex].quizquestions[0].answers[0];
        let ans2 = mydata.jillsquiz[topicIndex].quizquestions[0].answers[1];
    
        mytemplate =
            mytemplate +
            `<div class="col-lg-12 ml-auto">
            <p class="pre-wrap lead">Question - ${ques}</p>
            <p class="pre-wrap lead">
            <input type="radio" name="${topic}"> True
            <input type="radio" name="${topic}"> False
            </p>
            <br/><br/>
            </div>
        `;
        
        mytemplate = mytemplate + `<button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" id="check-answer-button-${topic}" onclick="checkAllAnswers('${topic}', '${numberOfQuestions}')">Check all answers</button>`;
        document.getElementById(topicIndex.toString()).innerHTML = mytemplate;
    } else if (format === 'multiple-choice' && difficulty === 'hard') {
        var topicIndex = topics.indexOf(thistopic);
            let topic = topics[topicIndex];
            // let mytemplate = `<iframe width="280" height="157.5" src='${mydata.jillsquiz[topicIndex].quizquestions[0].video_source}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            let mytemplate = ``;
            let numberOfQuestions = mydata.jillsquiz[topicIndex].quizquestions.length;
            for (let i = 0; i < mydata.jillsquiz[topicIndex].quizquestions.length; i++) {
            let ques = mydata.jillsquiz[topicIndex].quizquestions[i].question;
        
            let ans = mydata.jillsquiz[topicIndex].quizquestions[i].correct_answer;
            let ans1 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[0];
            let ans2 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[1];
            let ans3 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[2];
        
            mytemplate =
                mytemplate +
                `<div class="col-lg-12 ml-auto">
                <p class="pre-wrap lead">Question - ${ques}</p>
                <p class="pre-wrap lead">
                    <label for="${topic}">Choose an answer:</label>
                    <select name="${topic}" id="${topic}-option-${i}">
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
                <br/><br/>
                </div>
            `;
            }
            mytemplate = mytemplate + `<button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" id="check-answer-button-${topic}" onclick="checkAllAnswers('${topic}', '${numberOfQuestions}')">Check all answers</button>`;
            document.getElementById(topicIndex.toString()).innerHTML = mytemplate;
    } else if (format === 'both' && difficulty === 'hard') {
            var topicIndex = topics.indexOf(thistopic);
            let topic = mydata.jillsquiz[topicIndex].topic;
            let mytemplate = `<iframe width="280" height="157.5" src='${mydata.jillsquiz[topicIndex].quizquestions[0].video_source}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            let numberOfQuestions = mydata.jillsquiz[topicIndex].quizquestions.length;
            for (let i = 0; i < mydata.jillsquiz[topicIndex].quizquestions.length; i++) {
            let ques = mydata.jillsquiz[topicIndex].quizquestions[i].question;
        
            let ans = mydata.jillsquiz[topicIndex].quizquestions[i].correct_answer;
            let ans1 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[0];
            let ans2 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[1];
            let ans3 = mydata.jillsquiz[topicIndex].quizquestions[i].answers[2];
        
            mytemplate =
                mytemplate +
                `<div class="col-lg-12 ml-auto">
                <p class="pre-wrap lead">Question - ${ques}</p>
                <p class="pre-wrap lead">
                    <label for="${topic}">Choose an answer:</label>
                    <select name="${topic}" id="${topic}-option-${i}">
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
                <br/><br/>
                </div>
            `;
            }
            mytemplate = mytemplate + `<button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" id="check-answer-button-${topic}" onclick="checkAllAnswers('${topic}', '${numberOfQuestions}')">Check all answers</button>`;
            document.getElementById(topicIndex.toString()).innerHTML = mytemplate;
        
    }
}
function getTotal() {
    alert(`Your total is ${totalScore}`);
}
