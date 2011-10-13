// GtG Library
// Author: Geoffrey T. Ganga
// Version 1.0 alpha


var gtg = function(selector){
	return new gtg.prototype.init(selector);
};

gtg.prototype = {

	init: function(selector){
		// init the library
		if(typeof selector === "string"){
			this.elements = document.querySelectorAll(selector);
		}else if(selector.nodeType){
			this.elements = [selector];
		};
	},
	
	elements: [],
	
	each: function(fn){
		for(var i=0, j=this.elements.length; i<j; i++){
			fn.call(this.elements[i]);
		};
		return this;
	},
	
	css: function(props){
		for(var prop in props){
			this.each(function(){
				this.style[prop] = props[prop];
			});
		};
		return this;
	},
	
	hasClass: function(name){
		var hasit = false;
		this.each(function(){
			var pattern = new RegExp("(^| )" + name + "( |$)");  
			if( pattern.test(this.className) ){
				hasit = true;
			};  
		});
		return hasit;
	},
	
	addClass: function(name){
		this.each(function(){
			if( !gtg(this).hasClass(name) ){
				this.className += " " + name;
			};
		});
		return this;
	},
	
	removeClass: function(name){
		this.each(function(){
			var pattern = new RegExp("(^| )" + name + "( |$)");
			this.className = this.className.replace(pattern, "$1").replace(/ $/, "");   
		});
		return this;
	},
	
	getStyle : function(prop){
		var elem = this.elements[0];
		
		if(elem.style[prop]){
			return elem.style[prop];
			
		}else if(elem.currentStyle){
		
			return elem.currentStyle[prop];
		
		}else{
			prop = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
			return document.defaultView.getComputedStyle(elem, "").getPropertyValue(prop);
			
		
		};
		
	},
	
	hide: function(){
		this.each(function(){
			this.style.display = "none";
		});
		return this;
	},
	
	show:function(){
		this.each(function(){
				this.style.display = "";
			});
			return this;
	},
	//gtg("thing").on("click", function(){})
	on:function(evt, handler){
		
		this.each(function(){
			this["on" + evt] = handler;
		});
		return this;
	}

};

// library utility functions (non-DOM)

/*
	gtg.ajax({
		url: "xhr/file.php",
		type: "GET",
		success: function(response){},
		error: function(response){},
		timeout: 8000
	});
	
	gtg.ajax({
		url: "xhr/file.php",
		success: function(response){}
	});
	
	LECTURE RESUMES AT 4:45pm
	=====================================
*/
gtg.ajax = function(options){

	options = {
		url: options.url || "",
		type: options.type || "GET",
		timeout: options.timeout || 8000,
		success: options.success || function(){},
		error: options.error || function(){}
	};
	
	setTimeout(function(){
		if(xhr){
			xhr.abort();
		}
	}, options.timeout);
	
	var checkHttp = function(){
		try{
			return !xhr.status && location.protocol === "file:" ||
				( xhr.status >= 200 && xhr.status < 300 ) ||
				xhr.status === 304 ||
				navigator.userAgent.indexOf("Safari") >= 0 && xhr.status === "undefined"
			;
		}catch(err){};
		
		return false;
	};
	
	var parseData = function(){
	
		var ct = xhr.getResponseHeader("content-type");
		var isxml = ct && ct.indexOf("xml") >= 0;
		return isxml ? xhr.responseXML : xhr.responseText;
	
	};
	
	var serialize = function(){};
	
	var xhr = new XMLHttpRequest();
	
	xhr.open(options.type, options.url, true);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			
			var valid = checkHttp();
			
			if(valid){
				// success
				var response = parseData();
				options.success( response );
			}else{
				// fail
				options.error(xhr);
			};
			
			xhr = undefined;
		};
	};
	
	xhr.send(null);

};


gtg.prototype.init.prototype = gtg.prototype;