$(document).ready(function(){var e;$("a").on("click",function(a){var e;""!==this.hash&&(a.preventDefault(),e=this.hash,$("html, body").animate({scrollTop:$(e).offset().top},800,function(){window.location.hash=e}))}),$(window).scroll(function(){600<=$(window).scrollTop()?$("header").addClass("active"):$("header").removeClass("active")});var o=0,n=$("header").outerHeight();$(window).scroll(function(a){e=!0}),setInterval(function(){e&&(function(){var a=$(this).scrollTop();if(Math.abs(o-a)<=5)return;o<a&&n<a?$("header").removeClass("nav-active").addClass("nav-up"):a+$(window).height()<$(document).height()&&$("header").removeClass("nav-up").addClass("nav-active");o=a}(),e=!1)},250)});