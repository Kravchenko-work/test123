document.querySelector(".block").onclick=function(e){if("checkbox__img"==e.target.className){let t=e.target;"img/03.png"==t.getAttribute("src")?t.setAttribute("src","img/02.png"):t.setAttribute("src","img/03.png")}};let button=document.querySelector(".top__button");function addElement(){let e=document.querySelector(".block-item").cloneNode(!0);e.querySelector(".block-item__input").value=document.querySelector(".top__input").value,document.querySelector(".block").append(e)}button.addEventListener("click",addElement),document.onkeydown=function(e){"Enter"==e.key&&addElement()};let block=document.querySelector(".block");block.addEventListener("click",(function(e){let t=e.target;"delete__img"==t.className&&t.closest(".block-item").remove()}));