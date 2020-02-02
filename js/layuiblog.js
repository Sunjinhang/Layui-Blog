layui.define(['element', 'layer', 'jquery'], function(exports) {
	var element = layui.element;
	var $ = layui.jquery;
	var layer = layui.layer;
	
	layuiblog = new function(){
		
	}
	/**
	 * 监听提示信息
	 */
	$("body").on("mouseenter", ".layui-menu-tips", function() {
		var tips = $(this).children('a').text();
		openTips = layer.tips(tips, $(this), {
			tips: [2, '#2f4056'],
			time: 30000
		});
	});
	$("body").on("mouseleave", ".layui-menu-tips", function() {
		layer.close(openTips);
	});
	exports("layuiblog", layuiblog);
});
