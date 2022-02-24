var t;
var t2;
var int2, int3;
var up = 0;
var counter = 0;
var t3, t4;
var helperOn = 100;
var left = 46;
var health = 700;


window.addEventListener("keydown", function(e)
{
    switch(e.key)
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
            up++;
            if(up == 1)
            {
                document.querySelector('h1').innerHTML = 'Troposphere';
                setInterval(function()
                {
                    document.querySelector('#point').style.animation = "clouds 2s infinite"
                    
                    
                    
                    
                    
                    
                    t2 = setTimeout(function()
                    {   
                        
                        document.querySelector('#point').style.animation = "none"
                        document.querySelector('#point').style.left =  Math.round(Math.random() * 90 + 1) + "%"
                        
                        clearTimeout(t2)
                    }, 2000)
                }, 2000)
                
                //bomb
                setInterval(function()
                    {
                         
                    document.querySelector('#bomb').style.animation = "clouds 3s infinite" 
                   
                   


                    
                    
                    t3 = setTimeout(function()
                    {   
                       
                        document.querySelector('#bomb').style.animation = "none"
                        document.querySelector('#bomb').style.left =  Math.round(Math.random() * 40 + 50) + "%"
                        
                        clearTimeout(t3)
                    }, 3000)
                }, 3000)
                //bomb2
                setInterval(function()
                    {
                         
                    document.querySelector('#bomb2').style.animation = "clouds 1500ms infinite" 
                   
                   


                    
                    
                    t4 = setTimeout(function()
                    {   
                       
                       
                        document.querySelector('#bomb2').style.left =  Math.round(Math.random() * 40 + 1) + "%"
                        
                        clearTimeout(t4)
                    }, 1500)
                }, 1500)

                int3 = setInterval(function()
                {
                    counter += helperOn;
                    document.querySelector('.score').innerText = `${counter}`;
                   
                        
                        if(counter >= 12000 && counter < 50000)
                        {
                            helperOn = 1000;
                            document.querySelector('h1').innerHTML = 'Stratosphere';
                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "clouds 8s infinite"
                            document.querySelector('#cloud').style.backgroundImage = "url('baloon.png')"
                            document.querySelector('.area').style.backgroundColor = '#1a8cff'
                              
                            

                        }
                        else if(counter >= 50000 && counter < 80000)
                        {
                            helperOn = 1000;
                            document.querySelector('h1').innerHTML = 'Mesosphere';
                            document.querySelector('.area').style.backgroundColor = '#0059b3'

                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "left-right 8s infinite"

                            document.querySelector('#cloud2').style.animation = "none"
                            document.querySelector('#cloud2').style.animation = "right-left 6s infinite"

                            document.querySelector('#cloud').style.backgroundImage = "url('aircraft.png')"
                            document.querySelector('#cloud2').style.backgroundImage = "url('aircraft2.png')"
                            
                            
                            

                            document.querySelector('#cloud2').style.backgroundSize = 'cover'
                            document.querySelector('#cloud').style.backgroundSize = 'cover'
                        }
                        else if(counter >= 80000 && counter < 700000)
                        {
                            helperOn = 5000;
                            document.querySelector('h1').innerHTML = 'Thermosphere';
                            document.querySelector('.area').style.backgroundColor = 'rgb(102, 102, 255)'

                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "left-right 6s infinite"

                            document.querySelector('#cloud2').style.animation = "none"
                            document.querySelector('#cloud2').style.animation = "right-left 8s infinite"

                            document.querySelector('#cloud').style.backgroundImage = "url('alient.png')"
                            document.querySelector('#cloud2').style.backgroundImage = "url('aircraft.png')"

                        }
                        else if(counter >= 700000 && counter < 10000000)
                        {
                            helperOn += 10000;
                            document.querySelector('h1').innerHTML = 'Exosphere';
                            document.querySelector('.area').style.backgroundColor = '#000066'

                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "left-right 9s infinite"

                            document.querySelector('#cloud2').style.animation = "none"
                            document.querySelector('#cloud2').style.animation = "right-left 10s infinite"

                            document.querySelector('#cloud').style.backgroundImage = "url('alient.png')"
                            document.querySelector('#cloud2').style.backgroundImage = "url('aircraft.png')"

                        }
                        else if(counter > 10000000)
                        {
                            
                            document.querySelector('h1').innerHTML = 'Space';
                            document.querySelector('.area').style.backgroundColor = 'black'

                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "left-right 10s infinite"

                            document.querySelector('#cloud2').style.animation = "none"
                            document.querySelector('#cloud2').style.animation = "right-left 12s infinite"

                            document.querySelector('#cloud').style.backgroundImage = "url('alient.png')"
                            document.querySelector('#cloud2').style.backgroundImage = "url('comet.png')"
                        }

                        
                    
                }, 400)
            }
                
                
            
            document.querySelector('.engine').style.top = '100%'
            document.querySelector('#cloud').style.animation = "clouds 4s infinite"
            document.querySelector('#cloud2').style.animation = "clouds 3s infinite"
            break;
        }
    }
})












//Find Collusion
setInterval(function()
{
    var p = document.querySelector('#point').getBoundingClientRect();
    var h = document.querySelector('#hero').getBoundingClientRect();
    var b = document.querySelector('#bomb').getBoundingClientRect();
    var b2 = document.querySelector('#bomb2').getBoundingClientRect();

    
    function Bomb1()
    {
        if((Math.round(b.left) - Math.round(h.left) >= -40 && Math.round(b.left) - Math.round(h.left) <= 60 ) && (Math.round(b.top) - Math.round(h.top) >= -40 && Math.round(b.top) < Math.round(h.top) + 60) )
        {

            return true;
        }
        
    }
    function Bomb2()
    {
        if((Math.round(b2.left) - Math.round(h.left) >= -40 && Math.round(b2.left) - Math.round(h.left) <= 60 ) && (Math.round(b2.top) - Math.round(h.top) >= -40 && Math.round(b2.top) < Math.round(h.top) + 60) )
        {
            return true;
        }
    }
    if((Math.round(p.left) - Math.round(h.left) >= -40 && Math.round(p.left) - Math.round(h.left) <= 60 ) && (Math.round(p.top) - Math.round(h.top) >= -40 && Math.round(p.top) < Math.round(h.top) + 50))
    {
       
        document.querySelector('#point').style.animation = 'none'
        console.log('Hello')
        counter += helperOn;

        
        if(counter < 12000)
        {   document.querySelector('#cloud').style.animation= 'none'
            document.querySelector('#cloud2').style.animation ='none'

            document.querySelector('#cloud').style.animation = 'clouds 1s infinite'
            document.querySelector('#cloud2').style.animation ='clouds 500ms infinite'

            setTimeout(() => {
                document.querySelector('#cloud').style.animation = 'clouds 5s infinite'
                document.querySelector('#cloud2').style.animation ='clouds 3s infinite'
            }, 1000);
        }
       
        

     

        document.querySelector('.score').innerText = `${counter}`;
        
        
    }
    else if(Bomb1())
    {
        document.querySelector('#bomb').style.animation = 'none'
        console.log('Hello')
        health -= 40;
    }
    else if(Bomb2())
    {
        document.querySelector('#bomb2').style.animation = 'none'
        console.log('Hello')
        health -= 40;
    }
    
}, 1)






int2 = setInterval(function()
{
    if(health <= 0)
    {
        
        document.querySelector('.area').style.display = "none";
        
        var con = document.querySelector('h1').innerText
        document.querySelector('h1').innerText = `GameOver! You reaches ${con} with metres ${counter}`
        switch(con)
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
        
        
        helperOn = 0;
        clearInterval(int2);
        clearInterval(int3);
    }
    document.querySelector('.health').innerText = `${health}`;
    document.querySelector('#hero').style.left = left + "%"
}, 1);

