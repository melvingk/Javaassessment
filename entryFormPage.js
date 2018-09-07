function verify()
{ 

    var valid=true;
    var nameEx = /^[a-zA-Z]+$/;   // the regex for alphabets
    var dobEx = /^d{1,2}\/\d{1,2}\/\d{4}+$/; // the regex for date of birth
    var addEx=   /^[A-Za-z0-9-]+$/; // the regex for address
    var postEx= /^[A-Za-z0-9]+$/;// the regex for postcode
    var emailEx = /^w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}+$/;// Regex for email    
       
    
    if(!(document.getElementById("name").value.match(nameEx))) // states if the name data inputted doesnt match the regex
    {  
        document.getElementById("valName").innerHTML  = "enter a valid name"; // returns the error message
        document.getElementById("valName").focus // bascially with focus it return the cursor to the first empty value. In this case, the email.
        valid = false;    
           
        } 
        else 
            {
            document.getElementById("valName").innerHTML = ""; 
            var element = document.getElementById("name"); 
            }
    
    if(!(document.getElementById("dob").value.match(dobEx))) 
        {  
        document.getElementById("valDob").innerHTML  = "enter a date of birth"; 
        document.getElementById("valDob").focus 
        valid = false;           
        } 
        else 
            {
            document.getElementById("valDob").innerHTML = ""; 
            var element = document.getElementById("dob"); 
            }
                  
   
    if(!(document.getElementById("address").value.match(addEx))) 
    {  
        document.getElementById("valaddress").innerHTML  = "enter a address"; 
        document.getElementById("valaddress").focus 
        valid = false;           
        } 
        else 
            {
            document.getElementById("valaddress").innerHTML = ""; 
            var element = document.getElementById("address"); 
            }
    if(!(document.getElementById("postcode").value.match(postEx))) 
    {  
        document.getElementById("valpostcode").innerHTML  = "enter a postcode"; // returns the error message
        document.getElementById("valpostcode").focus // bascially with focus it return the cursor to the first empty value. In this case, the email.
        valid = false;           
        } 
        else 
            {
            document.getElementById("valpostcode").innerHTML = ""; // bascially a reset for the email box
            var element = document.getElementById("postcode"); // gets the name from body
            }
    
     if(!(document.getElementById("email").value.match(emailRX))) // states if the email data inputted doesnt match the regex
    {  
        document.getElementById("valEmail").innerHTML  = "enter a valid email"; // returns the error message
        document.getElementById("valEmail").focus // bascially with focus it return the cursor to the first empty value. In this case, the email.
        valid = false;           
        } 
        else 
            {
            document.getElementById("valEmail").innerHTML = ""; // bascially a reset for the email box
            var element = document.getElementById("email"); // gets the name from body
            }
    


        
        return valid;
      }

