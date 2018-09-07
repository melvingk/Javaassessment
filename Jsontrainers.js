function readTrainers()
{
   
    src="data.js"
    var request = new XMLHttpRequest();
    request.open('GET',resultsURL);
    request.responseURL = "json";
    request.send();

  
    request.onload = function()
    {
    
        var input = document.getElementById("trainer").value;
        var trainer = request.response; 
        trainer = JSON.parse(trainer);
        console.log(trainer.squadname);
      
        var s = request.response;
        s = JSON.parse(s);
        for(i = 0; i < trainer.length;i++)
        {
            if(trainer[i].members == input)
            {
                console.log(trainer[i]);
            }
            
         }
      
      
      
      
      
      
      
      
        
        
        
    }
}
