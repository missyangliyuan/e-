
$(function(){
	//为导航栏添加事件
	$("ul.leftnav").on("click","li",function(){
		var url = $(this).attr("url");
		$("ul.leftnav>li").removeClass("bianhua");
		$(this).addClass("bianhua");
		$("#wrapper").load(url);
	})
	// 模拟点击第一个li
	$("ul.leftnav > li:first-child").trigger("click");
})