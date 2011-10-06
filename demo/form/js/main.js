(function(){

	/*
var formFields = document.querySelectorAll("#myform input");
	
	for(var i=0, j=formFields.length; i<j; i++)
	{
		formFields[i].style.backgroundColor = "black";
	};
*/

	var formFields = gtg("#myform input");
	
	/*
for( var i=0, j=formFields.elements.length; i<j; i++){
		formFields.elements[i]
	} 
*/
	
	formFields.each(function(){
	
		
	});
	
	formFields.css({
		"backgroundColor": "black",
		"color" : "white",
		"padding" : "5px"
	});
	
	gtg("div").addClass("testing");	
	
})();