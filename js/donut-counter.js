//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser 
//for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string 
//to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers 
  //of donuts and guests, and if there are enough donuts for 
  //each guest.


var num_guest = parseInt(prompt("HOW MANY GUESTS?"))
var num_donut = parseInt(prompt("HOW MANY DONUTS?"))


var result = function enough(num_guest, num_donut){
	if (num_guest>num_donut){
	return 'not enough'
	}
	else {
	return 'enough'
	}
}()

alert("There are "+num_donut+" donuts and "+num_guest +" guests. There are "+result+" donuts for each guest.")

