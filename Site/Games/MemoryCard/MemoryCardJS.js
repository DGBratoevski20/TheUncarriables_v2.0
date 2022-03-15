 
           
            var rand;
            var Massive = [];
            let countre = 0;
            let counter =0
            let co = 0;
            let otherM = new Array(2);
            let otherY = new Array(2);
            var string = "rotateY(180deg)";
            var checkIfdouble = 0;
            var SpanAll = document.querySelectorAll('span');
            let area = document.querySelector('.cardArea');
            let timer = document.querySelector('.timer');
            let mother = document.querySelectorAll('#divImg');
            let seconds = 0, minute = 0, hours = 0;
            let findGameOver = 0;
            let intervalForTimer;
            let intervalForGameOver;
            timer.querySelector('p').innerText = `Hours:${hours} Min:${minute} Sec:${seconds}`
            
            mother.forEach(function(item)
            {
                function Click()
                {
                    
                    item.style.transform = string
                    checkIfdouble++;
                    otherM[counter] = item.querySelector('span').querySelector('img').src;
                    counter++;
                    otherY[co] = item;
                    co++;
                   if(checkIfdouble == 2)
                   {
                    
                    counter = 0;
                    
                    match(otherM, otherY);
                    co = 0
                    checkIfdouble = 0
                    for(let i of mother)
                    {

                        
                        i.classList.add('dis')
                    }
                   }
                   else{
                       item.classList.add('dis')
                   }
                   
                   
                  
                }
                function match(arr, arr1)
                {
                
                    if(arr[0] == arr[1])
                    {
                        
                        setTimeout(function()
                        {
                            for(let i of mother)
                            {
                                
                                    
                                        i.classList.remove('dis')
                                    
                                    
                                        
                                    
                                    
                            }
                            arr1[0].classList.add('disFor')
                            arr1[1].classList.add('disFor')
                        },500)
                        
                        
                    }
                    else{
                        setTimeout(function()
                        {
                            
                            arr1[0].style.cssText = 'transform: rotateY(0)'
                            arr1[1].style.cssText = "transform: rotateY(0)"
                            string = "rotateY(180deg)";
                            for(let i of mother)
                            {
                                i.classList.remove('dis')
                            }
                        }, 1000)
                    }
            
                }
                item.addEventListener('click', Click)

            })
            
            
           function l()
            {
               
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
                        
                    }                  
                   timer.querySelector('p').innerText = `Hours:${hours} Min:${minute} Sec:${seconds}`
                }, 1000)
                
                countre = 0
                mother.forEach(function(seg)
                {
                        let span = seg.querySelector('span')
                        var img = span.querySelector('img')
                        Massive.push(img.src);
                    }
                )
                
                
 
                
                for(var i = 0; i <  Massive.length; i++)
                {
                    rand = Math.floor(Math.random() * Massive.length)
                    var temp = Massive[rand];
                    Massive[rand] = Massive[i];
                    Massive[i] = temp;
                }
                
                for(let i of SpanAll)
                {
                    i.querySelector('img').src = Massive[countre]
                    countre++;
                }
                intervalForGameOver = setInterval(function()
                {
                    for(let i of mother)
                    {
                        
                        if(i.classList.contains('disFor'))
                        {
                            findGameOver++;
                        }
                    }
                    if(findGameOver == mother.length)
                    {   
                        
                        document.querySelector('.gameOverScreen').style.display = 'block';
                        area.remove();
                        timer.remove();
                        clearInterval(intervalForTimer);
                        clearInterval(intervalForGameOver);
                        document.querySelector('.gameOverScreen').querySelector('article').querySelector('p').innerText += timer.querySelector('p').innerText;

                    }
                    else{
                        findGameOver = 0;
                    }
                },100)

            }
            
            
            
           
                