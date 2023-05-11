const marks={"a":0,"b":1,"c":2,"d":3,"e":4};
const quizData = [
    {
        question: "Felt moments of sudden terror, fear, or fright in social situations.",
        a: "Never",
        b: "Occasionally",
        c: "Half of the time",
        d: "Most of the time",
        e:  "All the time"
    },
    {
        question: "Felt anxious, worried, or nervous about social situations.",
        a: "Never",
        b: "Occasionally",
        c: "Half of the time",
        d: "Most of the time",
        e:  "All the time"
    },
    {
        question: "Had thoughts of being rejected, humiliated, embarrassed, ridiculed, or offending others",
        a: "Never",
        b: "Occasionally",
        c: "Half of the time",
        d: "Most of the time",
        e:  "All the time"
    },{
        question: "Felt a racing heart, sweaty, trouble breathing, faint, or shaky in social situations",
        a: "Never",
        b: "Occasionally",
        c: "Half of the time",
        d: "Most of the time",
        e:  "All the time"
    },{
        question: "Felt tense muscles, felt on edge or restless, or had trouble relaxing in social situations",
        a: "Never",
        b: "Occasionally",
        c: "Half of the time",
        d: "Most of the time",
        e:  "All the time"
    },{
        question: "Avoided, or did not approach or enter, social situations",
        a: "Never",
        b: "Occasionally",
        c: "Half of the time",
        d: "Most of the time",
        e:  "All the time"
    },{
        question: "Left social situations early or participated only minimally (e.g., said little, avoided eye contact)",
        a: "Never",
        b: "Occasionally",
        c: "Half of the time",
        d: "Most of the time",
        e:  "All the time"
    },
    {
        question: "Spend a lot of time preparing what to say or how to act in social situations",
        a: "Never",
        b: "Occasionally",
        c: "Half of the time",
        d: "Most of the time",
        e:  "All the time"
    },
    {
        question: "Distracted myself to avoid thinking about social situations.",
        a: "Never",
        b: "Occasionally",
        c: "Half of the time",
        d: "Most of the time",
        e:  "All the time"
    },
    {
        question: "Needed help to cope with social situations (e.g., alcohol or medications, superstitious objects).",
        a: "Never",
        b: "Occasionally",
        c: "Half of the time",
        d: "Most of the time",
        e:  "All the time"
    },
];

const quiz= document.getElementById('quiz')
const quizans= document.getElementById('finalscore')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text=  document.getElementById('e_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        console.log(answer)
        score+=marks[answer]
        console.log(score)
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        const per=(score/(quizData.length*4))*100;
        console.log(per);
        quiz.remove();
           quizans.innerHTML = `<style>
           *
{
  margin:0;
  padding:0;
  font-family:'Roboto',sans-serif;
}
body
{
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
}
.container
{
  position:relative;
  width:900px;
  display:flex;
  justify-content:space-around;
}
.container .card
{
  position:relative;
  width:250px;
  background:linear-gradient(0deg,#1b1b1b,#222,#1b1b1b);
  display:flex;
  justify-content:center;
  align-items:center;
  height:300px;
  border-radius:4px;
  text-align:center;
  overflow:hidden;
  transition:0.5s;
}
.container .card:hover
{
  transform:translateY(-10px);
  box-shadow:0 15px 35px rgba(0,0,0,.5);
}
.container .card:before
{
  content:'';
  position:absolute;
  top:0;
  left:-50%;
  width:100%;
  height:100%;
  background:rgba(255,255,255,.03);
  pointer-events:none;
  z-index:1;
}
.percent
{
  position:relative;
  width:150px;
  height:150px;
  border-radius:50%;
  box-shadow: inset 0 0 50px #000;
  background:#222;
  z-index:1000;
}
.percent .num
{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
}
.percent .num h2
{
  color:#777;
  font-weight:700;
  font-size:40px;
  transition:0.5s;
}
.card:hover .percent .num h2
{
  color:#fff;
  font-size:60px;
}
.percent .num h2 span
{
  color:#777;
  font-size:24px;
  transition:0.5s;
}
.card:hover .percent .num h2 span
{
  color:#fff;
}
.text
{
  position:relative;
  color:#777;
  margin-top:20px;
  font-weight:700;
  font-size:18px;
  letter-spacing:1px;
  text-transform:uppercase;
  transition:0.5s;
}
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.card:hover .text
{
  color:#fff;
}
svg
{
  position:relative;
  width:150px;
  height:150px;
  z-index:1000;
}
svg circle
{
  width:100%;
  height:100%;
  fill:none;
  stroke:#191919;
  stroke-width:10;
  stroke-linecap:round;
  transform:translate(5px,5px);
}
svg circle:nth-child(2)
{
  stroke-dasharray:440;
  stroke-dashoffset:440;
}
.card:nth-child(1) svg circle:nth-child(2)
{
  stroke-dashoffset:calc(440 - (440 * ${per}) / 100);
  stroke:#00ff43;
}
</style>
           <div class="container">
           <div class="card">
             <div class="box">
               <div class="percent">
                 <svg>
                   <circle cx="70" cy="70" r="70"></circle>
                   <circle cx="70" cy="70" r="70"></circle>
                   <svg>
                     <div class="num">
                       <h2>${score}<span>/</span>${quizData.length*4}</h2>
                     </div>
               </div>
                   <h3 class="text"></h2>
             </div>
           </div>
         </div>
         <h2 class="text">Social Anxiety Score</h2>
         <center>
         <table class="styled-table"">
        <thead><tr><th>Score</th><th>Condition</th></tr></thead>
         <tr><td>0-9</td><td>None-low</td></tr>
         <tr><td>10-20</td><td>Social Anxiety Possible</td></tr>
         <tr><td>21-40</td><td>Social Anxiety Likely</td></tr>
         </table></center>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})