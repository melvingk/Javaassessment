 
var clicked = true;

function openJson() {
        if(document.getElementById("jsonDDown").style.display == 'none') {   // condition for ensuring that when cursor moves to box postion 
          // it appears and if not in box position, dont show the contents of the box, i.e the drop down menu
          document.getElementById("jsonDDown").style.display = 'block';
        } else  {
          document.getElementById("jsonDDown").style.display = 'none';
        }
      }
function openForm() {
        if(document.getElementById("formDDown").style.display == 'none') {   
          document.getElementById("formDDown").style.display = 'block';
        } else  {
          document.getElementById("formDDown").style.display = 'none';
        }
      }
 function ifSelect(colour)          // function that was supposed to be call an onmouseover was used but didnt work
{
	document.getElementsById("jsonDDown").style.colour = colour;
}


