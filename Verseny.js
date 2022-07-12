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

function start()
{
    document.getElementById("button").style.display="";
    document.getElementById("tree").style.display="none";
}

function karacsonyfaizalodas()
{
    document.getElementById("button").style.display="none";
    document.getElementById("tree").style.display="";
    document.getElementById("button2").style.display="";
}

function matek()
{
    var szamok = new Array();

    alert("Bekérek öntől 5 számot.")

    szamok[0] = parseInt(prompt("Kérem írjon be egy számot!"));
    szamok[1] = parseInt(prompt("Kérem írjon be még egy számot!"));
    szamok[2] = parseInt(prompt("Kérem írjon be még egy számot!"));
    szamok[3] = parseInt(prompt("Kérem írjon be még egy számot!"));
    szamok[4] = parseInt(prompt("Kérem írjon be még egy számot!"));

    document.getElementById("button2").style.display="none";

    document.getElementById("numbers").innerHTML="A számok a következők: " + szamok[0] + "; " + szamok[1] + "; " + szamok[2] + "; " + szamok[3] + "; " + szamok[4] + ";";
    document.getElementById("numbers2").innerHTML="A számok négyzetei a következők: " + szamok[0] * szamok[0]+ "; " + szamok[1] * szamok[1] + "; " + szamok[2] * szamok[2] + "; " + szamok[3] * szamok[3] + "; " + szamok[4] * szamok[4] + ";";
}