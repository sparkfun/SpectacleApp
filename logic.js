var adjective = ["agreeable", "alert", "alluring", "ambitious", "amused", "boundless", "brave", "bright", "calm", "capable", "charming", "cheerful", "coherent", "comfortable", "confident", "cooperative", "courageous", "credible", "cultured", "dashing", "dazzling", "debonair", "decisive", "decorous", "delightful", "detailed", "determined", "diligent", "discreet", "dynamic", "eager", "efficient", "elated", "eminent", "enchanting", "encouraging", "endurable", "energetic", "entertaining", "enthusiastic", "excellent", "excited", "exclusive", "exuberant", "fabulous", "fair", "faithful", "fantastic", "fearless", "fine", "frank", "friendly", "funny", "generous", "gentle", "glorious", "good", "happy", "harmonious", "helpful", "hilarious", "honorable", "impartial", "industrious", "instinctive", "jolly", "joyous", "kind", "kind-hearted", "knowledgeable", "level", "likeable", "lively", "lovely", "loving", "lucky", "mature", "modern", "nice", "obedient", "painstaking", "peaceful", "perfect", "placid", "plausible", "pleasant", "plucky", "productive", "protective", "proud", "punctual", "quiet", "receptive", "reflective", "relieved", "resolute", "responsible", "rhetorical", "righteous", "romantic", "sedate", "seemly", "selective", "self-assured", "sensitive", "shrewd", "silly", "sincere", "skillful", "smiling", "splendid", "steadfast", "stimulating", "successful", "succinct", "talented", "thoughtful", "thrifty", "tough", "trustworthy", "unbiased", "unusual", "upbeat", "vigorous", "vivacious", "warm", "willing", "wise", "witty", "wonderful"];
var slideDur = 200;
var slideNum = 0;
progShow = setInterval(progSlideshow, 4000);

/***********************************Google Drive API Integration*************************************/

      var encodedIcon = 'data:image/png;base64,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';
      var CLIENT_ID = '94915341399-fqt9irip5i9rtb94t6oroati0arftkc8.apps.googleusercontent.com';
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
      var SCOPES = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.install';
      var authorizeButton = document.getElementById('authorize-button');
      var signoutButton = document.getElementById('signout-button');
      var saveButton = document.getElementById('save-button');
      var fileContents = document.getElementById('fileContents');

      // On load, called to load the auth2 library and API client library.
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }
       // Initializes the API client library
      function initClient() {
        gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientId: CLIENT_ID,          
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          //authorizeButton.onclick = handleAuthClick;
          //signoutButton.onclick = handleSignoutClick;
        });
      }
	// When the sign-up status changes...
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
		console.log("Signed In.");
		$(".load-copy-authed").show();
		$(".load-button-authed").show();
		$(".load-copy-unauthed").hide();
		$(".load-button-unauthed").hide();
		
		$(".save-copy-authed").show();
		$(".save-button-authed").show();
		$(".save-copy-unauthed").hide();
		$(".save-button-unauthed").hide();
	} else {
		console.log("Not Signed In.");
		$(".load-copy-authed").hide();
		$(".load-button-authed").hide();
		$(".load-copy-unauthed").show();
		$(".load-button-unauthed").show();
		
		$(".save-copy-authed").hide();
		$(".save-button-authed").hide();
		$(".save-copy-unauthed").show();
		$(".save-button-unauthed").show();		
	}
      }

	$(document).on("click", ".load-button-unauthed", function(){gapi.auth2.getAuthInstance().signIn();});
	$(document).on("click", ".load-button-authed", function(){loadFromGoogleDrive(getQueryVariable("fileID"),loadFromXML);});

	$(document).on("click", ".save-button-unauthed", function(){gapi.auth2.getAuthInstance().signIn();});
	$(document).on("click", ".save-button-authed", function(){saveToGoogleDrive();});

	function loadFromGoogleDrive(fileID, callback){
	  if (fileID != null) {
	    var fileURL = "https://www.googleapis.com/drive/v2/files/" + fileID + "?alt=media";
	    var accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', fileURL);
	    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
	    xhr.onload = function() {
	      callback(xhr.responseText);
	    };
	    xhr.onerror = function() {
	      alert("Spectacle couldn't retreive this project. The owner may have deleted it.");
	      callback(null);
	    };
	    xhr.send();
	  } else {
	    callback(null);
	  }		
	}

	function loadFromXML(fileString){
  		$(".module").remove();	  
  		fileBuilder(fileString);
      		$("input[type='color']").spectrum("destroy");
      		$(".sp-replacer").remove(); //sweep away empty shells
      		$("input[type='color']").spectrum(); //rehook the colorpickers
		closeAllMenus();	
	}

	function saveToGoogleDrive(callback) {

	  const boundary = 'nick_wuz_here_4652801374921';
	  const delimiter = "\r\n--" + boundary + "\r\n";
	  const close_delim = "\r\n--" + boundary + "--";
	  var filename = document.getElementById('project-name').innerHTML.split("&")[0] + ".spxml";	
	  var text = encodeFile();
		
	    var metadata = {
	      'title': filename,
	      'mimeType': 'text/plain',
	      'contentHints.thumbnail.image': encodedIcon,
	      'contentHints.thumbnail.mimeType': 'image/png'
	    };
	    var multipartRequestBody =
		delimiter +
		'Content-Type: application/json\r\n\r\n' +
		JSON.stringify(metadata) +
		delimiter +
		'Content-Type: ' + 'text/xml' + '\r\n\r\n' +
		text +
		close_delim;
	    var request = gapi.client.request({
		'path': '/upload/drive/v2/files',
		'method': 'POST',
		'params': {'uploadType': 'multipart'},
		'headers': {
		  'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
		},
		'body': multipartRequestBody});
		if (!callback) {
		  callback = function(file) {
		  //
		    console.log(file);
			  if(file.id != undefined){
		    $(".save-button-authed").hide();
		    var SpectacleLink = "https://sparkfun.github.io/spectacleapp/?fileID=" + file.id;
		    $(".share-link").html("<h2>Shareable Link:<\/h2><a href=\"" + SpectacleLink + "\" target=\"_blank\" style=\"color: white;\">" + SpectacleLink + "<\/a>");}
		    var request = gapi.client.request({
		    'path': 'https://www.googleapis.com/drive/v3/files/' + file.id + '/permissions',
		    'method': 'POST',
		    'headers': {"content-type": "application/json"},
		    'body': {
		      'role': 'reader',
		      'type': 'anyone'}
		    });  
		    request.execute(function(resp){console.log(resp);});
		  //  
		  };
		}
		request.execute(callback);
	      }

/***************************************************************************************************/

// Load cached project or linked project on pageload
$(document).ready(function(){  
  if(localStorage.getItem("cached")!=null && getQueryVariable("fileID")==false){
      $(".module").remove();	  
      fileBuilder(localStorage.getItem("cached"));
      $("input[type='color']").spectrum("destroy");
      $(".sp-replacer").remove(); //sweep away empty shells
      $("input[type='color']").spectrum(); //rehook the colorpickers
  closeAllMenus();
  alert("The page was closed before changes were saved. Here's the last cached version of your project!");}
  if(getQueryVariable("fileID")){
      googleDriveLoad();	  
  }
});

function closeAllMenus() {
$("#files").hide();
$(".actions-list").hide();
$("exit-foot").hide();
$(".module-list").hide();
$(".cross").hide();
$(".menu").hide();
$(".act-menu").hide();
$("actions-foot").hide();
$("blank-foot").hide();	
$("program-foot").hide();
$(".program-hardware").hide();	
$("share-foot").hide();
$(".share-project").hide();	
$(".hamburger").show();
$("footer").show();	
$(".load-google-drive").hide();
$("load-foot").hide();
}

window.onbeforeunload = function (e) {
    e = e || window.event;
    // For IE and Firefox prior to version 4
    if (e) {e.returnValue = 'Sure?';}
    // For Safari
    return 'Sure?';
};

// Auto-Save project in localStorage every 30 seconds
var autoSave = setInterval(cacheSave, 30000);

// Save canvas object to localStorage
function cacheSave(){
    var text = encodeFile();
    localStorage.setItem("cached", text);
}

function newScript() {
    var makeSure = confirm("Starting a new script will erase your current progress!\n\n\
If you want to keep your progress, press Cancel and then Save or Share your project.\n\n\
To start a new script, press OK.");
    if(makeSure==true){
    localStorage.setItem("cached", null);
    window.location.href = 'https://sparkfun.github.io/spectacleapp/';
    }else{
      $(".menu").slideToggle(slideDur, function() {
    $(".cross").hide();
    $(".hamburger").show();
  });    
    }
}

function changeName(newName){
var ProjectName = document.getElementById('project-name');
ProjectName.innerHTML = escapeHtml(newName);
}

// Initialize new project with a random adjective name
$(changeName('my ' + adjective[(Math.floor(Math.random()*(129 + 1)))] + ' project'));

$(document).on("click", ".project-name-block", (function(){
		var NewProjectName = prompt("What would you like to call your project?");
    while(NewProjectName == ""){
    	if(NewProjectName == ""){alert("You have to pick a name");}
    	NewProjectName = prompt("What would you like to call your project?");
    }
    if(NewProjectName != null){changeName(NewProjectName);};
  }));
  
var howToGif = new Image();
howToGif.src = "img/howtoprogram.gif";

// Scuddle away all of the hidden elements at app start
$("#files").hide();
$(".actions-list").hide();
$("exit-foot").hide();
$(".module-list").hide();
$(".cross").hide();
$(".menu").hide();
$(".act-menu").hide();
$("actions-foot").hide();
$("blank-foot").hide();
$("program-foot").hide();
$(".program-hardware").hide();	
$("share-foot").hide();
$(".share-project").hide();
$(".load-google-drive").hide();
$("load-foot").hide();
$("#slide1").hide();
$("#slide2").hide();
$("#slide3").hide();
$("#slide4").hide();
$("#slide5").hide();


// Handler for opening the hamburger menu
$(".hamburger").click(function() {
  $(".menu").slideToggle(slideDur, function() {
    $(".hamburger").hide();
    $(".cross").show();
  });
});

// Handler for closing the hamburger menu
$(".cross").click(function() {
  $(".menu").slideToggle(slideDur, function() {
    $(".cross").hide();
    $(".hamburger").show();
  });
});

// Hamburger remote close function
function burgerClose() {
$(".cross").click();} 

// Handler for "Add Module" navigation action
$(".add-module").click(function() {
  $(".module-list").slideToggle(slideDur, function() {
    $("footer").hide();
    $("exit-foot").show();
  });
});

// Module list exit handler
$(".mod-list-exit").click(function() {
  $(".module-list").slideToggle(slideDur, function() {
    $("footer").show();
    $("exit-foot").hide();
  });
});

$(".canvas").on("click", ".mod-act", (function(){
var targetmodule = $(this);
while(targetmodule.attr("class").split(' ')[0] != "module"){
targetmodule = targetmodule.parent();
}
$(targetmodule).find(".actions-list").slideToggle(slideDur, function() {
    $("footer").hide();
    $("actions-foot").show();
    window.scrollTo(0, 0);
  });
}));

$(document).on("click", ".add-action", (function(){
var targetmodule = $(".actions-list:visible");
while(targetmodule.attr("class").split(' ')[0] != "module"){
targetmodule = targetmodule.parent();
};
window.scrollTo(0, 0);
$(targetmodule).find(".act-menu").slideToggle(slideDur, function() {
    $("actions-foot").hide();
    $("blank-foot").show();
  });
}));

function hideActMenu(){
$(".act-menu:visible").slideToggle(slideDur, function() {
    $("actions-foot").show();
    $("blank-foot").hide();	
  });
};

// Exit Actions List
$(document).on("click", ".act-list-exit", (function(){
	var shortlist = "";
	// Update board view actions lists
	if($(".actions-list:visible").find(".action").length){
	$(".actions-list:visible").find(".action").each(function(){
		var actionname = $(this).attr("class").split(" ")[1];
		var firstword = actionname.split("-")[0];
		shortlist += "\u2022" + actionname.replace(/-/g," ").replace(firstword,"") + " on ";
                if($(this).find(".channel").val() != ""){shortlist += "channel " + $(this).find(".channel").val();}
		else{shortlist += "unspecified channel";}
		shortlist += "\n";
	});
	$(".actions-list:visible").closest(".module").find("#mod-acts").html(shortlist);
	$(".actions-list:visible").closest(".module").find("#mod-acts").keyup();}
	else{
	$(".actions-list:visible").closest(".module").find("#mod-acts").html("No Actions Assigned");
	$(".actions-list:visible").closest(".module").find("#mod-acts").keyup();			
	}
	// Make any null number inputs equal to 0
	var null_count = 0;
	$(".actions-list:visible").find("input[type='number']").each(function(){
		if($(this).attr("value")=="" || $(this).attr("value")==undefined){$(this).attr("value", "0"); $(this).val(0); null_count++;};
	});
	if(null_count>0){
		alert("You've left some number fields blank. We filled them with zeroes but you may want to double check them!");
	}
	// Fold away the menu and replace the footer	
	$(".actions-list:visible").slideToggle(slideDur, function() {
    $("footer").show();
    $("actions-foot").hide();
  });
}));

// Hardware Configure Menu Handler
$(".config-hw").click(function() {
    $(".program-hardware").slideToggle(slideDur, function() {
	slideNum = 0;
	progSlideshow();
    $("footer").hide();
    $("program-foot").show();
  });
  });

$(".program-button").click(function() {
	audio_serial_write(configBuilder(pseudoConfig()));
  });

function progSlideshow(){
	slideNum = slideNum + 1;
	switch (slideNum) {
		case 1:
			$("#slide2").hide();
			$("#slide3").hide();
			$("#slide4").hide();
			$("#slide5").hide();
			$("#slide1").fadeIn();
			break;
		case 2:
			$("#slide1").hide();
			$("#slide3").hide();
			$("#slide4").hide();
			$("#slide5").hide();
			$("#slide2").fadeIn();
			break;
		case 3:
			$("#slide1").hide();
			$("#slide2").hide();
			$("#slide4").hide();
			$("#slide5").hide();
			$("#slide3").fadeIn();
			break;
		case 4:
			$("#slide1").hide();
			$("#slide2").hide();
			$("#slide3").hide();
			$("#slide5").hide();
			$("#slide4").fadeIn();
			break;
		case 5:
			$("#slide1").hide();
			$("#slide2").hide();
			$("#slide3").hide();
			$("#slide4").hide();
			$("#slide5").fadeIn();
			break;
		}
	
	if(slideNum>5){slideNum = 0;}
}

// Hardware Configure exit handler
$(".program-pane-exit").click(function() {
  $(".program-hardware").slideToggle(slideDur, function() {
	$("#howtoprogram").find("img").remove();
    $("footer").show();
    $("program-foot").hide();
  });
});

// Share Project Menu Handler
$(".share-you-project").click(function() {
    $(".share-project").slideToggle(slideDur, function() {
    $("footer").hide();
    $("share-foot").show();
  });
  });

// Share Project exit handler
$(".share-pane-exit").click(function() {
  $(".share-link").html("");
  if(gapi.auth2.getAuthInstance().isSignedIn.get()){
  $(".save-button-authed").show();}
  $(".share-project").slideToggle(slideDur, function() {
    $("footer").show();
    $("share-foot").hide();
  });
});

// Google Drive Load Pane exit handler
$(".load-pane-exit").click(function() {
window.location.href = 'https://sparkfun.github.io/spectacleapp/';
});

// Save editable project file locally
function saveCanvas() {
  var text = encodeFile();
  var filename = document.getElementById('project-name').innerHTML.split("&")[0];
  var blob = new Blob([text], {type: "text/xml"});
  saveAs(blob, filename+".xml");
  pseudoConfig();
}

// Retrieve editable project file locally
function loadCanvas() {
   $(".menu").slideToggle(slideDur, function() {
     $(".cross").hide();
     $(".hamburger").show();
   });
   $("#files").click();
}

// Launch linked file prompt
function googleDriveLoad(){
  $(".load-google-drive").slideToggle(slideDur, function() {
    $("footer").hide();
    $("load-foot").show();
  });	
}

// Handle the file selection and reader for loading local configs
function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  var reader = new FileReader();
  reader.onload = function(e) {
  $(".module").remove();	  
  fileBuilder(reader.result);
      $("input[type='color']").spectrum("destroy");
      $(".sp-replacer").remove(); //sweep away empty shells
      $("input[type='color']").spectrum(); //rehook the colorpickers
  }
  reader.readAsText(files[0]);
  }

document.getElementById('files').addEventListener('change', handleFileSelect, false);

// unicode string to base64 encoded ascii
function utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
// base64 encoded ascii to unicode string
function atou(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

// Project Textarea Resize Handler
$(".canvas").on("keyup", ".project-text" ,(function(e) {
$(this).height(1).height(this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth")));
this.innerHTML = $(this).val();
}));

// Delete a module from the project
$(".canvas").on("click", ".mod-del" ,(function() { 
var targetmodule = $(this);
while(targetmodule.attr("class").split(' ')[0] != "module"){
targetmodule = targetmodule.parent();
}
targetmodule.remove();
}));

// Change a module's position in the project (move up)
$(".canvas").on("click", ".mod-up", (function(){
var targetmodule = $(this);
while(targetmodule.attr("class").split(' ')[0] != "module"){
targetmodule = targetmodule.parent();
}
targetmodule.prev('.module').before(targetmodule);
// Fix virtual module position to bottom of document	
$(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);	
}));

// Change a module's position in the project (move down)
$(".canvas").on("click", ".mod-dn", (function(){
var targetmodule = $(this);
while(targetmodule.attr("class").split(' ')[0] != "module"){
targetmodule = targetmodule.parent();
}
targetmodule.next('.module').after(targetmodule);
// Fix virtual module position to bottom of document	
$(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);
}));

/*************** Module Prototypes ****************/
// These prototypes are cloned into the document when a module is added to the canvas


lightModuleProto = document.createElement("div");
lightModuleProto.innerHTML = '<div class=\"bar-drk\"><\/div>\
<img class=\"mod-label\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect12976.png\">\
<input type=\"image\" class=\"mod-label mod-up\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-up-sml.png\">\
<input type=\"image\" class=\"mod-label mod-dn\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-dn-sml.png\">\
<input type=\"image\" class=\"mod-label mod-del\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-x-sml.png\">\
<input type=\"image\" class=\"mod-label mod-act\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-act-sml.png\">\
<div class=\"chunk\"><textarea id=\"mod-nick\" class=\"project-text\" style=\"font-size: 14pt\" rows=\"1\">light board<\/textarea><\/div>\
<div class=\"chunk\"><textarea readonly id=\"mod-acts\" class=\"project-text\" rows=\"1\">No Actions Assigned<\/textarea>\
<div class=\"actions-list light\"> <div class=\"mod-label\">\
<img class=\"mod-label-fixed\" style=\"background-color: #ffbd91;\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/actionstag.png\">\
<\/div>\
<div class=\"chunk add-reminder\">\
<br>\
<img width=\"300px\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/addactremind.png\">\
<\/div>\
<\/div>\
<\/div>\
<div class=\"act-menu\">\
<ul> <a href=\"javascript:hideActMenu();\"> <li>Cancel<\/li><\/a>\
<a href=\"javascript:addAction(\'ledRainbowEffect\');\"> <li>Rainbow Effect<\/li><\/a>\
<a href=\"javascript:addAction(\'ledTheaterChase\');\"> <li>Theater Chase<\/li><\/a>\
<a href=\"javascript:addAction(\'ledScanningEffect\');\"> <li>Scanning Effect<\/li><\/a>\
<a href=\"javascript:addAction(\'ledTwinkleEffect\');\"> <li>Twinkle Effect<\/li><\/a>\
<a href=\"javascript:addAction(\'ledLightningEffect\');\"> <li>Lightning Effect<\/li><\/a>\
<a href=\"javascript:addAction(\'ledFlameEffect\');\"> <li>Flame Effect<\/li><\/a>\
<a href=\"javascript:addAction(\'ledFade\');\"> <li>Fade Lights<\/li><\/a>\
<a href=\"javascript:addAction(\'ledFill\');\"> <li>Fill Color<\/li><\/a>\
<a href=\"javascript:addAction(\'ledPixel\');\"> <li>Light Pixel<\/li><\/a>\
<\/ul> <\/div>';
$(lightModuleProto).addClass("module light-module");


buttonModuleProto = document.createElement("div");
buttonModuleProto.innerHTML = '<div class=\"bar-drk\"><\/div>\
<img class=\"mod-label\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect12207b.png\">\
<input type=\"image\" class=\"mod-label mod-up\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-up-sml.png\">\
<input type=\"image\" class=\"mod-label mod-dn\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-dn-sml.png\">\
<input type=\"image\" class=\"mod-label mod-del\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-x-sml.png\">\
<input type=\"image\" class=\"mod-label mod-act\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-act-sml.png\">\
<div class=\"chunk\"><textarea id=\"mod-nick\" class=\"project-text\" style=\"font-size: 14pt\" rows=\"1\">button board<\/textarea><\/div>\
<div class=\"chunk\"><textarea readonly id=\"mod-acts\" class=\"project-text\" rows=\"1\">No Actions Assigned<\/textarea>\
<div class=\"actions-list button\"> <div class=\"mod-label\">\
<img class=\"mod-label-fixed\" style=\"background-color: #ffe680;\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/actionstag.png\">\
<\/div>\
<div class=\"chunk add-reminder\">\
<br>\
<img width=\"300px\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/addactremind.png\">\
<\/div>\
<\/div>\
<\/div>\
<div class=\"act-menu\">\
<ul> <a href=\"javascript:hideActMenu();\"> <li>Cancel<\/li><\/a>\
<a href=\"javascript:addAction(\'buttonPress\');\"> <li>Action on Press<\/li><\/a>\
<a href=\"javascript:addAction(\'buttonRelease\');\"> <li>Action on Release<\/li><\/a>\
<a href=\"javascript:addAction(\'buttonClick\');\"> <li>Action on Press and Release<\/li><\/a>\
<a href=\"javascript:addAction(\'buttonHold\');\"> <li>Action while Holding<\/li><\/a>\
<a href=\"javascript:addAction(\'buttonLatch\');\"> <li>Latch On \/ Latch Off<\/li><\/a>\
<\/ul> <\/div>';
$(buttonModuleProto).addClass("module button-module");


accelModuleProto = document.createElement("div");
accelModuleProto.innerHTML = '<div class=\"bar-drk\"><\/div>\
<img class=\"mod-label\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect8398-1.png\">\
<input type=\"image\" class=\"mod-label mod-up\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-up-sml.png\">\
<input type=\"image\" class=\"mod-label mod-dn\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-dn-sml.png\">\
<input type=\"image\" class=\"mod-label mod-del\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-x-sml.png\">\
<input type=\"image\" class=\"mod-label mod-act\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-act-sml.png\">\
<div class=\"chunk\"><textarea id=\"mod-nick\" class=\"project-text\" style=\"font-size: 14pt\" rows=\"1\">inertia board<\/textarea><\/div>\
<div class=\"chunk\"><textarea readonly id=\"mod-acts\" class=\"project-text\" rows=\"1\">No Actions Assigned<\/textarea>\
<div class=\"actions-list accel\"> <div class=\"mod-label\">\
<img class=\"mod-label-fixed\" style=\"background-color: #f29595;\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/actionstag.png\">\
<\/div>\
<div class=\"chunk add-reminder\">\
<br>\
<img width=\"300px\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/addactremind.png\">\
<\/div>\
<\/div>\
<\/div>\
<div class=\"act-menu\"> <ul> <a href=\"javascript:hideActMenu();\"> <li>Cancel<\/li><\/a>\
<a href=\"javascript:addAction(\'inertiaMotionSense\');\"> <li>Sense All Motion<\/li><\/a>\
<a href=\"javascript:addAction(\'inertiaOrientationSense\');\"> <li>Sense Orientation<\/li><\/a>\
<a href=\"javascript:addAction(\'inertiaMeasureAccel\');\"> <li>Measure Acceleration<\/li><\/a>\
<\/ul> <\/div>';
$(accelModuleProto).addClass("module accel-module");


motionModuleProto = document.createElement("div");
motionModuleProto.innerHTML = '<div class=\"bar-drk\"><\/div>\
<img class=\"mod-label\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect8398-3.png\">\
<input type=\"image\" class=\"mod-label mod-up\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-up-sml.png\">\
<input type=\"image\" class=\"mod-label mod-dn\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-dn-sml.png\">\
<input type=\"image\" class=\"mod-label mod-del\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-x-sml.png\">\
<input type=\"image\" class=\"mod-label mod-act\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-act-sml.png\">\
<div class=\"chunk\"><textarea id=\"mod-nick\" class=\"project-text\" style=\"font-size: 14pt\" rows=\"1\">motion board<\/textarea><\/div>\
<div class=\"chunk\"><textarea readonly id=\"mod-acts\" class=\"project-text\" rows=\"1\">No Actions Assigned<\/textarea>\
<div class=\"actions-list motion\"> <div class=\"mod-label\">\
<img class=\"mod-label-fixed\" style=\"background-color: #b9f1ab;\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/actionstag.png\">\
<\/div>\
<div class=\"chunk add-reminder\">\
<br>\
<img width=\"300px\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/addactremind.png\">\
<\/div>\
<\/div>\
<\/div>\
<div class=\"act-menu\"> <ul> <a href=\"javascript:hideActMenu();\"> <li>Cancel<\/li><\/a>\
<a href=\"javascript:addAction(\'motorSweep\');\"> <li>Toggle Position<\/li><\/a>\
<a href=\"javascript:addAction(\'motorSweepReturn\');\"> <li>Sweep and Return<\/li><\/a>\
<a href=\"javascript:addAction(\'motorWag\');\"> <li>Wagging Effect<\/li><\/a>\
<a href=\"javascript:addAction(\'motorGoto\');\"> <li>Go To Position<\/li><\/a>\
<\/ul> <\/div>';
$(motionModuleProto).addClass("module motion-module");


soundModuleProto = document.createElement("div");
soundModuleProto.innerHTML = '<div class=\"bar-drk\"><\/div>\
<img class=\"mod-label\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect8398-2.png\">\
<input type=\"image\" class=\"mod-label mod-up\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-up-sml.png\">\
<input type=\"image\" class=\"mod-label mod-dn\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-dn-sml.png\">\
<input type=\"image\" class=\"mod-label mod-del\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-x-sml.png\">\
<input type=\"image\" class=\"mod-label mod-act\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-act-sml.png\">\
<div class=\"chunk\"><textarea id=\"mod-nick\" class=\"project-text\" style=\"font-size: 14pt\" rows=\"1\">sound board<\/textarea><\/div>\
<div class=\"chunk\"><textarea readonly id=\"mod-acts\" class=\"project-text\" rows=\"1\">No Actions Assigned<\/textarea>\
<div class=\"actions-list sound\"> <div class=\"mod-label\">\
<img class=\"mod-label-fixed\" style=\"background-color: #e8b5f4;\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/actionstag.png\">\
<\/div>\
<div class=\"chunk add-reminder\">\
<br>\
<img width=\"300px\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/addactremind.png\">\
<\/div>\
<\/div>\
<\/div>\
<div class=\"act-menu\"> <ul> <a href=\"javascript:hideActMenu();\"> <li>Cancel<\/li><\/a>\
<a href=\"javascript:addAction(\'soundPlay\');\"> <li>Play Sound<\/li><\/a>\
<\/ul> <\/div>';
$(soundModuleProto).addClass("module sound-module");


virtualModuleProto = document.createElement("div");
virtualModuleProto.innerHTML = '<div class=\"bar-drk\"><\/div>\
<img class=\"mod-label\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect8398-4.png\">\
<input type=\"image\" class=\"mod-label mod-del\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-x-sml.png\">\
<input type=\"image\" class=\"mod-label mod-act\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/rect-act-sml.png\">\
<div class=\"chunk\"><textarea id=\"mod-nick\" class=\"project-text\" style=\"font-size: 14pt\" rows=\"1\">virtual board<\/textarea><\/div>\
<div class=\"chunk\"><textarea readonly id=\"mod-acts\" class=\"project-text\" rows=\"1\">No Actions Assigned<\/textarea>\
<div class=\"actions-list virtual\"> <div class=\"mod-label\">\
<img class=\"mod-label-fixed\" style=\"background-color: #f9f9f9;\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/actionstag.png\">\
<\/div>\
<div class=\"chunk add-reminder\">\
<br>\
<img width=\"300px\" src=\"https:\/\/sparkfun.github.io\/spectacleapp\/img\/addactremind.png\">\
<\/div>\
<\/div>\
<\/div>\
<div class=\"act-menu\"> <ul>\
<a href=\"javascript:hideActMenu();\"> <li>Cancel<\/li><\/a>\
<a href=\"javascript:addAction(\'virtualInvert\');\"> <li>Invert Filter<\/li><\/a>\
<a href=\"javascript:addAction(\'virtualAnd\');\"> <li>Both Active Filter<\/li><\/a>\
<a href=\"javascript:addAction(\'virtualOr\');\"> <li>Channel Combiner<\/li><\/a>\
<a href=\"javascript:addAction(\'virtualXor\');\"> <li>Difference Detector<\/li><\/a>\
<a href=\"javascript:addAction(\'virtualRandom\');\"> <li>Random Input<\/li><\/a>\
<a href=\"javascript:addAction(\'virtualPeriodic\');\"> <li>Periodic Input<\/li><\/a>\
<a href=\"javascript:addAction(\'virtualSustained\');\"> <li>Sustained Random Input<\/li><\/a>\
<a href=\"javascript:addAction(\'virtualConstant\');\"> <li>Constant Input<\/li><\/a>\
<\/ul> <\/div>';
$(virtualModuleProto).addClass("module virtual-module");

/*************** Action Prototypes ****************/
// These prototypes are cloned into the DOM when an action is added to an act-list

// Lighting Board Actions
ledRainbowEffect = document.createElement("div"); ledRainbowEffect.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: rainbow effect <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">while channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <br\/> <strong style=\"font-size: 110%;\">rainbow scroll lightstrip number<\/strong> <input class=\"number light-channel\" type=\"number\" value=\"\"> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">(lightstrip has<\/strong> <input class=\"number light-count\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\"> pixels)<\/strong><\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">scroll speed<\/strong> <br><strong style=\"font-size: 110%; margin: 10px 0 0 0\">fast<\/strong> <input class=\"range delay-speed\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">slow<\/strong> <br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range threshold\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(ledRainbowEffect).addClass("action led-rainbow-effect");
ledTheaterChase = document.createElement("div"); ledTheaterChase.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: theater chase <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">while channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <br\/> <strong style=\"font-size: 110%;\">theater chase lightstrip number<\/strong> <input class=\"number light-channel\" type=\"number\" value=\"\"> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">(lightstrip has<\/strong> <input class=\"number light-count\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\"> pixels)<\/strong><\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">chase speed<\/strong> <br><strong style=\"font-size: 110%; margin: 10px 0 0 0\">fast<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">slow<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">chase color<\/strong> <br\/> <div style=\"display: inline-block;\"><input class=\"color\" type=\"color\" value=\"#ffffff\"><\/div> <\/div><br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(ledTheaterChase).addClass("action led-theater-chase");
ledScanningEffect = document.createElement("div"); ledScanningEffect.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: scanning effect <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">while channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <br\/> <strong style=\"font-size: 110%;\">scan over lightstrip number<\/strong> <input class=\"number light-channel\" type=\"number\" value=\"\"> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">(lightstrip has<\/strong> <input class=\"number light-count\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\"> pixels)<\/strong><\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">scan speed<\/strong> <br><strong style=\"font-size: 110%; margin: 10px 0 0 0\">fast<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">slow<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">scan color<\/strong> <br\/> <div style=\"display: inline-block;\"><input class=\"color\" type=\"color\" value=\"#ffffff\"><\/div> <\/div><br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(ledScanningEffect).addClass("action led-scanning-effect");
ledTwinkleEffect = document.createElement("div"); ledTwinkleEffect.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: twinkle <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">while channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <br\/> <strong style=\"font-size: 110%;\">twinkle lightstrip number<\/strong> <input class=\"number light-channel\" type=\"number\" value=\"\"> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">twinkle color<\/strong> <br\/>  <div style=\"display: inline-block;\"><input class=\"color\" type=\"color\" value=\"#ffffff\"><\/div> <br\/> <\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">(lightstrip has<\/strong> <input class=\"number light-count\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\"> pixels)<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">speed<\/strong> <br><strong style=\"font-size: 110%; margin: 10px 0 0 0\">fast<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">slow<\/strong> <\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">magic<\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">more<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">less<\/strong> <br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(ledTwinkleEffect).addClass("action led-twinkle-effect");
ledLightningEffect = document.createElement("div"); ledLightningEffect.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: lightning effect <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">while channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <br\/> <strong style=\"font-size: 110%;\">lightning on lightstrip number<\/strong> <input class=\"number light-channel\" type=\"number\" value=\"\"> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">lightning color<\/strong> <br\/> <div style=\"display: inline-block;\"><input class=\"color\" type=\"color\" value=\"#ffffff\"><\/div> <br\/> <\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">(lightstrip has<\/strong> <input class=\"number light-count\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\"> pixels)<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">speed<\/strong> <br><strong style=\"font-size: 110%; margin: 10px 0 0 0\">fast<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">slow<\/strong> <\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">fury<\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">more<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">less<\/strong> <br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(ledLightningEffect).addClass("action led-lightning-effect");
ledFlameEffect = document.createElement("div"); ledFlameEffect.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: flame effect <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">while channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <br\/> <strong style=\"font-size: 110%;\">make fire on lightstrip number<\/strong> <input class=\"number light-channel\" type=\"number\" value=\"\"> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">(lightstrip has<\/strong> <input class=\"number light-count\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\"> pixels)<\/strong><\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">flame color<\/strong> <br\/> <div style=\"display: inline-block;\"><input class=\"color\" type=\"color\" value=\"#ffffff\"><\/div> <br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(ledFlameEffect).addClass("action led-flame-effect");
ledFade = document.createElement("div"); ledFade.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: fade <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">while channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <br\/> <strong style=\"font-size: 110%;\">fade lightstrip number<\/strong> <input class=\"number light-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">back and forth<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">from color<\/strong> <br\/>  <div style=\"display: inline-block;\"><input class=\"color\" type=\"color\" value=\"#ffffff\"><\/div> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">to color<\/strong> <br\/>  <div style=\"display: inline-block;\"><input class=\"color\" type=\"color\" value=\"#ffffff\"><\/div> <\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">(lightstrip has<\/strong> <input class=\"number light-count\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\"> pixels)<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">fade speed<\/strong> <br><strong style=\"font-size: 110%; margin: 10px 0 0 0\">fast<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">slow<\/strong> <\/div><br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(ledFade).addClass("action led-fade-lights");
ledFill = document.createElement("div"); ledFill.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: fill <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">listen to channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">\u2013when activated\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">wait for<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">seconds<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013then\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">clear lightstrip number<\/strong> <input class=\"number light-channel\" type=\"number\" value=\"\"> <br\/><strong style=\"font-size: 110%; margin: 10px 0 0 0;\"> and fill <\/strong> <input class=\"number pixel-number\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0;\"> pixels<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013with\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">this color<\/strong> <br\/> <div style=\"display: inline-block;\"><input class=\"color\" type=\"color\" value=\"#ffffff\"><\/div> <\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">(lightstrip has<\/strong> <input class=\"number light-count\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\"> pixels)<\/strong> <br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(ledFill).addClass("action led-fill-color");
ledPixel = document.createElement("div"); ledPixel.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: pixel <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">listen to channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">\u2013when activated\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">wait for<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">seconds<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013then\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">clear lightstrip number<\/strong> <input class=\"number light-channel\" type=\"number\" value=\"\"> <br\/><strong style=\"font-size: 110%; margin: 10px 0 0 0;\"> and light pixel number <\/strong> <input class=\"number pixel-number\" type=\"number\" value=\"\"> <\/div> <strong style=\"font-size: 110%;\">\u2013with\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">this color<\/strong> <br\/> <div style=\"display: inline-block;\"><input class=\"color\" type=\"color\" value=\"#ffffff\"><\/div> <\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">(lightstrip has<\/strong> <input class=\"number light-count\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\"> pixels)<\/strong> <br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(ledPixel).addClass("action led-light-pixel");

// Button Board Actions
buttonPress = document.createElement("div"); buttonPress.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: trigger on press <a href=\"javascript:void(0);\" class=\"deleteaction\" style=\" top: -2px; text-decoration: none; color: white; float:right;\">&#10005;<\/a><\/h3> <strong style=\"font-size: 110%;\">when button number<\/strong> <input class=\"number button-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is pressed<\/strong> <br\/> <strong style=\"font-size: 110%;\">trigger channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\">'; $(buttonPress).addClass("action button-action-on-press");
buttonRelease = document.createElement("div"); buttonRelease.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: trigger on release<a href=\"javascript:void(0);\" class=\"deleteaction\" style=\" top: -2px; text-decoration: none; color: white; float:right;\">&#10005;<\/a><\/h3> <strong style=\"font-size: 110%;\">when button number<\/strong> <input class=\"number button-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is released<\/strong> <br\/> <strong style=\"font-size: 110%;\">trigger channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\">'; $(buttonRelease).addClass("action button-action-on-release");
buttonClick = document.createElement("div"); buttonClick.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: trigger on press + release<a href=\"javascript:void(0);\" class=\"deleteaction\" style=\" top: -2px; text-decoration: none; color: white; float:right;\">&#10005;<\/a><\/h3> <strong style=\"font-size: 110%;\">when button number<\/strong> <input class=\"number button-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is either<\/strong> <br\/> <div style=\"position: block; height: 20px;\"> <strong style=\"font-size: 110%; position: relative; top: 0px;\"> pressed or released<\/strong> <\/div><strong style=\"font-size: 110%;\">trigger channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\">'; $(buttonClick).addClass("action button-action-on-press-and-release");
buttonHold = document.createElement("div"); buttonHold.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: continuous press<a href=\"javascript:void(0);\" class=\"deleteaction\" style=\" top: -2px; text-decoration: none; color: white; float:right;\">&#10005;<\/a><\/h3> <strong style=\"font-size: 110%;\">while button number<\/strong> <input class=\"number button-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is pressed<\/strong> <br\/> <strong style=\"font-size: 110%;\">activate channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\">'; $(buttonHold).addClass("action button-action-while-holding");
buttonLatch = document.createElement("div"); buttonLatch.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: latch on press <a href=\"javascript:void(0);\" class=\"deleteaction\" style=\" top: -2px; text-decoration: none; color: white; float:right;\">&#10005;<\/a><\/h3> <strong style=\"font-size: 110%;\">when button number<\/strong> <input class=\"number button-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is pressed<\/strong> <br\/> <strong style=\"font-size: 110%;\">activate channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <div style=\"position: block; height: 20px;\"> <strong style=\"font-size: 110%; position: relative; top: 0px;\">until button is pressed again<\/strong> <\/div>'; $(buttonLatch).addClass("action button-latch-on-latch-off");

// Inertia Board Actions
inertiaMotionSense = document.createElement("div"); inertiaMotionSense.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: sense motion <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <div style=\"background-color:rgba(255,255,255,0.3);\"> <span class=\"checklabel\" onclick=""> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio1\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px;\">if<\/strong> <span class=\"checklabel\" onclick="" style=\"margin-left:20px\"> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio1\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px;\">while<\/strong> <\/div><strong style=\"font-size: 110%; margin: 10px 0 0 0\">motion board is<\/strong> <div style=\"background-color:rgba(255,255,255,0.3);\"> <span class=\"checklabel\" onclick=""> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px;\">moving<\/strong> <span class=\"checklabel\" onclick="" style=\"margin-left:20px\"> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px;\">stationary<\/strong> <\/div><strong style=\"font-size: 110%; margin: 10px 0 0 0\">activate channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\">'; $(inertiaMotionSense).addClass("action inertia-sense-motion");
inertiaOrientationSense = document.createElement("div"); inertiaOrientationSense.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: sense orientation<input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <div style=\"background-color:rgba(255,255,255,0.3);\"> <span class=\"checklabel\" onclick=""> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio1\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px;\">if<\/strong> <span class=\"checklabel\" onclick="" style=\"margin-left:20px\"> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio1\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px;\">while<\/strong> <\/div><strong style=\"font-size: 110%; margin: 10px 0 0 0\">side labeled<\/strong> <div style=\"background-color:rgba(255,255,255,0.3);\"> <span class=\"checklabel\" onclick=""> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px; margin-right:5px;\">a<\/strong> <span class=\"checklabel\" onclick="" style=\"\"> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px; margin-right:5px;\">b<\/strong> <span class=\"checklabel\" onclick=""> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px; margin-right:5px;\">c<\/strong> <span class=\"checklabel\" onclick="" style=\"\"> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px; margin-right:5px;\">d<\/strong> <span class=\"checklabel\" onclick=""> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px; margin-right:5px;\">top<\/strong> <span class=\"checklabel\" onclick="" style=\"\"> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px; margin-right:5px;\">bottom<\/strong> <\/div><strong style=\"font-size: 110%; margin: 10px 0 0 0\">is facing up<\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activate channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\">'; $(inertiaOrientationSense).addClass("action inertia-sense-orientation");
inertiaMeasureAccel = document.createElement("div"); inertiaMeasureAccel.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: measure acceleration<input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">send the acceleration value of<\/strong> <div style=\"background-color:rgba(255,255,255,0.3);\"> <span class=\"checklabel\" onclick=""> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px; margin-right:5px;\">a to b<\/strong> <span class=\"checklabel\" onclick="" style=\"\"> <input type=\"button\" type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px; margin-right:5px;\">c to d<\/strong> <span class=\"checklabel\" onclick=""> <input type=\"button\" class=\"radio\" name=\"radio2\" > <\/span> <strong style=\"font-size: 110%; position: relative; top: 0px; margin-right:5px;\">top to bottom<\/strong> <\/div><strong style=\"font-size: 110%; margin: 10px 0 0 0\">to channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\">'; $(inertiaMeasureAccel).addClass("action inertia-measure-acceleration");

// Motion Board Actions
motorSweep = document.createElement("div"); motorSweep.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: toggle position<input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">listen to channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">control servo number<\/strong> <input class=\"number servo-channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">\u2013toggle between\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">wait<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">seconds and move to <\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">0\u00B0<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">180\u00B0<\/strong><\/div> <strong style=\"font-size: 110%;\">\u2013and\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">wait<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">seconds and move to <\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">0\u00B0<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">180\u00B0<\/strong><\/div><br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(motorSweep).addClass("action motor-toggle-position");
motorSweepReturn = document.createElement("div"); motorSweepReturn.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: sweep and return<input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">listen to channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">control servo number<\/strong> <input class=\"number servo-channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">\u2013when activated\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">wait<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">seconds and move to <\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">0\u00B0<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">180\u00B0<\/strong><\/div> <strong style=\"font-size: 110%;\">\u2013then\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">wait<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">seconds and move to <\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">0\u00B0<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">180\u00B0<\/strong><\/div><br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(motorSweepReturn).addClass("action motor-sweep-and-return");
motorWag = document.createElement("div"); motorWag.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: wag<input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">listen to channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">control servo number<\/strong> <input class=\"number servo-channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">\u2013while active, repeatedly\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">wait<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">seconds and move to <\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">0\u00B0<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">180\u00B0<\/strong><\/div> <strong style=\"font-size: 110%;\">\u2013then\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">wait<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">seconds and move to <\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">0\u00B0<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">180\u00B0<\/strong><\/div><br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(motorWag).addClass("action motor-wag");
motorGoto = document.createElement("div"); motorGoto.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: go to position<input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">listen to channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">control servo number<\/strong> <input class=\"number servo-channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">\u2013when activated\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">wait<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">seconds and move to <\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">0\u00B0<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">180\u00B0<\/strong><\/div><br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(motorGoto).addClass("action motor-go-to-position");

// Sound Board Actions
soundPlay = document.createElement("div"); soundPlay.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: play a sound<input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">listen to channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">\u2013when activated\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0;\">wait<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%; margin: 10px 0 0 0\">seconds and play <\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">file number<\/strong> <input class=\"number file-number\" type=\"number\" value=\"\"> <\/div> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">do not allow another sound to<\/strong> <br\/> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">interrupt until <\/strong> <input class=\"number play-time\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\"> seconds<\/strong> <br\/> <div style=\"background-color:rgba(0,0,0,0.4); color: white;\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">activation threshold<\/strong> <br\/> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <br\/> (most of the time you don\'t have to adjust this) <br\/> <\/div>'; $(soundPlay).addClass("action sound-play-sound");

// Virtual Board Actions
virtualInvert = document.createElement("div"); virtualInvert.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: opposite filter <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">invert the value of channel number<\/strong> <input class=\"number in-channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">and feed it to channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\">'; $(virtualInvert).addClass("action virtual-invert-filter");
virtualAnd = document.createElement("div"); virtualAnd.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: both active filter<input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">\u2013if both\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">channel number<\/strong> <input class=\"number in-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013and\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">channel number<\/strong> <input class=\"number in-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013then\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">make channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">active<\/strong> <\/div>'; $(virtualAnd).addClass("action virtual-both-active-filter");
virtualOr = document.createElement("div"); virtualOr.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: channel combiner <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">\u2013if either\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">channel number<\/strong> <input class=\"number in-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013or\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">channel number<\/strong> <input class=\"number in-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013or\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">if both are active<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013then\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">make channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">active<\/strong> <\/div>'; $(virtualOr).addClass("action virtual-channel-combiner");
virtualXor = document.createElement("div"); virtualXor.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: difference detector <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">\u2013if either\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">channel number<\/strong> <input class=\"number in-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013or\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">channel number<\/strong> <input class=\"number in-channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">is active<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013but\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">not if both are active<\/strong> <\/div> <strong style=\"font-size: 110%;\">\u2013then\u2013<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%;\">make channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <strong style=\"font-size: 110%;\">active<\/strong> <\/div>'; $(virtualXor).addClass("action virtual-difference-detector");
virtualRandom = document.createElement("div"); virtualRandom.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: random input <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">send channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">a random value<\/strong> <br\/> <strong style=\"font-size: 110%;\">every<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%;\">seconds<\/strong>'; $(virtualRandom).addClass("action virtual-random-input");
virtualPeriodic = document.createElement("div"); virtualPeriodic.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: periodic input <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">activate channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">for<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%;\">seconds<\/strong> <br\/> <strong style=\"font-size: 110%;\">every<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%;\">seconds<\/strong>'; $(virtualPeriodic).addClass("action virtual-periodic-input");
virtualSustained = document.createElement("div"); virtualSustained.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: sustained random input <input type="image" src="img/ex_icon.png" class=\"deleteaction\" style=\"width: 30px; top: -2px; float:right;\"><\/h3> <strong style=\"font-size: 110%;\">set channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/> <strong style=\"font-size: 110%;\">to a random value<\/strong> <br\/> <strong style=\"font-size: 110%;\">every<\/strong> <input class=\"number wait-time\" type=\"number\" value=\"\"><strong style=\"font-size: 110%;\">seconds<\/strong>'; $(virtualSustained).addClass("action virtual-sustained-input");
virtualConstant = document.createElement("div"); virtualConstant.innerHTML = '<h3 style=\"background-color: #1c2727; color: white;\">action: constant input <a href=\"javascript:void(0);\" class=\"deleteaction\" style=\"position: relative; top: -2px; text-decoration: none; color: white; float:right;\">&#10005;<\/a><\/h3> <strong style=\"font-size: 110%;\">set channel number<\/strong> <input class=\"number channel\" type=\"number\" value=\"\"> <br\/><strong style=\"font-size: 110%;\">equal to the following value<\/strong> <br\/> <div style=\"background-color:rgba(255,255,255,0.3);\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">0<\/strong> <input class=\"range\" type=\"range\" value=\"500\" max=\"1000\"> <strong style=\"font-size: 110%; margin: 10px 0 0 0\">1000<\/strong> <\/div>'; $(virtualConstant).addClass("action virtual-constant-input");

// Action List Spacer
actionSpacer = document.createElement("div"); actionSpacer.innerHTML = ' '; $(actionSpacer).addClass("action-spacer");

/*************** Module Addition Handlers ****************/

$(".add-light").click(function(){
    var newModule;	
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(lightModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(lightModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").prepend(adjective[(Math.floor(Math.random()*(129 + 1)))] + ' ');
	$(newModule).find("#mod-nick").innerHTML = $(newModule).find("#mod-nick").val();
	// Fix virtual module position to bottom of document	
        $(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);
	$(".actions-list").hide();
	$("actions-foot").hide();
	$(".act-menu").hide();	   
      $(".module-list").slideToggle(slideDur, function() {
        $("footer").show();
        $("exit-foot").hide();   
      });

});

$(".add-button").click(function(){
    var newModule;
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(buttonModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(buttonModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").prepend(adjective[(Math.floor(Math.random()*(129 + 1)))] + ' ');
	$(newModule).find("#mod-nick").innerHTML = $(newModule).find("#mod-nick").val();
	// Fix virtual module position to bottom of document	
        $(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);
	$(".actions-list").hide();
	$("actions-foot").hide();
	$(".act-menu").hide();	   
      $(".module-list").slideToggle(slideDur, function() {
        $("footer").show();
        $("exit-foot").hide();     
      });

});

$(".add-accel").click(function(){
    var newModule;	
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(accelModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(accelModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").prepend(adjective[(Math.floor(Math.random()*(129 + 1)))] + ' ');
	$(newModule).find("#mod-nick").innerHTML = $(newModule).find("#mod-nick").val();
	// Fix virtual module position to bottom of document	
        $(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);
	$(".actions-list").hide();
	$("actions-foot").hide();
	$(".act-menu").hide();	   
      $(".module-list").slideToggle(slideDur, function() {
        $("footer").show();
        $("exit-foot").hide();  
      });

});

$(".add-motion").click(function(){
    var newModule;
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(motionModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(motionModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").prepend(adjective[(Math.floor(Math.random()*(129 + 1)))] + ' ');
	$(newModule).find("#mod-nick").innerHTML = $(newModule).find("#mod-nick").val();
	// Fix virtual module position to bottom of document	
        $(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);
	$(".actions-list").hide();
	$("actions-foot").hide();
	$(".act-menu").hide();	   
      $(".module-list").slideToggle(slideDur, function() {
        $("footer").show();
        $("exit-foot").hide();   
      });

});

$(".add-sound").click(function(){
    var newModule;
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(soundModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(soundModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").prepend(adjective[(Math.floor(Math.random()*(129 + 1)))] + ' ');
	$(newModule).find("#mod-nick").innerHTML = $(newModule).find("#mod-nick").val();
	// Fix virtual module position to bottom of document	
        $(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);
	$(".actions-list").hide();
	$("actions-foot").hide();
	$(".act-menu").hide();	   
      $(".module-list").slideToggle(slideDur, function() {
        $("footer").show();
        $("exit-foot").hide();   
      });

});

$(".add-virtual").click(function(){
    var newModule;
	if (typeof $(".canvas").children('.virtual-module').slice(-1)[0] !== 'undefined') {
		alert("There's already a virtual board attached to this project.\n\n You can only add one virtual board to your project, but that board can contain as many actions as you like!");
	}else{
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(virtualModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(virtualModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").prepend(adjective[(Math.floor(Math.random()*(129 + 1)))] + ' ');
	$(newModule).find("#mod-nick").innerHTML = $(newModule).find("#mod-nick").val();
	$(".actions-list").hide();
	$("actions-foot").hide();
	$(".act-menu").hide();	   
      $(".module-list").slideToggle(slideDur, function() {
        $("footer").show();
        $("exit-foot").hide();   
      });
	}
});

function addAction(actionName) {
	
	newAction = window[actionName];
	var freshAction = $(newAction).clone().appendTo($(".actions-list:visible"));
	// Get rid of the action spacer which is now in the middle of the list
	$(".actions-list:visible").find(".action-spacer").remove();
	$(".actions-list:visible").find(".add-reminder").hide();
	// Toss that badboy back onto the end of the list
	$(actionSpacer).clone().appendTo($(".actions-list:visible"));
	var shortlist = "";
	// Update board view actions lists
	if($(".actions-list:visible").find(".action").length){
	$(".actions-list:visible").find(".action").each(function(){
		var actionname = $(this).attr("class").split(" ")[1];
		var firstword = actionname.split("-")[0];
		shortlist += "\u2022" + actionname.replace(/-/g," ").replace(firstword,"") + " on ";
                if($(this).find(".channel").val() != ""){shortlist += "channel " + $(this).find(".channel").val();}
		else{shortlist += "unspecified channel";}
		shortlist += "\n";
	});
	$(".actions-list:visible").closest(".module").find("#mod-acts").html(shortlist);
	$(".actions-list:visible").closest(".module").find("#mod-acts").keyup();}
	else{
	$(".actions-list:visible").closest(".module").find("#mod-acts").html("No Actions Assigned");
	$(".actions-list:visible").closest(".module").find("#mod-acts").keyup();			
	}
	// For some reason iOS misses this hook on dynamically generated elements so we re-assert
    $(freshAction).find("input[type='color']").spectrum();
	// Clean up
	$(".act-menu").hide();
	$("blank-foot").hide();
	$("actions-foot").show();
	
};

/*************************Action Form Control Handlers*********************************/

$(document).on("click", ".deleteaction", function() {
$(this).closest(".action").remove();
if(!$(".actions-list:visible").find(".action").length){
	$(".actions-list:visible").find(".add-reminder").show();
}
});

$(document).on("change", ".range", function() {
  $(this).attr("value", $(this).val());
});

$(document).on("change", ".number", function() {
  $(this).attr("value", $(this).val());
});

$(document).on("change", ".color", function() {
  $(this).attr("value", $(this).spectrum("get").toHexString());
});

$(".number").val(null);

$(document).on("change", ".channel", function() {
    $(this).val(Math.round($(this).val()));
  if (parseInt($(this).val(), 10) > 63) {
    $(this).val(63);
  }else if(parseInt($(this).val(), 10) < 0){
	$(this).val(0);
  }
});

$(document).on("change", ".light-channel", function() {
    $(this).val(Math.round($(this).val()));
  if (parseInt($(this).val(), 10) > 2) {
    $(this).val(2);
  }else if(parseInt($(this).val(), 10) < 0){
	$(this).val(0);
  }
});

$(document).on("change", ".light-count", function() {
    $(this).val(Math.round($(this).val()));
  if (parseInt($(this).val(), 10) > 60) {
    $(this).val(60);
  }else if(parseInt($(this).val(), 10) < 1){
	$(this).val(1);
  }
});

$(document).on("change", ".pixel-number", function() {
    $(this).val(Math.round($(this).val()));
  if (parseInt($(this).val(), 10) > 59) {
    $(this).val(59);
  }else if(parseInt($(this).val(), 10) < 0){
	$(this).val(0);
  }
});

$(document).on("change", ".button-channel", function() {
    $(this).val(Math.round($(this).val()));
  if (parseInt($(this).val(), 10) > 8) {
    $(this).val(8);
  }else if(parseInt($(this).val(), 10) < 0){
	$(this).val(0);
  }
});

$(document).on("change", ".servo-channel", function() {
    $(this).val(Math.round($(this).val()));
  if (parseInt($(this).val(), 10) > 4) {
    $(this).val(4);
  }else if(parseInt($(this).val(), 10) < 0){
	$(this).val(0);
  }
});

$(document).on("change", ".file-number", function() {
    $(this).val(Math.round($(this).val()));
  if (parseInt($(this).val(), 10) > 99) {
    $(this).val(99);
  }else if(parseInt($(this).val(), 10) < 0){
	$(this).val(0);
  }
});

$(document).on("change", ".in-channel", function() {
    $(this).val(Math.round($(this).val()));
  if (parseInt($(this).val(), 10) > 63) {
    $(this).val(63);
  }else if(parseInt($(this).val(), 10) < 0){
	$(this).val(0);
  }
});

// Disable scroll when focused on a number input.
$('form').on('focus', 'input[type=number]', function(e) {
  $(this).on('wheel', function(e) {
    e.preventDefault();
  });
});

// Restore scroll on number inputs.
$('form').on('blur', 'input[type=number]', function(e) {
  $(this).off('wheel');
});

// Disable up and down keys.
$('form').on('keydown', 'input[type=number]', function(e) {
  if (e.which == 38 || e.which == 40) {
    e.preventDefault();
  }
});

$(document).on("click", ".checklabel", function() {
  $(this).closest('div').find('.radio').each(function(i) {
    this.removeAttribute("data-checked");    
    $(this).parent().css("background-image", "none");
  });
  $(this).children(".radio").attr("data-checked", "checked");
  $(this).css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAC8SURBVBiVjZDNCoJQEIXHegJb362MtJH7KLURdHEX7XyGFuE7BULSRQjlpuHL+AMinFaWgVTfboYzzDmHBDP2YYhrloGlhGCGYIbjebhoDV8pCGbQPgzRtC0A4F5VYCnheB5uRQEA6PoevlKgVGvMyY1BbszHLtUaNL9ewpQlWErQ5GdJPIkEM1b0Bcuy3sOv11PA/8PsguBVz+RpqZ51MwynR13TxrbpEEXU9T2N40jnJKGt69Ixjik3hp57mwvNflUAggAAAABJRU5ErkJggg==')");
});

// Sometimes This Helps...
$('.radio').click(function() {});

/***************************************************************************************/

// Returns a URL query string by key
   function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

// Returns a comma-separated pseudo-configuration
function pseudoConfig(){
	
$(".program-button").attr("style", "opacity: 0.4; pointer-events: none");

var attrString = "";

attrString += $("#project-name").html() + ",";
attrString += $("#project-decription").html() + ",";

$(".canvas").find(".module").each(function(){
	attrString += $(this).find(".actions-list").attr("class").split(' ')[1] + ",";	
		$(this).find(".actions-list").find(".action").each(function(){
			attrString += $(this).attr("class").split(' ')[1] + ",";	
			$(this).find("input").each(function(){
				if($(this).hasClass("radio")){
					if($(this).attr("data-checked")!=undefined){
					attrString += "1,";
					}else{
					attrString += "0,";
					}
				}else if($(this).hasClass("color")){
					attrString += $(this).attr("value") + ",";
				}else{
					attrString += $(this).val() + ",";
					}
			});
		});
	});
	
attrString += "<end>";
console.log(attrString);
return(attrString);
};



// Transmutes a pseudo-configuration into a valid hardware configuration 
function configBuilder(pseudo){

	
	var validBoards = ["light","button","accel","motion","sound"];
	var pseudoString = pseudo.split(",");
	console.log(pseudoString);
	var configString = "SPEC\n";
	var boardcnt = 0;
	
	// Extract board names and append to beginning of config string
	pseudoString.forEach(function(e){
		var crumb = e;
		validBoards.forEach(function(x){
		if(x==crumb){configString+=boardID(x)+"\n"; boardcnt++;};
		});	
	});
	
	// Mark Board Config Section
	configString+="B\n";
	
	// Build board sections
	var index = 0;
	pseudoString.forEach(function(z){		
	
		switch (z) {
		
		// Light Board Translators
		
			case "led-rainbow-effect":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+6],0,1000,1,999))+"\n";
				configString+="1.4\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="4.0\n";
				configString+="4.0\n";
				configString+="1.0\n";
				configString+="1."+pseudoString[index+4]+"\n";
				configString+="4."+Math.round(pseudoString[index+5]*2)+"\n";
				break;
				
			case "led-theater-chase":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+7],0,1000,1,999))+"\n";
				configString+="1.5\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="4."+colorConvert(pseudoString[index+6])+"\n"; 
				configString+="4.0\n";
				configString+="1.0\n";
				configString+="1."+pseudoString[index+4]+"\n";
				configString+="4."+Math.round(pseudoString[index+5]*2)+"\n";			
				break;
				
			case "led-scanning-effect":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+7],0,1000,1,999))+"\n";
				configString+="1.6\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="4."+colorConvert(pseudoString[index+6])+"\n"; 
				configString+="4.0\n";
				configString+="1.0\n";
				configString+="1."+pseudoString[index+4]+"\n";
				configString+="4."+Math.round(pseudoString[index+5]*2)+"\n";						
				break;
				
			case "led-twinkle-effect":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+8],0,1000,1,999))+"\n";
				configString+="1.7\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="4."+colorConvert(pseudoString[index+4])+"\n"; 
				configString+="4.0\n";
				configString+="1."+Math.round(scale(pseudoString[index+7],0,1000,0,59))+"\n";
				configString+="1."+pseudoString[index+5]+"\n";
				configString+="4."+Math.round(pseudoString[index+6]*2)+"\n"; // twinkle speed 2ms-2s									
				break;
				
			case "led-lightning-effect":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+8],0,1000,1,999))+"\n";
				configString+="1.8\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="4."+colorConvert(pseudoString[index+4])+"\n"; 
				configString+="4.0\n";
				configString+="1."+Math.round(scale(pseudoString[index+7],0,1000,0,59))+"\n";
				configString+="1."+pseudoString[index+5]+"\n";
				configString+="4."+Math.round(pseudoString[index+6]*2)+"\n"; // lightning speed 2ms-2s									
				break;
				
			case "led-flame-effect":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+6],0,1000,1,999))+"\n";
				configString+="1.9\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="4."+colorConvert(pseudoString[index+5])+"\n"; 
				configString+="4.0\n";
				configString+="1.0\n";
				configString+="1."+pseudoString[index+4]+"\n";
				configString+="4.0\n";												
				break;
				
			case "led-fade-lights":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+8],0,1000,1,999))+"\n";
				configString+="1.2\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="4."+colorConvert(pseudoString[index+4])+"\n"; 
				configString+="4."+colorConvert(pseudoString[index+5])+"\n"; 
				configString+="1.0\n";
				configString+="1."+pseudoString[index+6]+"\n";
				configString+="4."+Math.round(pseudoString[index+7]*10)+"\n"; // fade step = 1ms-1s									
				break;
				
			case "led-fill-color":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+8],0,1000,1,999))+"\n";
				configString+="1.3\n";
				configString+="1."+pseudoString[index+4]+"\n";
				configString+="4."+colorConvert(pseudoString[index+6])+"\n"; 
				configString+="4.0\n"; 
				configString+="1."+pseudoString[index+5]+"\n";
				configString+="1."+pseudoString[index+7]+"\n";
				configString+="4."+Math.round(pseudoString[index+3]*1000)+"\n"; 											
				break;
				
			case "led-light-pixel":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+8],0,1000,1,999))+"\n";
				configString+="1.1\n";
				configString+="1."+pseudoString[index+4]+"\n";
				configString+="4."+colorConvert(pseudoString[index+6])+"\n"; 
				configString+="4.0\n"; 
				configString+="1."+pseudoString[index+5]+"\n";
				configString+="1."+pseudoString[index+7]+"\n";
				configString+="4."+Math.round(pseudoString[index+3]*1000)+"\n"; 														
				break;
				
		// Button Board Translators 
				
			case "button-action-on-press":
				configString+="n\n"; // new behavior begin			
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.0\n";
				configString+="1."+pseudoString[index+1]+"\n";
				break;
				
			case "button-action-on-release":
				configString+="n\n"; // new behavior begin			
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.1\n";
				configString+="1."+pseudoString[index+1]+"\n";					
				break;
				
			case "button-action-on-press-and-release":
				configString+="n\n"; // new behavior begin			
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.2\n";
				configString+="1."+pseudoString[index+1]+"\n";
				break;
				
			case "button-action-while-holding":
				configString+="n\n"; // new behavior begin			
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.3\n";
				configString+="1."+pseudoString[index+1]+"\n";
				break;
				
			case "button-latch-on-latch-off":
				configString+="n\n"; // new behavior begin			
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.4\n";
				configString+="1."+pseudoString[index+1]+"\n";
				break;
				
		//Intertia Board Translators
				
			case "inertia-sense-motion":
				configString+="n\n"; // new behavior begin			
				configString+="1."+pseudoString[index+6]+"\n";
				if(pseudoString[index+4]!=0){ // MOVE radio button
					configString+="1.0\n"; // Active
				}else{
					configString+="1.1\n"; // Inactive
				}
				if(pseudoString[index+2]!=0){ // IF radio button
					configString+="1.1\n"; // Momentary
				}else{
					configString+="1.0\n"; // NO Momentary
				}				
				break;
				
			case "inertia-sense-orientation":
				configString+="n\n"; // new behavior begin			
				configString+="1."+pseudoString[index+10]+"\n";
				if(pseudoString[index+4]!=0){configString+="1.2\n";} // A
				if(pseudoString[index+5]!=0){configString+="1.3\n";} // B
				if(pseudoString[index+6]!=0){configString+="1.4\n";} // C
				if(pseudoString[index+7]!=0){configString+="1.5\n";} // D
				if(pseudoString[index+8]!=0){configString+="1.6\n";} // TOP
				if(pseudoString[index+9]!=0){configString+="1.7\n";} // BOTTOM
				if(pseudoString[index+2]!=0){ // IF radio button
					configString+="1.1\n"; // Momentary
				}else{
					configString+="1.0\n"; // NO Momentary
				}								
				break;
				
			case "inertia-measure-acceleration":
				configString+="n\n"; // new behavior begin			
				configString+="1."+pseudoString[index+5]+"\n";
				if(pseudoString[index+2]!=0){configString+="1.9\n";} // A-B
				if(pseudoString[index+3]!=0){configString+="1.8\n";} // C-D
				if(pseudoString[index+4]!=0){configString+="1.10\n";} // TOP-BOTTOM
				configString+="1.0\n"; // NO Momentary
				break;
				
		// Motion Board Translators
				
			case "motor-toggle-position":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+8],0,1000,1,999))+"\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="1.1\n";
				configString+="2."+Math.round(scale(pseudoString[index+5],0,1000,1000,2000))+"\n"; 
				configString+="2."+Math.round(scale(pseudoString[index+7],0,1000,1000,2000))+"\n"; 
				configString+="4."+Math.round(pseudoString[index+4]*1000)+"\n"; 
				configString+="4."+Math.round(pseudoString[index+6]*1000)+"\n"; 																		
				break;
				
			case "motor-sweep-and-return":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+8],0,1000,1,999))+"\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="1.0\n";
				configString+="2."+Math.round(scale(pseudoString[index+5],0,1000,1000,2000))+"\n"; 
				configString+="2."+Math.round(scale(pseudoString[index+7],0,1000,1000,2000))+"\n"; 
				configString+="4."+Math.round(pseudoString[index+4]*1000)+"\n"; 
				configString+="4."+Math.round(pseudoString[index+6]*1000)+"\n"; 																					
				break;
				
			case "motor-wag":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+8],0,1000,1,999))+"\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="1.2\n";
				configString+="2."+Math.round(scale(pseudoString[index+5],0,1000,1000,2000))+"\n"; 
				configString+="2."+Math.round(scale(pseudoString[index+7],0,1000,1000,2000))+"\n"; 
				configString+="4."+Math.round(pseudoString[index+4]*1000)+"\n"; 
				configString+="4."+Math.round(pseudoString[index+6]*1000)+"\n"; 																					
				break;
				
			case "motor-go-to-position":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+6],0,1000,1,999))+"\n";
				configString+="1."+pseudoString[index+3]+"\n";
				configString+="1.3\n";
				configString+="2."+Math.round(scale(pseudoString[index+5],0,1000,1000,2000))+"\n"; 
				configString+="2.0\n";
				configString+="4."+Math.round(pseudoString[index+4]*1000)+"\n"; 
				configString+="4.0\n"; 																					
				break;
				
		// Sound Board Translators
				
			case "sound-play-sound":
				configString+="n\n"; // new behavior begin
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="2."+Math.round(scale(pseudoString[index+6],0,1000,1,999))+"\n";
				configString+="1."+pseudoString[index+4]+"\n";
				configString+="1.0\n";
				configString+="4."+Math.round(pseudoString[index+3]*1000)+"\n"; 
				configString+="4."+Math.round(pseudoString[index+5]*1000)+"\n"; 
				break;
					
		// New Board Markers
		
			case "light":
				configString+="N\n";
				break;
				
			case "button":
				configString+="N\n";
				break;
				
			case "accel":
				configString+="N\n";
				break;
				
			case "motion":
				configString+="N\n";
				break;
				
			case "sound":
				configString+="N\n";
				break;
				
			// Virtual Board Actions	
				
			case "virtual-invert-filter":
				configString+="V\n";
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.0\n";
				configString+="1."+pseudoString[index+3]+"\n";
				break;
	
			case "virtual-both-active-filter":
				configString+="V\n";
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.1\n";
				configString+="1."+pseudoString[index+3]+"\n";		
				configString+="1."+pseudoString[index+4]+"\n";		
				break;
	
			case "virtual-channel-combiner":
				configString+="V\n";
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.2\n";
				configString+="1."+pseudoString[index+3]+"\n";		
				configString+="1."+pseudoString[index+4]+"\n";						
				break;
	
			case "virtual-difference-detector":
				configString+="V\n";
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.3\n";
				configString+="1."+pseudoString[index+3]+"\n";		
				configString+="1."+pseudoString[index+4]+"\n";						
				break;
	
			case "virtual-random-input":
				configString+="V\n";
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.5\n";
				configString+="4."+Math.round(pseudoString[index+3]*1000)+"\n"; 	
				configString+="4.250\n"; 											
				break;
	
			case "virtual-periodic-input":
				configString+="V\n";
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.6\n";
				configString+="4."+Math.round(pseudoString[index+4]*1000)+"\n"; 	
				configString+="4."+Math.round(pseudoString[index+3]*1000)+"\n"; 					
				break;
	
			case "virtual-sustained-input":
				configString+="V\n";
				configString+="1."+pseudoString[index+2]+"\n";
				configString+="1.4\n";
				configString+="4."+Math.round(pseudoString[index+3]*1000)+"\n"; 				
				break;
	
			case "virtual-constant-input":
				configString+="V\n";
				configString+="1."+pseudoString[index+1]+"\n";
				configString+="1.7\n";
				configString+="2."+Math.round(pseudoString[index+2])+"\n"; 								
				break;			
		
		}
		index++;
	});

	configString+="Y\nX\n";	
	//result
	console.log(configString);
	return(configString);
}

// Scale a number from one range to another
function scale(val, amin, amax, bmin, bmax){
		return(((val-amin)/(amax-amin))*(bmax-bmin) + bmin);
}

// Convert from #RRGGBB to 00GGRRBB
function colorConvert(hexColor) {
	var rVal = hexColor.split("")[1]+hexColor.split("")[2];
	var bVal = hexColor.split("")[3]+hexColor.split("")[4];
	var gVal = hexColor.split("")[5]+hexColor.split("")[6];
	var colorValue = "00" + gVal + rVal + bVal;
	return(parseInt(colorValue,16));
  }
  
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

/* Send the given string of data out over audio. 

   If you send characters outside the range 0-255,
   they will be interpreted as a break (so not transmitted).
*/
function audio_serial_write(data, callback) {
  var sampleRate = 44100;
  var header = 200; // preamble/postable
  var baud = 450;
  var samplesPerByte = parseInt(sampleRate*11/baud, 10); // the number of PCM samples per byte
  
  var lfc = 0; // linefeed count
  data.split("").forEach(function(c) { // count the number of linefeeds and thus checksums for buffer sizing
    var lfcbyte = c.charCodeAt(0);
    if(lfcbyte==10){lfc++;}
  });
    
  var bufferSize = samplesPerByte*data.length/*samples*/ + header*2 + lfc*samplesPerByte;
  var buffer = context.createBuffer(1, bufferSize, sampleRate);
  var b = buffer.getChannelData(0);
  
  var debug = 0; // print bits to console (stupid)

  for (var i=0;i<header;i++) b[i]=1; // Construct a preamble

  var offset = header; // offset will keep our place in the PCM buffer that we're constructing

  var runningSum = 0; // variable for adding the checksum

  data.split("").forEach(function(c) { // split the incoming data into bytes, process each byte
    var byte = c.charCodeAt(0); // get the ascii character code for the current byte	
    runningSum+=byte; // add the current character to the running checksum  
if (byte>=0 && byte<=255) { // if that character code is out of range we insert a pause
      for (var i=0;i<samplesPerByte;i++) { // for the number of samples in a byte...
        var bit = Math.floor(i*baud/sampleRate); // find out which bit in the current byte we're working on
        var value = 1; // make a place to store the value of this PCM sample
        if (bit==0) {value=0; if(debug){console.log(value)};} // bit 0 is always a start bit and writes 0
        else if (bit==9 || bit==10) {value=1; if(debug){console.log(value)};} // bit 9 and 10 are always stop bits and write 1
        else {value = (byte&(0x01<<(8-bit))) ? 1 : 0; if(debug){console.log(value)};} // for each data bit, invert the data and write to the PCM buffer
        b[offset++] = value*2-1; // shift from binary data to -1/1 range of full-swing PCM data      
      }
              if (byte==10) { // if the current byte is a linefeed, append a checksum
						
              var checksum = runningSum % 256; // "roll" the checksum over
              if(debug){console.log("Linefeed detected. Checksum " + checksum + " to follow.");};
            	runningSum = 0; // reset the runningSum
              
              // buffer packing scheme from above
              for (var i=0;i<samplesPerByte;i++) { 
                var bit = Math.floor(i*baud/sampleRate);
                var value = 1;
                if (bit==0) {value=0; if(debug){console.log(value)};} 
                else if (bit==9 || bit==10) {value=1; if(debug){console.log(value)};} 
                else {value = (checksum&(0x01<<(8-bit))) ? 1 : 0; if(debug){console.log(value)};} 
                b[offset++] = value*2-1;  
                }
					} 
      
    } else {
      // if ASCII character code is out of range we insert a pause
      for (var i=0;i<samplesPerByte;i++) 
        b[offset++] = 1; 
    }
  });
  
  // End of transmission checksum (because every document doesn't end in a LF)
  if(runningSum!=0){
  var checksum = runningSum % 256; // "roll" the checksum over
              if(debug){console.log("End of transmission. Checksum " + checksum + " to follow.")};
            	runningSum = 0; // reset the runningSum
              
              // buffer packing scheme from above
              for (var i=0;i<samplesPerByte;i++) { 
                var bit = Math.floor(i*baud/sampleRate);
                var value = 1;
                if (bit==0) {value=0; if(debug){console.log(value)};} 
                else if (bit==9 || bit==10) {value=1; if(debug){console.log(value)};} 
                else {value = (checksum&(0x01<<(8-bit))) ? 1 : 0; if(debug){console.log(value)};} 
                b[offset++] = value*2-1;  
                }
  }

  for (var i=0;i<header;i++) b[offset+i]=1; // Construct a postamble
  
  // prepare our audio chain to create FSK waveform
  var modGain = context.createGain(); // Create a gain module
  modGain.gain.value = 1000; // Set gain to 500x
  var osc = context.createOscillator(); // Create our carrier oscillator 
  osc.frequency.value = 4000; // Set sine carrier frequency 
  var source = context.createBufferSource(); // Create an "audio source" for our modulating waveform
  source.buffer = buffer; // Use our pre-constructed PCM buffer as the modulating source
  source.connect(modGain); // Connect the modulating source (-1/1) to the gain module
  // Connect the gain module (-gain/gain) to the frequency control of the carrier oscillator
  modGain.connect(osc.frequency); 
  // Connect the source-modulated-carrier oscillator to the soundcard
  osc.connect(context.destination); 
  
  // Start the carrier oscillator
  osc.start();
  // Start the modulating source
  source.start();
  
  // When the modulating source finishes chewing on our buffer, stop the carrier oscillator
  source.onended = function() { 
	  osc.stop();
	  $(".program-button").attr("style", "opacity: 1; pointer-events: auto");
  };

  if (callback)
    window.setTimeout(callback, 1000*bufferSize/sampleRate);
}

function boardID(boardName) {

	var id = "";
	switch (boardName) {
			
		case "light":
			id = 0;
			break;
		case "sound":
			id = 1;
			break;
		case "motion":
			id = 2;
			break;
		case "button":
			id = 128;
			break;
		case "accel":
			id = 129;
			break;
	}
	return id;
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// Returns a comma-separated save-file
function encodeFile(){

var attrString = "";

attrString += "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\" ?> \n\n";	
	
attrString += "<config>\n\n";	
attrString += "<title>" + $("#project-name").html() + "</title>\n";
attrString += "<description>" + $("#project-decription").html() + "</description>\n\n";

$(".canvas").find(".module").each(function(){
	attrString += "<board type=\"" + $(this).find(".actions-list").attr("class").split(' ')[1] + "\" nickname=\"";	
	attrString += $(this).find("#mod-nick").html() + "\">\n\n";	
		$(this).find(".actions-list").find(".action").each(function(){
			attrString += "\t\t<action type=\"" + $(this).attr("class").split(' ')[1] + "\">\n";	
			$(this).find("input").each(function(){
				if($(this).hasClass("radio")){
					if($(this).attr("data-checked")!=undefined){
					attrString += "\t\t<entry>1</entry>\n";
					}else{
					attrString += "\t\t<entry>0</entry>\n";
					}
				}else if($(this).hasClass("color")){
					attrString += "\t\t<entry>" + $(this).attr("value") + "</entry>\n";
				}else{
					attrString += "\t\t<entry>" + $(this).val() + "</entry>\n";
					}
			});
		attrString += "\t\t</action>\n\n";
		});
	attrString += "</board>\n\n";	
	});
	
attrString += "\n</config>";
console.log(attrString);
return(attrString);
};

// Transmutes a save-file into an editable configuration 
function fileBuilder(fileContents){

	console.log(fileContents);
	
	var fileText = fileContents;
	
	console.log(fileText);
	
	// Parse the XML formatted save-file
	parser = new DOMParser();
    	xmlDoc = parser.parseFromString(fileText, "text/xml");
	console.log(xmlDoc);
	
	// Fill in basic info 
	changeName(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);
	
	$("#project-decription").html(escapeHtml(xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue));
	
	
	// Insert Boards into Canvas
	var boardIndex = 0;
	
	while(xmlDoc.getElementsByTagName("board")[boardIndex] != undefined){
	
		console.log("...");
		console.log(xmlDoc.getElementsByTagName("board")[boardIndex].attributes[0].nodeValue);
		
		switch (xmlDoc.getElementsByTagName("board")[boardIndex].attributes[0].nodeValue) {
		
			case "light":
				buildLight(xmlDoc.getElementsByTagName("board")[boardIndex].attributes[1].nodeValue);
				var actionIndex = 0;
				console.log(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue);
				while(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex] != undefined){
					buildAction(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue, boardIndex, actionIndex);	
					actionIndex++;
				}
			break;
				
			case "button":	
				buildButton(xmlDoc.getElementsByTagName("board")[boardIndex].attributes[1].nodeValue);
				var actionIndex = 0;
				console.log(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue);
				while(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex] != undefined){
					buildAction(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue, boardIndex, actionIndex);	
					actionIndex++;
				}		
			break;
				
			case "accel":				
				buildAccel(xmlDoc.getElementsByTagName("board")[boardIndex].attributes[1].nodeValue);
				var actionIndex = 0;
				console.log(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue);
				while(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex] != undefined){
					buildAction(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue, boardIndex, actionIndex);	
					actionIndex++;
				}		
			break;
				
			case "motion":				
				buildMotion(xmlDoc.getElementsByTagName("board")[boardIndex].attributes[1].nodeValue);
				var actionIndex = 0;
				console.log(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue);
				while(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex] != undefined){
					buildAction(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue, boardIndex, actionIndex);	
					actionIndex++;
				}			
			break;
				
			case "sound":			
				buildAudio(xmlDoc.getElementsByTagName("board")[boardIndex].attributes[1].nodeValue);
				var actionIndex = 0;
				console.log(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue);
				while(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex] != undefined){
					buildAction(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue, boardIndex, actionIndex);	
					actionIndex++;
				}			
			break;
				
			case "virtual":			
				buildVirtual(xmlDoc.getElementsByTagName("board")[boardIndex].attributes[1].nodeValue);
				var actionIndex = 0;
				console.log(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue);
				while(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex] != undefined){
					buildAction(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].attributes[0].nodeValue, boardIndex, actionIndex);	
					actionIndex++;
				}				
			break;
											
		}
		
			boardIndex++;
		
	}
	
	$(".act-menu").hide();
	$(".actions-list").hide();
}

/*************** Module Builders ****************/

function buildLight(nickName){
    var newModule;	
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(lightModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(lightModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").val(nickName);
	$(newModule).find("#mod-nick").html(nickName);
	// Fix virtual module position to bottom of document	
        $(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);
	
};

function buildButton(nickName){
    var newModule;
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(buttonModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(buttonModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").val(nickName);
	$(newModule).find("#mod-nick").html(nickName);
	// Fix virtual module position to bottom of document	
        $(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);
	
};

function buildAccel(nickName){
    var newModule;	
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(accelModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(accelModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").val(nickName);
	$(newModule).find("#mod-nick").html(nickName);
	// Fix virtual module position to bottom of document	
        $(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);
	
};

function buildMotion(nickName){
    var newModule;
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(motionModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(motionModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").val(nickName);
	$(newModule).find("#mod-nick").html(nickName);
	// Fix virtual module position to bottom of document	
        $(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);
	
};

function buildAudio(nickName){
    var newModule;
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(soundModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(soundModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").val(nickName);
	$(newModule).find("#mod-nick").html(nickName);
	// Fix virtual module position to bottom of document	
        $(".virtual-module").insertAfter($(".canvas").children('.module').slice(-1)[0]);	
};

function buildVirtual(nickName){
    var newModule;
	if (typeof $(".canvas").children('.virtual-module').slice(-1)[0] !== 'undefined') {
		alert("There's already a virtual board attached to this project.\n\n You can only add one virtual board to your project, but that board can contain as many actions as you like!");
	}else{
    if (typeof $(".canvas").children('.module').slice(-1)[0] !== 'undefined') {
    newModule = $(virtualModuleProto).clone().insertAfter($(".canvas").children('.module').slice(-1)[0]);}
    else {
    newModule = $(virtualModuleProto).clone().insertAfter($(".canvas").children('.project-info-module').slice(-1)[0]);};
	$(newModule).find("#mod-nick").val(nickName);
	$(newModule).find("#mod-nick").html(nickName);
	};
};

function buildAction(actionName, boardIndex, actionIndex) {
	
	console.log("building...");
	
	newAction = window[actionTranslate(actionName)];
	var freshAction = $(newAction).clone().appendTo( $(".module").eq(boardIndex).find(".actions-list")[0] );
	var actionsList = $(".module").eq(boardIndex).find(".actions-list")[0];
	// Get rid of the action spacer which is now in the middle of the list
	$(actionsList).find(".action-spacer").remove();
	$(actionsList).find(".add-reminder").hide();
	// Toss that badboy back onto the end of the list
	$(actionSpacer).clone().appendTo( $(".module").eq(boardIndex).find(".actions-list")[0] );
	
	// Fill in Action Details
	var entryIndex = 0;
	
	while(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].getElementsByTagName("entry")[entryIndex] != undefined) {		
	
	if(xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].getElementsByTagName("entry")[entryIndex].firstChild != null){
	var entryVal = xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].getElementsByTagName("entry")[entryIndex].firstChild.nodeValue;	
	}else{
	var entryVal = xmlDoc.getElementsByTagName("board")[boardIndex].getElementsByTagName("action")[actionIndex].getElementsByTagName("entry")[entryIndex].firstChild;	
	}
		
	var thisInput = $(freshAction).find("input")[entryIndex];
		
		if($(thisInput).hasClass("radio")){
					if(entryVal == "1" ){
					$(thisInput).click(); //give attr
					}else{
					//remove attr
					}
				}else if($(thisInput).hasClass("color")){
					$(thisInput).attr("value", entryVal);
					$(thisInput).val(entryVal);
				}else{
					$(thisInput).val(entryVal);
					$(thisInput).html(entryVal);
					$(thisInput).attr("value", entryVal);
					}
	entryIndex++	
	};
	
	// Update board view actions lists
	var shortlist = "";
	if( $(actionsList).children(".action").length){
	 $(actionsList).children(".action").each(function(){
		var actionname = $(this).attr("class").split(" ")[1];
		var firstword = actionname.split("-")[0];
		shortlist += "\u2022" + actionname.replace(/-/g," ").replace(firstword,"") + " on ";
                if($(this).find(".channel").val() != ""){shortlist += "channel " + $(this).find(".channel").val();}
		else{shortlist += "unspecified channel";}
		shortlist += "\n";
	});	
	 $(actionsList).closest(".module").find("#mod-acts").html(shortlist);
	 $(actionsList).closest(".module").find("#mod-acts").keyup();
	 console.log($(actionsList).closest(".module").find("#mod-acts"));}
	else{
	 $(actionsList).closest(".module").find("#mod-acts").html("No Actions Assigned");
	 $(actionsList).closest(".module").find("#mod-acts").keyup();			
	}
	// For some reason iOS misses this hook on dynamically generated elements so we re-assert
    $(freshAction).find("input[type='color']").spectrum();
	$(".act-menu").hide();
	$("blank-foot").hide();
	$("actions-foot").show();
	
};

function actionTranslate(inName){
	
	switch (inName) {
		
			case "led-rainbow-effect":
				return "ledRainbowEffect";
				break;
				
			case "led-theater-chase":
				return "ledTheaterChase";
				break;
				
			case "led-scanning-effect":
				return "ledScanningEffect";
				break;
				
			case "led-twinkle-effect":
				return "ledTwinkleEffect";					
				break;
				
			case "led-lightning-effect":
				return "ledLightningEffect";				
				break;
				
			case "led-flame-effect":
				return "ledFlameEffect";				
				break;
				
			case "led-fade-lights":
				return "ledFade";					
				break;
				
			case "led-fill-color":
				return "ledFill";						
				break;
				
			case "led-light-pixel":
				return "ledPixel";										
				break;
				
			case "button-action-on-press":
				return "buttonPress";
				break;
				
			case "button-action-on-release":
				return "buttonRelease";
				break;
				
			case "button-action-on-press-and-release":
				return "buttonClick";
				break;
				
			case "button-action-while-holding":
				return "buttonHold";
				break;
				
			case "button-latch-on-latch-off":
				return "buttonLatch";
				break;
				
			case "inertia-sense-motion":
				return "inertiaMotionSense";
				break;
				
			case "inertia-sense-orientation":
				return "inertiaOrientationSense";				
				break;
				
			case "inertia-measure-acceleration":
				return "inertiaMeasureAccel";
				break;

			case "motor-toggle-position":
; 				return "motorSweep";													
				break;
				
			case "motor-sweep-and-return":
 				return "motorSweepReturn";																
				break;
				
			case "motor-wag":
				return "motorWag";																	
				break;
				
			case "motor-go-to-position":
				return "motorGoto";																	
				break;
				
			case "sound-play-sound":
				return "soundPlay";
				break;
				
			case "virtual-invert-filter":
				return "virtualInvert";
				break;
	
			case "virtual-both-active-filter":
				return "virtualAnd";
				break;
	
			case "virtual-channel-combiner":
				return "virtualOr";		
				break;
	
			case "virtual-difference-detector":
				return "virtualXor";	
				break;
	
			case "virtual-random-input":
				return "virtualRandom";						
				break;
	
			case "virtual-periodic-input":
				return "virtualPeriodic";
				break;
	
			case "virtual-sustained-input":
				return "virtualSustained";
				break;
	
			case "virtual-constant-input":
				return "virtualConstant";			
				break;			
		
		}
	
};
