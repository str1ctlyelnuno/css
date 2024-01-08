var titleBar = document.getElementById("title-bar");
var exit = document.getElementById("exit");
var square = document.getElementById("square");
var x = document.getElementById("myAudio");

////////////////// Hover listeners //////////////////

square.addEventListener('mouseover', function handleMouseOver() {
  square.style.backgroundColor = '#B9B9B9';
  square.style.cursor = 'context-menu';
});

square.addEventListener('mouseout', function handleMouseOut() {
  square.style.backgroundColor = '#E0DAD6';
  square.style.cursor = 'default';
});

exit.addEventListener('mouseover', function handleMouseOver() {
  exit.style.backgroundColor = 'red';
  exit.style.cursor = 'context-menu';
});

exit.addEventListener('mouseout', function handleMouseOut() {
  exit.style.backgroundColor = '#E0DAD6';
  exit.style.cursor = 'default';
});

titleBar.addEventListener('mouseover', function handleMouseOver() {
  titleBar.style.cursor = 'context-menu';
});

titleBar.addEventListener('mouseout', function handleMouseOver() {
  titleBar.style.cursor = 'default';
});






//////////////// Make window draggable start ////////////////
// Make the DIV element draggable:
var draggable = $('#window');
var title = $('#title-bar');

title.on('mousedown', function(e){
	var dr = $(draggable).addClass("drag");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
			dr.removeClass("drag");
	});
});
//////////////// Make window draggable end ////////////////


////////////////// Onclick listeners //////////////////
// X button functionality
$("#exit").click(function(){
  x.pause();
  $("#window").css("display", "none");
  });

// Maximize button functionality
$("#square").click(enlarge);

function enlarge(){
  if(square.classList.contains("enlarged")){
    $("#window").css("width", "40%");
    $("#title-bar-width").css('width', '100%').css('width', '+=2px');
    $("#content").css("width", "100%");
    $("#square").removeClass("enlarged");
  }
  else{
    $("#window").css("width", "70%");
    $("#title-bar-width").css('width', '100%').css('width', '+=2px');
    $("#content").css("width", "100%");
    $("#square").addClass("enlarged");
  }
}

function clickme() {
  document.getElementById("window").style.display = "block";
}