const date=document.getElementsByClassName("date");
date.innerHtml=new Date().getFullYear();

const navv=document.getElementsByClassName("navbar");
window.addEventListener("scroll",function(){
    let scrollheight=window.pageYOffset;
    let windowheight=nav.getBoundingClientRect().height;
    if(scrollheight>windowheight)
    {
        nav.style.backgroundColor="white";
        document.querySelector('#link1').style.color="black";
        document.querySelector('#link2').style.color="black";
        document.querySelector('#link3').style.color="black";
        document.querySelector('#link4').style.color="black";
    }
    else
    {
        nav.style.backgroundColor="";
        document.querySelector('#link1').style.color="white";
        document.querySelector('#link2').style.color="white";
        document.querySelector('#link3').style.color="white";
        document.querySelector('#link4').style.color="white";
    }

} );