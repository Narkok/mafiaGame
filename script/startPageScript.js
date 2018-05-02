var startMenuButtonSelected = 1;
var startMenuPage = 1;

var checkStateTimer = setInterval(checkState, 2100);

function checkState() 
{
    if (loaded == 1)
    {
        clearInterval(checkStateTimer);
        setTimeout(function(){changeSelectedButtonHover();},2000);
    }
    return;
}

function mouselog(event) 
{
    if (event.type.toString() == "mouseout")
        startMenuButtonSelected = 0;
    if (event.type.toString() == "mouseover") 
        startMenuButtonSelected = event.target.className.toString().slice(-1);
    changeSelectedButtonHover();
}

function changeSelectedButtonHover()
{
    $(".startMenuButtonHoverLine").css("left","-550px");
    $(".startMenuButton").css("text-shadow","0 0 8px black");
    $(".startMenuButton").css("color","white");

    if (startMenuButtonSelected == 3)
    {
        $(".startButton3").css("text-shadow","none");
        $(".startButton3").css("color","#C0392B");
        $(".smbHoverLine3").css("left","calc(-520px + 12vw + 57px");
    }
    else if (startMenuButtonSelected == 2)
    {
        $(".startButton2").css("text-shadow","none");
        $(".startButton2").css("color","#C0392B");
        $(".smbHoverLine2").css("left","calc(-520px + 12vw + 115px");
    }
    else if (startMenuButtonSelected == 1)
    {
        $(".startButton1").css("text-shadow","none");
        $(".startButton1").css("color","#C0392B");
        $(".smbHoverLine1").css("left","calc(-520px + 12vw + 130px");
    }
    return;
}

document.onkeydown = function(e) 
{
    if (startMenuPage == 1)
    {
        e = e || window.event;
        var code = e.code;

        if (code == 'ArrowDown')
        {
            if (startMenuButtonSelected == 0)
                startMenuButtonSelected = 1;
            else if (startMenuButtonSelected == 1)
                startMenuButtonSelected = 2;
            else if (startMenuButtonSelected == 2)
                startMenuButtonSelected = 3;
        }
        else if (code == 'ArrowUp')
        {
            if (startMenuButtonSelected == 3)
                startMenuButtonSelected = 2;
            else if (startMenuButtonSelected == 2)
                startMenuButtonSelected = 1;
            else if (startMenuButtonSelected == 0)
                startMenuButtonSelected = 1;            
        }
        else if (code == 'Enter')
        {
            if (startMenuButtonSelected == 1) 
            {
                newGameMenuOpen();
                startMenuButtonSelected = 0;
            }
        }
        changeSelectedButtonHover();
    }
    return true;
}

$('#startMenuButton1').click(function()
{   
    newGameMenuOpen();
    startMenuButtonSelected = 0;
    changeSelectedButtonHover();
});

$('#backToMainMenu').click(function()
{   
    $('.newGameMenu').css("opacity","0");
    $('.startPageLeft').css("display","block");
    setTimeout(function() 
    { 
        $('.newGameMenu').css("display","none");
        $('.startPageLeft').css("opacity","1");
        $('.startPageMenu').css("left","-12vw");
    }, 1000);
    setTimeout(function()
    {
        startMenuButtonSelected = 1;
        changeSelectedButtonHover();
    },2000);
});

function newGameMenuOpen()
{
    $('.startPageMenu').css("left","-50vw");
    $('.startPageLeft').css("opacity","0");
    $('.newGameMenu').css("display","block"); 
    setTimeout(function() 
    { 
        $('.startPageLeft').css("display","none"); 
        $('.newGameMenu').css("opacity","1");
    }, 1000);
}

function checkGameSettings()
{
    return 1;
}

$('#startGameButton').click(function()
{
    if (checkGameSettings() == 1) 
    {
        $('.bullet').css("display","block");
        setTimeout(function() 
        { 
            $('.bulletRight').css("right","-1000px");
            $('.bulletLeft').css("left","-1000px");
            $('.startButtonGunRight').css("transform","rotate(-20deg)");
            $('.startButtonGunLeft').css("transform","rotate(20deg)");
            $('.startButtonGunRight').css("right","-60px");
            $('.startButtonGunLeft').css("left","-60px");
        }, 10);
        setTimeout(function() 
        { 
            $('.startPage').css("opacity","0");
            $('.mainGameLoading').css("display","block");
        }, 1000);
        setTimeout(function() 
        { 
            $('.startPage').css("display","none");
            $('.mainGameLoading').css("opacity","1");
        }, 3000);
    }
});

