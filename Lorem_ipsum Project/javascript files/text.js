window.onload = function()
{
    const text = document.getElementById("textarray");
    const textarray = ["T", "r", "y", " ", "t", "h", "i", "s"];
    let textno = 0;
    let flag=1;

    setInterval(function updatecursor() {

        let temp=textarray.slice(0,textno);
        temp=temp.map(function(item)
        {
            return `${item}`;
        }).join("");
       
        text.innerHTML = temp;
        if(flag==1)
        {
            textno=textno+1;
        }
        else
        {
            textno=textno-1;
        }

        if(textno==0)
        {
            flag=1;
        }
        if(textno==8)
        {
            setTimeout(function(){
                flag=0;
            },5000)
        }

    }, 500);
}