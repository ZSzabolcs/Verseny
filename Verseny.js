function dateprint()
{
    var d = new Date();
    var date = d.toLocaleDateString();
    var time = d.toLocaleTimeString();
    var daynumber = d.getDay();

    if(daynumber == 1)
    {
        var day = "hétfő";
    }

    if(daynumber == 2)
    {
        var day = "kedd";
    }

    if(daynumber == 3)
    {
        var day = "szerda";
    }

    if(daynumber == 4)
    {
        var day = "csütörtök";
    }

    if(daynumber == 5)
    {
        var day = "péntek";
    }
    
    if(daynumber == 6)
    {
        var day = "szombat";
    }

    if(daynumber == 7)
    {
        var day = "vasárnap";
    }

    document.getElementById("date").innerHTML= date + " " + time + " " + day;
}

function dateReload()
{
    var d = new Date();
    var date = d.toLocaleDateString();
    var time = d.toLocaleTimeString();
    var daynumber = d.getDay();

    if(daynumber == 1)
    {
        var day = "hétfő";
    }

    if(daynumber == 2)
    {
        var day = "kedd";
    }

    if(daynumber == 3)
    {
        var day = "szerda";
    }

    if(daynumber == 4)
    {
        var day = "csütörtök";
    }

    if(daynumber == 5)
    {
        var day = "péntek";
    }
    
    if(daynumber == 6)
    {
        var day = "szombat";
    }

    if(daynumber == 7)
    {
        var day = "vasárnap";
    }

    document.getElementById("date").innerHTML= date + " " + time + " " + day;
}