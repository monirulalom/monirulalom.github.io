!function(){"use strict";const e=document.querySelector(".toggle"),t=document.querySelector(".menu");var s,c=document.querySelectorAll(".item");function i(){this.classList.contains("submenu-active")?this.classList.remove("submenu-active"):(t.querySelector(".submenu-active")&&t.querySelector(".submenu-active").classList.remove("submenu-active"),this.classList.add("submenu-active"))}e.addEventListener("click",function(){t.classList.contains("active")?(t.classList.remove("active"),e.querySelector("a").innerHTML="<i class='fas fa-bars'></i>"):(t.classList.add("active"),e.querySelector("a").innerHTML="<i class='fas fa-times'></i>")},!1);for(s of c)s.querySelector(".submenu")&&s.addEventListener("click",i,!1),s.addEventListener("keypress",i,!1);document.addEventListener("click",function(e){!t.contains(e.target)&&t.querySelector(".submenu-active")&&t.querySelector(".submenu-active").classList.remove("submenu-active")},!1)}(jQuery);