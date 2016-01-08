$(function(){

	//初期段階にてダミー画像は透明にしておく
	$("#japan").css({
		"opacity": "0"
	});

	//areaのマウスオーバーにて画像を置換
	$("area").hover(function(){
		$("#japan").stop();
		var areaId = $(this).attr("id");
		$("#japan").attr("src", "images/" + areaId + ".png").fadeTo(500, 1);
	},
	function(){
		$("#japan").stop();
		$("#japan").attr("src", "images/dummy.png").css({
			"opacity": "0"
		});
	});

	//li aのマウスオーバーにて画像を置換
	$("li a").hover(function(){
		$("#japan").stop();
		var listId = $(this).parent("li").attr("id");
		var changeListId = listId.replace(/nav-(\w.)/, "$1");
		$("#japan").attr("src", "images/" + changeListId + ".png").fadeTo(500, 1);
	},
	function(){
		$("#japan").stop();
		$("#japan").attr("src", "images/dummy.png").css({
			"opacity": "0"
		});
	});

});