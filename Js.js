
         function display(values) 
         { 
             document.getElementById("result").value+=values 
         } 
        
         function solved() 
         { 
             let res = document.getElementById("result").value 
             let ans = eval(res) 
             document.getElementById("result").value = ans
         }
         
         function erase() 
         { 
             document.getElementById("result").value = "" 
         } 