(function(){"use strict";if("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach){var e=function(e,t,n){var r=function(e,t){if(e=="easeInQuad")return t*t;if(e=="easeOutQuad")return t*(2-t);if(e=="easeInOutQuad")return t<.5?2*t*t:-1+(4-2*t)*t;if(e=="easeInCubic")return t*t*t;if(e=="easeOutCubic")return--t*t*t+1;if(e=="easeInOutCubic")return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1;if(e=="easeInQuart")return t*t*t*t;if(e=="easeOutQuart")return 1- --t*t*t*t;if(e=="easeInOutQuart")return t<.5?8*t*t*t*t:1-8*--t*t*t*t;if(e=="easeInQuint")return t*t*t*t*t;if(e=="easeOutQuint")return 1+ --t*t*t*t*t;if(e=="easeInOutQuint")return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t;return t};var i=window.pageYOffset;var s=function(e){var t=0;if(e.offsetParent){do{t+=e.offsetTop;e=e.offsetParent}while(e)}return t};var o=s(e)-i;var u=o/(t/16);var a=0;var f,l,c;var h=function(){a+=16;f=a/t;f=f>1?1:f;l=i+o*r(n,f);window.scrollTo(0,l);c()};if(u>=0){c=function(){var t=window.pageYOffset;if(t>=s(e)-u||window.innerHeight+t>=document.body.offsetHeight){clearInterval(p)}}}else{c=function(){var t=window.pageYOffset;if(t<=s(e)||t<=0){clearInterval(p)}}}var p=setInterval(h,16)};var t=document.querySelectorAll(".scroll");[].forEach.call(t,function(t){t.addEventListener("click",function(n){n.preventDefault();var r=t.getAttribute("href");var i=document.querySelector(r);var s=t.getAttribute("data-speed");var o=t.getAttribute("data-easing");if(i){e(i,s||500,o||"easeInOutCubic")}},false)})}})()