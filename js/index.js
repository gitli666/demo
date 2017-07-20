$(function() {
	$("#span1").click(function() {
		$(".ul1").slideToggle()
		$(".ul2").slideUp()
	})
	$("#span2").click(function() {
		$(".ul2").slideToggle()
		$(".ul1").slideUp()
	})
	
	
	
	
	$(".ul1 li").click(function() {
		$(".ul1").hide()
	}).hover(function() {
		$(this).css("background", "#adaeae")
	}, function() {
		$(this).css("background", "white")
	})
	
	
	
	
	$(".ul2 li").click(function() {
		$(".ul2").hide()
	}).hover(function() {
		$(this).css("background", "#adaeae")
	}, function() {
		$(this).css("background", "white")
	})
	
	
	
	$(".ul1 li").each(function() {
		$(this).click(function() {
			$(".input1").val($(this).text())
		})

	})
	$(".ul2 li").each(function() {
		$(this).click(function() {
			$(".input2").val($(this).text())
		})

	})
//	$("input").focus(function(){
//		$(this).css("outline","none")
//	})
})