







// 
// var greeting= "hello!";
// 
// var first_name = "jason";
// 
// var last_name = "roid";
// 
// var message1 + "yo 1";
// 
// var message2 + "yo 2";
// 
// var favorite_quote = "\"When the end of the world comes, I want to be in... \"     ";
// var my_image = "<img src=\"images/myIMage.png\"  /> ";
// 
// //use single quotes if you have alot of illegal character
// var my_image ='<img src="images/my/Image.png" />';
// 
// var goodby ="see you later";






















// my quotethe parts in asteriks are the variables that will change

// Children show *scars* like medals. *Lovers* use them as *secrets* to reveal. A *scar* is what happens when the *word* is made *flesh*.

// create some variables to hold the parts that don't change
var static_words = "Children show";
var static_words = "like medals. ";
var static_words = " use them as *secrets* to reveal. A ";
var static_words = " is what happens when the ";
var static_words = " is made ";

// use uniqe id
var button = document.getElementById("submit");



button.addEventListener("click", onClick, false);

function onClick(evt)
{
	evt.preventDefault(evt); // this line stops the form from submitting by preventing default action
	
	//forms
	var element1 = document.getElementById("form1").elements.item(0).value;
	var element2 = document.getElementById("form1").elements.item(1).value;
	var element3 = document.getElementById("form1").elements.item(2).value;
	var element4 = document.getElementById("form1").elements.item(3).value;
	var element5 = document.getElementById("form1").elements.item(4).value;
	console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5);
};










