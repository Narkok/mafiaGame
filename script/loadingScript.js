var timer = setInterval(checkState, 2000);

setTimeout(function() 
{ 
    $('.startPage').css("opacity","1");
    $('.startPageLeftLogo').css("opacity","1");
    $('.startLoad').css("opacity","1");
}, 500);

function checkState() 
{
    if (document.readyState == "complete")
    {
        clearInterval(timer);
        $('.startLoad').css("opacity","0");
        setTimeout(function()
        {
            $('.startLoad').css("display","none");
            $('.startPageMenu').css("left","-12vw");
        },300);
        loaded = 1;
    }
    return;
}
