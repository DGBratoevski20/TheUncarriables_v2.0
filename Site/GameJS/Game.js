
var FirstVarForTimeOut;
var FirstvarForInterval, SecondVarForInterval;
var CheckArrowUp = 0;
var counterForMetres = 0;
var SecondVarForTimeOut, ThirdVarForTimeOut;
var helperOncounterForMetres = 100;
var left = 46;
var health = 700;

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
                        document.querySelector('#point').style.left =  Math.round(Math.random() * 90 + 1) + "%"
                        
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
                        document.querySelector('#bomb').style.left =  Math.round(Math.random() * 40 + 50) + "%"
                        
                        clearTimeout(SecondVarForTimeOut)
                    }, 3000)
                }, 3000)
                //bomb2
                setInterval(function()
                    {
                         
                    document.querySelector('#bomb2').style.animation = "clouds 1500ms infinite" 
                   
                   


                    
                    
                    ThirdVarForTimeOut = setTimeout(function()
                    {   
                       
                       
                        document.querySelector('#bomb2').style.left =  Math.round(Math.random() * 40 + 1) + "%"
                        
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
window.addEventListener("keydown", function(mouseEvent)
{
    switch(mouseEvent.key)
    {
        case 'ArrowLeft':
        {   
            document.querySelector('#hero').style.transition = 'none'
            document.querySelector('#hero').style.transform = 'rotateY(-180deg)';
            document.querySelector('#hero').style.transition = 'all 400ms'
                left-=25;

                break;
        }
        case 'ArrowRight':
        {
            document.querySelector('#hero').style.transition = 'none'
            document.querySelector('#hero').style.transform = 'rotateY(0deg)';
            document.querySelector('#hero').style.transition = 'all 400ms'
                left+=25
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

CheckArrowUp = 0;
window.addEventListener('touchstart',function(TouchEvent)
{
  
    var ButtonLeft = document.querySelector('#Left').getBoundingClientRect()
    var ButtonRight = document.querySelector('#Right').getBoundingClientRect()
    var buttonStartGame = document.querySelector('#Start').getBoundingClientRect()
    var XOftouching = TouchEvent.touches[0].clientX;
    var YOftouching = TouchEvent.touches[0].clientY;
    if(XOftouching >= Math.round(ButtonLeft.left) && XOftouching <= Math.round(ButtonLeft.left) + 100)
    {
        document.querySelector('#hero').style.transition = 'none'
        document.querySelector('#hero').style.transform = 'rotateY(-180deg)';
        document.querySelector('#hero').style.transition = 'all 400ms'
        left-=15;
    }
    else if(XOftouching >= Math.round(ButtonRight.left) && XOftouching <= Math.round(ButtonRight.left) + 100)
    {
        document.querySelector('#hero').style.transition = 'none'
        document.querySelector('#hero').style.transform = 'rotateY(0deg)';
        document.querySelector('#hero').style.transition = 'all 400ms'
        left+=15;
    }
    else if(YOftouching >= Math.round(buttonStartGame.top) && YOftouching <= Math.round(buttonStartGame.top) + 100)
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
        
        var contentOfH1 = document.querySelector('h1').innerText
        document.querySelector('h1').innerText = `GameOver! You reaches ${contentOfH1} with metres ${counterForMetres}`
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
    document.querySelector('.health').innerText = `${health}`
    if(left < -20)
    {
        document.querySelector('#hero').style.transition = 'none';
        left = 100
       
        
    }
    else if(left > 120)
    {
        document.querySelector('#hero').style.transition = 'none';
        left = -10
    }
    document.querySelector('#hero').style.left = left + "%"
}, 1);


