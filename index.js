

main.remove();


// Write your code here!
const element = document.createElement("header");
const newHeader = document.createElement("h1");

/*has a 'newHeader' variable that points to an <h1> node:
ReferenceError: newHeader is not defined*/


newHeader.id = "victory";



//after index.js is processed the 'newHeader' variable that points to the <h1> node has an id of 'victory':



//const newHeader = document.getElementById("newHeader");
newHeader.innerHTML ="Ken is the champion"


/*after index.js is processed the 'newHeader' variable that points to the <h1> node with an id of 'victory' has 
the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it:*/
