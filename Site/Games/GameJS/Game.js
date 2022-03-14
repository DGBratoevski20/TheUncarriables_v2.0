
var FirstVarForTimeOut;
var FirstvarForInterval, SecondVarForInterval;
var CheckArrowUp = 0;
var counterForMetres = 0;
var SecondVarForTimeOut, ThirdVarForTimeOut;
var helperOncounterForMetres = 100;
var left = 46;
var health = 700;
var ButtonLeft;
var ButtonRight;
var buttonStartGame; 
var helperOnLeftComp = 15;
var helperOnLeftMob = 15;
var eighty = 93;

document.querySelector('.score').innerText = '0'
function UP()
{
    if(CheckArrowUp == 1)
            {
                document.querySelector('h1').innerHTML = 'Troposphere';
                setInterval(function()
                {
                    document.querySelector('#point').style.animation = "clouds 2s infinite"
                    
                    
                    
                    
                    
                    
                    FirstVarForTimeOut = setTimeout(function()
                    {   
                        
                        document.querySelector('#point').style.animation = "none"
                        document.querySelector('#point').style.left =  Math.round(Math.random() * 99+ 1) + "%"
                        
                        clearTimeout(FirstVarForTimeOut)
                    }, 2000)
                }, 2000)
                
                //bomb
                setInterval(function()
                    {
                         
                    document.querySelector('#bomb').style.animation = "clouds 3s infinite" 
                   
                   


                    
                    
                    SecondVarForTimeOut = setTimeout(function()
                    {   
                       
                        document.querySelector('#bomb').style.animation = "none"
                        document.querySelector('#bomb').style.left =  Math.round(Math.random() * 1 + 50) + "%"
                        
                        clearTimeout(SecondVarForTimeOut)
                    }, 3000)
                }, 3000)
                //bomb2
                setInterval(function()
                    {
                         
                    document.querySelector('#bomb2').style.animation = "clouds 1500ms infinite" 
                   
                   


                    
                    
                    ThirdVarForTimeOut = setTimeout(function()
                    {   
                       
                       
                        document.querySelector('#bomb2').style.left =  Math.round(Math.random() * 50 + 40) + "%"
                        
                        clearTimeout(ThirdVarForTimeOut)
                    }, 1500)
                }, 1500)

                SecondVarForInterval = setInterval(function()
                {
                    counterForMetres += helperOncounterForMetres;
                    document.querySelector('.score').innerText = `${counterForMetres}`;
                   
                        
                        if(counterForMetres >= 12000 && counterForMetres < 50000)
                        {
                            helperOncounterForMetres = 1000;
                            document.querySelector('h1').innerHTML = 'Stratosphere';
                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "clouds 8s infinite"
                            document.querySelector('#cloud').style.backgroundImage = "url('images/baloon.png')"
                            document.querySelector('.area').style.backgroundColor = '#1a8cff'
                              
                            

                        }
                        else if(counterForMetres >= 50000 && counterForMetres < 80000)
                        {
                            helperOncounterForMetres = 1000;
                            document.querySelector('h1').innerHTML = 'Mesosphere';
                            document.querySelector('.area').style.backgroundColor = '#0059b3'

                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "left-right 8s infinite"

                            document.querySelector('#cloud2').style.animation = "none"
                            document.querySelector('#cloud2').style.animation = "right-left 6s infinite"

                            document.querySelector('#cloud').style.backgroundImage = "url('images/aircraft.png')"
                            document.querySelector('#cloud2').style.backgroundImage = "url('images/aircraft2.png')"
                            
                            
                            

                            document.querySelector('#cloud2').style.backgroundSize = 'cover'
                            document.querySelector('#cloud').style.backgroundSize = 'cover'
                        }
                        else if(counterForMetres >= 80000 && counterForMetres < 700000)
                        {
                            helperOncounterForMetres = 5000;
                            document.querySelector('h1').innerHTML = 'Thermosphere';
                            document.querySelector('.area').style.backgroundColor = 'rgb(102, 102, 255)'

                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "left-right 6s infinite"

                            document.querySelector('#cloud2').style.animation = "none"
                            document.querySelector('#cloud2').style.animation = "right-left 8s infinite"

                            document.querySelector('#cloud').style.backgroundImage = "url('images/alient.png')"
                            document.querySelector('#cloud2').style.backgroundImage = "url('images/aircraft.png')"

                        }
                        else if(counterForMetres >= 700000 && counterForMetres < 10000000)
                        {
                            helperOncounterForMetres += 10000;
                            document.querySelector('h1').innerHTML = 'Exosphere';
                            document.querySelector('.area').style.backgroundColor = '#000066'

                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "left-right 9s infinite"

                            document.querySelector('#cloud2').style.animation = "none"
                            document.querySelector('#cloud2').style.animation = "right-left 10s infinite"

                            document.querySelector('#cloud').style.backgroundImage = "url('images/alient.png')"
                            document.querySelector('#cloud2').style.backgroundImage = "url('images/aircraft.png')"

                        }
                        else if(counterForMetres > 10000000)
                        {
                            
                            document.querySelector('h1').innerHTML = 'Space';
                            document.querySelector('.area').style.backgroundColor = 'black'

                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "left-right 10s infinite"

                            document.querySelector('#cloud2').style.animation = "none"
                            document.querySelector('#cloud2').style.animation = "right-left 12s infinite"

                            document.querySelector('#cloud').style.backgroundImage = "url('images/alient.png')"
                            document.querySelector('#cloud2').style.backgroundImage = "url('images/comet.png')"
                        }

                        
                    
                }, 400)
            }
                
                
            
            document.querySelector('.engine').style.top = '100%'
            document.querySelector('#cloud').style.animation = "clouds 4s infinite"
            document.querySelector('#cloud2').style.animation = "clouds 3s infinite"
}
// Interval for Left-Right Hero

window.addEventListener("keydown", function(mouseEvent)
{
    switch(mouseEvent.key)
    {
        case 'ArrowLeft':
        {   
                    
            
      
            
                 
                
                    if(left < 15)
                    {
                    helperOnLeftComp = 0
                
                    }
                    else
                    {
                        helperOnLeftComp = 15;
                    }
                    left-=helperOnLeftComp;
                    
                    
                   
                
                

                break;
        }
        case 'ArrowRight':
        {
            
            
            
            
           
            
            if(left > 76)
            {
            helperOnLeftComp = 0
        
            }
            else
            {
                helperOnLeftComp = 15;
            }
            left+=helperOnLeftComp;
            
                break;
        }
        case 'ArrowUp':
        {
            CheckArrowUp++;
            UP();
            break;
        }
    }
})












//Find Collusion
setInterval(function()
{
    var point = document.querySelector('#point').getBoundingClientRect();
    var hero = document.querySelector('#hero').getBoundingClientRect();
    var firstBomb = document.querySelector('#bomb').getBoundingClientRect();
    var secondBomb = document.querySelector('#bomb2').getBoundingClientRect();

    
    function Bomb1()
    {
        if((Math.round(firstBomb.left) - Math.round(hero.left) >= -40 && Math.round(firstBomb.left) - Math.round(hero.left) <= 60 ) && (Math.round(firstBomb.top) - Math.round(hero.top) >= -40 && Math.round(firstBomb.top) < Math.round(hero.top) + 60) )
        {

            return true;
        }
        
    }
    function Bomb2()
    {
        if((Math.round(secondBomb.left) - Math.round(hero.left) >= -40 && Math.round(secondBomb.left) - Math.round(hero.left) <= 60 ) && (Math.round(secondBomb.top) - Math.round(hero.top) >= -40 && Math.round(secondBomb.top) < Math.round(hero.top) + 60) )
        {
            return true;
        }
    }
    if((Math.round(point.left) - Math.round(hero.left) >= -40 && Math.round(point.left) - Math.round(hero.left) <= 60 ) && (Math.round(point.top) - Math.round(hero.top) >= -40 && Math.round(point.top) < Math.round(hero.top) + 50))
    {
       
        document.querySelector('#point').style.animation = 'none'
        
        counterForMetres += helperOncounterForMetres;

        
        if(counterForMetres < 12000)
        {   document.querySelector('#cloud').style.animation= 'none'
            document.querySelector('#cloud2').style.animation ='none'

            document.querySelector('#cloud').style.animation = 'clouds 1s infinite'
            document.querySelector('#cloud2').style.animation ='clouds 500ms infinite'

            setTimeout(() => {
                document.querySelector('#cloud').style.animation = 'clouds 5s infinite'
                document.querySelector('#cloud2').style.animation ='clouds 3s infinite'
            }, 1000);
        }
       
        

     

        document.querySelector('.score').innerText = `${counterForMetres}`;
        
        
    }
    else if(Bomb1())
    {
        document.querySelector('#bomb').style.animation = 'none'

        health -= 50;
    }
    else if(Bomb2())
    {
        document.querySelector('#bomb2').style.animation = 'none'
        
        health -= 50;
    }
    
}, 1)


//Mobile Buttons

CheckArrowUp = 0
setInterval(function()
{
     ButtonLeft = document.querySelector('#Left').getBoundingClientRect()
     ButtonRight = document.querySelector('#Right').getBoundingClientRect()
    buttonStartGame = document.querySelector('#Start').getBoundingClientRect()

}, 1)
  
window.addEventListener('touchstart',function(TouchEvent)
{
  
    
    var XOftouching = TouchEvent.touches[0].clientX;
    var YOftouching = TouchEvent.touches[0].clientY;
    if(XOftouching >= Math.round(ButtonLeft.left) && XOftouching <= Math.round(ButtonLeft.left) + ButtonLeft.width &&
    YOftouching >= Math.round(ButtonLeft.top) && YOftouching <= Math.round(ButtonLeft.top) + ButtonLeft.height)
    {
        
        
        if(left < 15)
        {
        helperOnLeftMob= 0
    
        }
        else
        {
            helperOnLeftMob = 15;
        }
        left-=helperOnLeftMob;
        
      
        
    }
    else if(XOftouching >= Math.round(ButtonRight.left) && XOftouching <= Math.round(ButtonRight.left) + ButtonRight.width &&
    YOftouching >= Math.round(ButtonRight.top) && YOftouching <= Math.round(ButtonRight.top) + ButtonRight.height)
    {
       
        if(left > 76)
        {
        helperOnLeftMob= 0
    
        }
        else
        {
            helperOnLeftMob = 15;
        }
        left+=helperOnLeftMob;
        
        
    }
    else if(YOftouching >= Math.round(buttonStartGame.top) && YOftouching <= Math.round(buttonStartGame.top) + buttonStartGame.height && XOftouching >= Math.round(buttonStartGame.left) && XOftouching <= Math.round(buttonStartGame.left) + buttonStartGame.width)
    {
        CheckArrowUp++;
        UP();
    }


})



//The End of the game
FirstvarForInterval = setInterval(function()
{
    if(health <= 0)
    {
        
        document.querySelector('.area').style.display = "none";
        document.querySelector('.btns').style.opacity = "0";
        document.querySelector('body').style.overflow = "auto";
        
        var contentOfH1 = document.querySelector('h1').innerText
        
        if(document.body.clientWidth < 860 && document.body.clientWidth > 400)
        {
            document.querySelector('h1').style.fontSize = "0.8rem"
            document.querySelector('h1').style.width = '100px'; 
        }
        document.querySelector('h1').innerText = `Game Over! You reached the ${contentOfH1} with ${counterForMetres} metres.`
        switch(contentOfH1)
        {
            case "Troposphere":
            {
                document.querySelector('#Troposphere').style.opacity = '1'
                break
            }
            case "Stratosphere":
            {
                document.querySelector('#Troposphere').style.opacity = '1'
                document.querySelector('#Stratosphere').style.opacity = '1'
                break;
            }
            case "Mesosphere":
            {
                document.querySelector('#Troposphere').style.opacity = '1'
                document.querySelector('#Stratosphere').style.opacity = '1'
                document.querySelector('#Mesosphere').style.opacity = '1'
                break;
            }
            case "Thermosphere":
            {
                document.querySelector('#Troposphere').style.opacity = '1'
                document.querySelector('#Stratosphere').style.opacity = '1'
                document.querySelector('#Mesosphere').style.opacity = '1'
                document.querySelector('#Thermosphere').style.opacity = '1'
                break;
            }
            case "Exosphere":
            {
                document.querySelector('#Troposphere').style.opacity = '1'
                document.querySelector('#Stratosphere').style.opacity = '1'
                document.querySelector('#Mesosphere').style.opacity = '1'
                document.querySelector('#Thermosphere').style.opacity = '1'
                document.querySelector('#Exosphere').style.opacity = '1'
                break;
            }
            case "Space":
            {
                document.querySelector('#Troposphere').style.opacity = '1'
                document.querySelector('#Stratosphere').style.opacity = '1'
                document.querySelector('#Mesosphere').style.opacity = '1'
                document.querySelector('#Thermosphere').style.opacity = '1'
                document.querySelector('#Exosphere').style.opacity = '1'
                document.querySelector('#Space').style.opacity = '1'
                break;
            }

        }
        
        
        helperOncounterForMetres = 0;
        clearInterval(FirstvarForInterval);
        clearInterval(SecondVarForInterval);
    }
    if(document.body.clientWidth < 1100)
    {
        eighty = 90;
    }
    if(document.body.clientWidth < 600)
    {
        eighty = 84;
    }
    if(document.body.clientWidth > 1100)
    {
        eighty = 91;
    }
    document.querySelector('.health').innerText = `${health}`
    document.querySelector('#hero').style.left = left + "%"
    
    
}, 1);

