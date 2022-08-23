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
    document.getElementById("button2").style.display="";
    document.getElementById("keplet").style.display="none";
}

function karacsonyfaizalodas()
{
    document.getElementById("button").style.display="none";
    document.getElementById("tree").style.display="";
}

function matek()
{
    var szamok = new Array();

    alert("Bekérek öntől 5db számot.")

    szamok[0] = parseInt(prompt("Kérem írjon be egy számot!"));
    szamok[1] = parseInt(prompt("Kérem írjon be még egy számot!"));
    szamok[2] = parseInt(prompt("Kérem írjon be még egy számot!"));
    szamok[3] = parseInt(prompt("Kérem írjon be még egy számot!"));
    szamok[4] = parseInt(prompt("Kérem írjon be még egy számot!")); 

    document.getElementById("button2").style.display="none";

    document.getElementById("numbers").innerHTML="A számok a következők: " + szamok[0] + "; " + szamok[1] + "; " + szamok[2] + "; " + szamok[3] + "; " + szamok[4] + ";";
    document.getElementById("numbers2").innerHTML="A számok négyzetei a következők: " + szamok[0] * szamok[0]+ "; " + szamok[1] * szamok[1] + "; " + szamok[2] * szamok[2] + "; " + szamok[3] * szamok[3] + "; " + szamok[4] * szamok[4] + ";";
}

function matek2()
{
    var x = prompt("Kérem írjon be egy tizedestört alakú számot! (A tizedesvessző helyére írjon pontot!)")

    var xrounded = 0;

    var xup = Math.ceil(Number(x));
    var xdown = Math.floor(Number(x));

    if(xup <= Number(x) + 0.5)
    {
        xrounded = xup;
    }

    else if(Number(x) + 0.5 < xup)
    {
        xrounded = xdown;
    }

    document.getElementById("numbers3").innerHTML="A beírt szám egészre kerekített értéke: " + xrounded + ";";
}

function matek3()
{
    var numbers = new Array();

    var atlag = 0;

    var osszeg = 0;

    var db = 0;

    alert("Most egy kis átlagszámolás jön.");

    var x = prompt("Kérem adja meg, hány db szám átlagát szeretné kiszámolni!");

    for(let i = 0; i < Number(x); i++)
    {
        numbers[i] = prompt("Kérem írjon be egy számot!");

        osszeg = Number(osszeg) + Number(numbers[i]);
    }

    db = numbers.length;

    atlag = Number(osszeg) / Number(db);

    document.getElementById("numbers4").innerHTML= "A beírt számok a következők: " + numbers + ";";

    document.getElementById("numbers5").innerHTML= "A beírt számok átlaga következő: " + atlag + ";";
}

function matek4()
{
    var b = 0;

    var c = 0;

    alert("Most egy másodfokú egyenletet fogunk megoldani.");

    var a = prompt('Kérem írjon be egy "a" számot, ami nem egyenlő 0-val!');

    if(a != 0 & a != null)
    {
        matek4b(a, b, c);
    }

    if(a == 0)
    {
        matek4c(a, b, c);
    }

    if(a == null)
    {
        matek4d();
    }
}

function matek4b(a, b, c)
{
    b = prompt('Kérem írjon be egy "b" számot!');

    c = prompt('Kérem írjon be egy "c" számot!');

    document.getElementById("numbers6").innerHTML= "a = " + a + "; b = " + b + "; c = " + c + "; x = ?;";

    document.getElementById("numbers7").innerHTML= "Az egyenlet megoldóképlete a következő:";

    document.getElementById("numbers8").innerHTML= "Az egyenlet a következő:";

    document.getElementById("numbers9").innerHTML= "x = ";

    document.getElementById("numbers10").innerHTML= -1 * b + "&#177" + "<math>" + "<msqrt>" + b + "<sup>2</sup>" + " - " + "4 * " + a + " * " + c + "</msqrt>" + "</math>";

    document.getElementById("numbers11").innerHTML= "2 * " + a;


    matek4e();
}

function matek4c(a, b, c)
{
    alert('"a" nem lehet 0!');

    a = prompt('Kérem írjon be egy "a" számot, ami nem egyenlő 0-val!');

    if(a != 0 & a != null)
    {
        matek4b(a, b, c);
    }

    if(a == 0)
    {
        matek4c(a, b, c);
    }

    if(a == null)
    {
        matek4d();
    }
}

function matek4d()
{
    document.getElementById("numbers6").style.display="none";

    document.getElementById("numbers7").style.display="none";

    document.getElementById("keplet").style.display="none";

    document.getElementById("numbers8").style.display="none";

    document.getElementById("numbers9").style.display="none";

    document.getElementById("numbers10").style.display="none";

    document.getElementById("numbers11").style.display="none";
}

function matek4e()
{
    document.getElementById("numbers6").style.display="";

    document.getElementById("numbers7").style.display="";

    document.getElementById("keplet").style.display="";

    document.getElementById("numbers8").style.display="";

    document.getElementById("numbers9").style.display="";

    document.getElementById("numbers10").style.display="";

    document.getElementById("numbers11").style.display="";
}