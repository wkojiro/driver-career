$(window).load(function () {
  var options ={
	  size : "mini",
	  onColor : "success",
	  offColor : "danger",
	  onText : "活動中",
	  offText : "活動停止中"
  };  

  $("[name='active']").bootstrapSwitch(options);

});


$(function() {
	$( "#tabs" ).tabs();
});

$(function() {
    $("#googleMapBTN").click(function(){
        $("#googleMap").toggle("slow");
    });
});