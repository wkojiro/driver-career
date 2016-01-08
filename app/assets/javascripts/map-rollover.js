$(function(){

	$("#japan").css({ "opacity": "1"});

	$("area").hover(function(){
		$("#japan").stop();
		var areaId = $(this).attr("id");
		$("#japan").attr("src", "images/home/" + areaId + ".png").fadeTo(0, 1);
	},
	function(){
		$("#japan").stop();
		$("#japan").attr("src", "images/home/map_jpn.png").css({
			"opacity": "1"
		});
	});

	$("li a").hover(function(){
		$("#japan").stop();
		var listId = $(this).parent("li").attr("id");
		var changeListId = listId.replace(/nav-(\w.)/, "$1");
		$("#japan").attr("src", "images/home/" + changeListId + ".png").fadeTo(0, 1);
	},
	function(){
		$("#japan").stop();
		$("#japan").attr("src", "images/home/map_jpn.png").css({
			"opacity": "1"
		});
	});

});