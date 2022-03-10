 
           
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
            let mother = document.querySelectorAll('#divImg');
            
            
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
                    console.log(otherM)
                    console.log(otherY)
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
                        console.log("Match Bro")
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
               

                
                countre = 0
                mother.forEach(function(seg)
                {
                        let span = seg.querySelector('span')
                        var img = span.querySelector('img')
                        Massive.push(img.src);
                    }
                )
                console.log(Massive);
                
 
                
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
                

            }
            
            
            
           
                