// build time:Sun Jan 20 2019 19:30:49 GMT+0800 (GMT+08:00)
$(window).scroll(function(){$(window).scrollTop()>$(window).height()*.5?$("#rocket").addClass("show"):$("#rocket").removeClass("show")});$("#rocket").click(function(){$("#rocket").addClass("launch");$("html, body").animate({scrollTop:0},1e3,function(){$("#rocket").removeClass("show launch")});return false});
//rebuild by neat 