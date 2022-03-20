let right = document.querySelector('.rightPart');
let left = document.querySelector('.leftPart');
let Quest = document.querySelector('quiz-question');
let p = document.querySelector('p');
setInterval(function(){
    right.style.left  = window.pageYOffset + 'px';
    left.style.left  = -window.pageYOffset + 'px';
    
}, 1)

window.addEventListener('scroll', ()=>
{
    p.remove();
})





//Question bank
var questionBank= [
    {
        question : 'What is the name of the tallest mountain in the world?', // ready
        option : ['Asia','Mount Everest','K5','Stara Mountain'],
        answer : 'Mount Everest'
    },
    {
        question : 'What American city is the Golden Gate Bridge located in?', // ready
        option : ['San Francisco','California','Alaska','Arizona'],
        answer : 'San Francisco'
    },
    {
        question : 'Which country is also called The Netherlands? ', //ready
        option : ['China','German','Antarctica','Holland'],
        answer : 'Holland'
    },
    {
        question : 'What is the name of the longest river in Africa? ',
        option : ['The Amazon River','The Mississippi River','The Nile River','The Yenisei River'], // ready
        answer : 'The Nile River'
    },
    {
        question : 'What country has the most natural lakes', // ready
        option : ['China','Canada','Russia','USA'],
        answer : 'Canada'
    },
    {
        question : 'What city is known as the Glass Capital of the World? ', // ready
        option : ['Chicago','Houston','Toledo','Los Angeles'],
        answer : 'Toledo'
    },
    {
        question : 'What ocean borders the state of Florida?', // ready
        option : ['Pacific Ocean','Atlantic Ocean','Indian Ocean','Arctic Ocean'],
        answer : 'Atlantic Ocean'
    },
    {
        question : 'What is the name of the largest lake in the US?', // ready
        option : ['Lake Albert','Lake Superior','Lake Edward','Lake Kivu'],
        answer : 'Lake Superior'
    },
    {
        question : 'What river flows through the Grand Canyon?', // ready
        option : ['Colorado River','Lena River','Purus River','Yukon River'],
        answer : 'Colorado River'
    },
    {
        question : 'How many total islands does Hawaii have?', // ready
        option : ['132','68','47','231'],
        answer : '132'
    }
]

var questionIN= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scoreboard= document.getElementById('scoreboard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var randAr = [];
var score= 0;
var rand;
var counterqustion = 0;
let bool = true;
function load()
{
    Rand();
}
function Rand()
{
    rand = Math.floor(Math.random()*10);
    for(let j of randAr)
    {
        console.log(j)
        if(j == rand)
        {
            bool = false;
            break;
        }
        else{
            bool = true;
        }
        
    }
    
    
    if(bool)
    {
        randAr[i] = rand;
        i++;
        console.log(randAr)
        bool= true;
        displayQuestion();
        
    }
    else{
        Rand();
    }
   
    
}
//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    questionIN.innerHTML = questionBank[rand].question;
    option0.innerHTML= questionBank[rand].option[0];
    option1.innerHTML= questionBank[rand].option[1];
    option2.innerHTML= questionBank[rand].option[2];
    option3.innerHTML= questionBank[rand].option[3];
    stat.innerHTML= "Question"+' '+(counterqustion+1)+' '+'of'+' '+questionBank.length;
    counterqustion++;
    
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[rand].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(counterqustion < questionBank.length)
    {
        
        Rand();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


//displayQuestion();