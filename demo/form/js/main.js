(function(){
	var n = gtg("#wrap");
	console.log(n);
	var header = gtg(".dssheader");
	
	header.css({padding: "20px", border: "2px solid black"})

	var color = header.getStyle("backgroundColor");
	
	console.log(color);
	
	header.hide();
	
	setTimeout(function(){
		header.show();
	}, 3000);

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