 


 document.getElementById('output').style.visibility="hidden";
           document.getElementById('lbsInput').addEventListener('input',function(e){
             document.getElementById('output').style.visibility="visible";
 let wieght = e.target.value;

           document.getElementById('gramsOutput').innerHTML=wieght*1000;
           document.getElementById('poundOutput').innerHTML=wieght*2.20462;
           document.getElementById('ozOutput').innerHTML=wieght*35.274
          })


         