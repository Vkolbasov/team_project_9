const e=document.querySelector(".menu-icon"),t=document.querySelector(".menu");e&&e.addEventListener("click",(function(o){document.body.classList.toggle("lock"),e.classList.toggle("active"),t.classList.toggle("is-open")}));const o=document.querySelectorAll(".menu__link[data-goto]");if(o.length>0){function c(o){const c=o.target;if(c.dataset.goto&&document.querySelector(c.dataset.goto)){const s=document.querySelector(c.dataset.goto).getBoundingClientRect().top+scrollY-document.querySelector("header").offsetHeight;e.classList.contains("active")&&(document.body.classList.remove("lock"),e.classList.remove("active"),t.classList.remove("is-open")),window.scrollTo({top:s,behavior:"smooth"}),o.preventDefault()}}o.forEach((e=>{e.addEventListener("click",c)}))}
//# sourceMappingURL=index.b0d75530.js.map
