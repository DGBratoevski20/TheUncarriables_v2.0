let right = document.querySelector('.rightPart');
let left = document.querySelector('.leftPart');
let Quest = document.querySelector('quiz-question');
let p = document.querySelector('.quiz').querySelector('p');
setInterval(function(){
    right.style.left  = window.pageYOffset + 'px';
    left.style.left  = -window.pageYOffset + 'px';
    
}, 1)

window.addEventListener('scroll', ()=>
{
    p.remove();
})




let timer = document.querySelector('.timer');
let seconds = 0, minute = 0, hours = 0;
timer.querySelector('p').innerText = `Hours: ${hours} Min: ${minute} Sec: ${seconds}`
let intervalForTimer;
intervalForTimer = setInterval(function()
{
    seconds++;
    if(seconds % 60 == 0)
    {
        minute++;
        seconds = 0;
        
    }
    else if (minute % 60 == 0 && minute > 0)
    {
        hours++;
        minute = 0;
        
    }                  
    timer.querySelector('p').innerText = `Hours: ${hours} Min: ${minute} Sec: ${seconds}`
    
}, 1000)





//Question bank
var questionBank= [
    {
        question : 'What is the capital city of Estonia?', // ready
        option : ['Tallinn','Narva','Parnu','Tartu'],
        answer : 'Tallinn'
    },
    {
        question : 'When did the First Industrial Revolution started? ', // ready
        option : ['Late 18th Century','Early 19th Century','Middle 18th Century','Early 18th Century'],
        answer : 'Middle 18th Century'
    },
    {
        question : 'What is the capital city of Cyprus? ', //ready
        option : ['Lakatamia','Paralimni','Larnaca','Nicosia'],
        answer : 'Nicosia'
    },
    {
        question : 'When did the Great Depression ended? ',
        option : ['1939','1940','1941','1942'], // ready
        answer : '1941'
    },
    {
        question : 'What is the capital city of Denmark? ', // ready
        option : ['Copenhagen','Esbjerg','Odense','Aalborg'],
        answer : 'Copenhagen'
    },
    {
        question : 'When did the Revolutionary War ended? ', // ready
        option : ['1784','1781','1783','1780'],
        answer : '1783'
    },
    {
        question : 'What is the capital city of Latvia?', // ready
        option : ['Riga','Ventspils','Liepaja','Jelgava'],
        answer : 'Riga'
    },
    {
        question : 'When is the Panama Canal created? ', // ready
        option : ['1912','1917','1914','1916'],
        answer : '1914'
    },
    {
        question : 'What is the capital city of Lithuania? ', // ready
        option : ['Klaipeda','Siauliai','Panevezys','Vilnius'],
        answer : 'Vilnius'
    },
    {
        question : 'When did WW1 ended? ', // ready
        option : ['1919','1917','1920','1916'],
        answer : '1919'
    }
]

var questionIN= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scoreboard= document.getElementById('scoreboard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var next = document.querySelector('.next');
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

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}
next.addEventListener('click', nextQuestion);

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.opacity= 1;
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerText= questionBank[a].answer;
        answers.append(list);
    }
}


//displayQuestion();
