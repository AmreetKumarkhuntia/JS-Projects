const questions=document.querySelectorAll(".question");
questions.forEach(function(question){
    const btn=question.querySelector(".button");
    btn.addEventListener("click",function(e){
        if(question.classList.toggle("button"))
        {
            btn.classList.add("active-button");
            question.querySelector("hr").style.display="block";
            const height=question.querySelector(".answer-span").offsetHeight;
            console.log(height);
            question.querySelector(".answer").style.height=`${height}px`;
        }
        else
        {
            btn.classList.remove("active-button");
            question.querySelector("hr").style.display="none";
            question.querySelector(".answer").style.height=`0px`;
        }
    })
});