// Tooltip Logic Demo
// SFW1

/*

	Logic Workflow
		1.) Describe End Result
		2.) Identify needed html targets
		3.)	Identify events per target
		4.) Acomplish result 

*/





(function(){

	var tooltips = gtg(".tooltip");
	
	tooltips.on("mouseover", function(e){
		var tip = this.nextSibling;
		gtg(tip).css({
			display: "block",
			top: (e.pageY + 2) +"px",
			left: (e.pageX + 2) +"px"
		
		});
		
	
	});
	
	tooltips.on("mouseout", function(e){
	var tip = this.nextSibling;
	gtg(tip).hide();
	
	
	});
	
	tooltips.on("mousemove", function(e){
	var tip = this.nextSibling;
		gtg(tip).css({
			top: (e.pageY +2)+ "px",
			left: (e.pageX +2)+ "px"
		
		});
	
	
	});






})();

