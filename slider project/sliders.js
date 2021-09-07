const imgs=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
const buttons=document.querySelector(".buttons");
const image=document.querySelector(".image img");
const img_container=document.querySelector(".image");
var pos=0;

buttons.addEventListener("click",function(e){
    const id=e.target.id;
    
    console.log(id);
    if(id=="next")
    {
        if(pos<=4)
        {
            pos++;
        }
        else{
            pos=0;
        }
        image.src=`/resources/${imgs[pos]}`;
    }
    else{
        if(pos>0)
        {
            pos--;
        }
        else{
            pos=5;
        }
        image.src=`/resources/${imgs[pos]}`;
    }
});

var flag=0;
img_container.addEventListener("click",function(e){
    const img=e.target.id;
    if(img=="image")
    {
        if(flag==0)
        {
            document.querySelector(".image").classList.add("active");
            document.querySelector("#image").classList.add("active-img");
            document.querySelector("#next").style.display="none";
            document.querySelector("#back").style.display="none";
            flag=1;
        }
        else{
            document.querySelector(".image").classList.remove("active");
            document.querySelector("#image").classList.remove("active-img");
            document.querySelector("#next").style.display="block";
            document.querySelector("#back").style.display="block";
            flag=0;
        }
    }
});