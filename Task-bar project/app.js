const btns=document.querySelectorAll(".button");
const content=document.querySelectorAll(".content");
window.addEventListener('click',function(e){
    const id=e.target.dataset.id;
    if(id)
    {
        btns.forEach(function (){
            console.log(e.target); 
            btns.classlist.remove("active");
        });
    }
});