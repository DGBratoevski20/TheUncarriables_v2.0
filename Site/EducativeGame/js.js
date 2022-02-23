var t;
var t2;
var int2;
var up = 0;
var counter = 0;
var t3;
var helperOn = 100;
var left = 46;
var health = 1000;


window.addEventListener("keydown", function(e)
{
    switch(e.key)
    {
        case 'ArrowLeft':
        {   
            document.querySelector('#hero').style.transition = 'none'
            document.querySelector('#hero').style.transform = 'rotateY(-180deg)';
            document.querySelector('#hero').style.transition = 'all 400ms'
                left-=30;

                break;
        }
        case 'ArrowRight':
        {
            document.querySelector('#hero').style.transition = 'none'
            document.querySelector('#hero').style.transform = 'rotateY(0deg)';
            document.querySelector('#hero').style.transition = 'all 400ms'
                left+=30
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
                
                
                setInterval(function()
                    {
                         
                    document.querySelector('#bomb').style.animation = "clouds 1s infinite" 
                   
                   


                    
                    
                    t3 = setTimeout(function()
                    {   
                       
                        document.querySelector('#bomb').style.animation = "none"
                        document.querySelector('#bomb').style.left =  Math.round(Math.random() * 90 + 1) + "%"
                        
                        clearTimeout(t3)
                    }, 1000)
                }, 1000)

                setInterval(function()
                {
                    counter += helperOn;
                    document.querySelector('.score').innerText = `${counter}`;
                   
                        
                        if(counter >= 12000 && counter < 50000)
                        {
                            helperOn = 1000;
                            document.querySelector('h1').innerHTML = 'Stratosphere';
                            
                            
                            document.querySelector('.area').style.backgroundColor = '#1a8cff'
                              
                            

                        }
                        else if(counter >= 50000 && counter < 80000)
                        {
                            helperOn = 1000;
                            document.querySelector('h1').innerHTML = 'Mesosphere';
                            document.querySelector('.area').style.backgroundColor = '#0059b3'

                            document.querySelector('#cloud').style.animation = "none"
                            document.querySelector('#cloud').style.animation = "left-right 2s infinite"

                            document.querySelector('#cloud2').style.animation = "none"
                            document.querySelector('#cloud2').style.animation = "left-right 2s infinite"

                            document.querySelector('#cloud').style.backgroundImage = "url('alient.png')"
                            document.querySelector('#cloud2').style.backgroundImage = "url('aircraft.png')"
                            
                            
                            

                            document.querySelector('#cloud2').style.backgroundSize = 'cover'
                            document.querySelector('#cloud').style.backgroundSize = 'cover'
                        }
                        else if(counter >= 80000 && counter < 700000)
                        {
                            
                            document.querySelector('h1').innerHTML = 'Thermosphere';
                            document.querySelector('.area').style.backgroundColor = 'rgb(102, 102, 255)'

                        }
                        else if(counter >= 700000 && counter < 10000000)
                        {
                            helperOn += 100000;
                            document.querySelector('h1').innerHTML = 'Exosphere';
                            document.querySelector('.area').style.backgroundColor = '#000066'

                        }
                        else if(counter > 10000000)
                        {
                            
                            document.querySelector('h1').innerHTML = 'Space';
                            document.querySelector('.area').style.backgroundColor = 'black'
                        }

                        
                    
                }, 100)
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
    function Bomb()
    {
        if((Math.round(b.left) - Math.round(h.left) >= -40 && Math.round(b.left) - Math.round(h.left) <= 60 ) && (Math.round(b.top) - Math.round(h.top) >= -20 && Math.round(b.top) < Math.round(h.top) + 60) )
        {

            return true;
        }
    }
    if((Math.round(p.left) - Math.round(h.left) >= -40 && Math.round(p.left) - Math.round(h.left) <= 60 ) && (Math.round(p.top) - Math.round(h.top) >= -20 && Math.round(p.top) < Math.round(h.top) + 50))
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
    else if(Bomb())
    {
        document.querySelector('#bomb').style.animation = 'none'
        console.log('Hello')
        health -= 50;
    }
    
}, 1)
setInterval(function()
{
    if(health <= 0)
    {
        document.querySelector('.area').style.display = "none";
        
        document.querySelector('body').innerHTML = "<h1 style='font-size:10rem'>GameOver!</h1>"
        
        health = 0;
    }
    console.log(health)
    document.querySelector('#hero').style.left = left + "%"
}, 1);

