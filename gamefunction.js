// Das sind die Hauptstats
mainlevel = 1;
mainexp = 0;
upexp = 2;
mainhp = 100;
maxhp = 100;
mainatk = 20;
maindef = 10;
mainspd = 50;
maingold = 0;
mainmaxlevel = 20;

// Hier sind alle ober Decks gelistet
alldecks = [];
// Diese Decks werden in alledecks implementiert und bekommen Unterdecks
wegdecks = [];
monsterdecks = [];
shopdecks = [];
kampfdecks = [];
lootdecks = [];
startdecks = [];
itemlist = [];
// Das sind die ersten Unterdecks für die itemlist
armorlist = [];
helmlist = [];
shildlist = [];
bootslist = [];
weaponlist = [];
goldlist = [];
// Liste mit Monstern für die Monsterdecks
animallist = [];
// Das ist das Inventar
slot1 = ["leer", 0, "slot1"]; //Helm
slot2 = ["leer", 0, "slot2"]; //Rüstung
slot3 = ["leer", 0, "slot3"]; //Schild
slot4 = ["leer", 0, "slot4"]; //Schuhe
slot5 = ["leer", 0, "slot5"]; //Waffe
slot6 = ["leer", 0, "slot6"]; //Gold

deletedtitle = [];
activetitel = [];

gamestartet = false;
randomdeck = 0;


function Starter(){
    setInterval(Update, 1000/30);
    itemscreate();
    deckcreator();
}

function Update(){
    document.getElementById("changelevel").innerHTML = mainlevel;
    document.getElementById("changeexp").innerHTML = mainexp + " / " + upexp;
    document.getElementById("changehp").innerHTML = mainhp + " / " + maxhp;
    document.getElementById("changeatk").innerHTML = mainatk + Number(slot5[1]);
    document.getElementById("changedef").innerHTML = maindef + Number(slot1[1]) + Number(slot2[1]) + Number(slot3[1]);
    document.getElementById("changespd").innerHTML = mainspd + Number(slot4[1]);

    document.getElementById("werthelm").innerHTML = slot1[1] + " Def";
    document.getElementById("wertarmor").innerHTML = slot2[1] + " Def";
    document.getElementById("wertschild").innerHTML = slot3[1] + " Def";
    document.getElementById("wertschuhe").innerHTML = slot4[1] + " Spd";
    document.getElementById("wertwaffe").innerHTML = slot5[1] + " Atk";
    document.getElementById("wertgold").innerHTML = slot6[1] + " Stück";

    document.getElementById("namehelm").innerHTML = "[" + slot1[0] + "]:";
    document.getElementById("namearmor").innerHTML = "[" + slot2[0] + "] :";
    document.getElementById("nameschild").innerHTML = "[" + slot3[0] + "] :";
    document.getElementById("nameschuhe").innerHTML = "[" + slot4[0] + "] :";
    document.getElementById("namewaffe").innerHTML = "[" + slot5[0] + "] :";

    levelup();

}
/*###########################################################
#############################################################
            Erstellt zum Anfang des Spiels die Decks
#############################################################
#############################################################*/

function deckcreator(){
    alldecks.push(wegdecks, monsterdecks, shopdecks, kampfdecks, lootdecks, startdecks, itemlist);
    itemlist.push(armorlist, helmlist, shildlist, bootslist, weaponlist, goldlist);
}


function levelup(){
    var levelupexp = new Array(
        2,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512,
        1024,
        2048,
        4096,
        8192,
        16384,
        32768,
        65536,
        131072,
        262144,
        524288
        )
    if(mainexp >= levelupexp[0] && mainlevel < 2){
        mainlevel = 2;
        mainexp -= levelupexp[0];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[1];
    }
    if(mainexp >= levelupexp[1] && mainlevel < 3){
        mainlevel = 3;
        mainexp -= levelupexp[1];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[2];
    }
    if(mainexp >= levelupexp[2] && mainlevel < 4){
        mainlevel = 4;
        mainexp -= levelupexp[2];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[3];
    }
    if(mainexp >= levelupexp[3] && mainlevel < 5){
        mainlevel = 5;
        mainexp -= levelupexp[3];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[4];
        helmlist.push(eisenhelm);
        armorlist.push(eisenarmor);
        shildlist.push(eisenschild);
        weaponlist.push(eisenschwert);
        bootslist.push(eisenschuhe);
    }
    if(mainexp >= levelupexp[4] && mainlevel < 6){
        mainlevel = 6;
        mainexp -= levelupexp[4];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[5];
    }
    if(mainexp >= levelupexp[5] && mainlevel < 7){
        mainlevel = 7;
        mainexp -= levelupexp[5];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        mainspd += 5;
        upexp = levelupexp[6];
    }
    if(mainexp >= levelupexp[6] && mainlevel < 8){
        mainlevel = 8;
        mainexp -= levelupexp[6];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[7];
    }
    if(mainexp >= levelupexp[7] && mainlevel < 9){
        mainlevel = 9;
        mainexp -= levelupexp[7];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[8];
    }
    if(mainexp >= levelupexp[8] && mainlevel < 10){
        mainlevel = 10;
        mainexp -= levelupexp[8];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        mainspd += 5;
        upexp = levelupexp[9];
        helmlist.push(silberhelm);
        armorlist.push(silberarmor);
        shildlist.push(silberschild);
        weaponlist.push(silberschwert);
        bootslist.push(silberschuhe);
    }
    if(mainexp >= levelupexp[9] && mainlevel < 11){
        mainlevel = 11;
        mainexp -= levelupexp[9];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[10];
    }
    if(mainexp >= levelupexp[10] && mainlevel < 12){
        mainlevel = 12;
        mainexp -= levelupexp[10];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[11];
    }
    if(mainexp >= levelupexp[11] && mainlevel < 13){
        mainlevel = 13;
        mainexp -= levelupexp[11];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[12];
    }
    if(mainexp >= levelupexp[12] && mainlevel < 14){
        mainlevel = 14;
        mainexp -= levelupexp[12];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[13];
    }
    if(mainexp >= levelupexp[13] && mainlevel < 15){
        mainlevel = 15;
        mainexp -= levelupexp[13];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        mainspd += 5;
        upexp = levelupexp[14];
        helmlist.push(goldhelm);
        armorlist.push(goldarmor);
        shildlist.push(goldschild);
        weaponlist.push(goldschwert);
        bootslist.push(goldschuhe);
    }
    if(mainexp >= levelupexp[14] && mainlevel < 16){
        mainlevel = 16;
        mainexp -= levelupexp[14];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[15];
    }
    if(mainexp >= levelupexp[15] && mainlevel < 17){
        mainlevel = 17;
        mainexp -= levelupexp[15];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[16];
    }
    if(mainexp >= levelupexp[16] && mainlevel < 18){
        mainlevel = 18;
        mainexp -= levelupexp[16];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[17];
    }
    if(mainexp >= levelupexp[17] && mainlevel < 19){
        mainlevel = 19;
        mainexp -= levelupexp[17];
        mainatk++;
        maindef++;
        mainhp += 5;
        maxhp += 5;
        upexp = levelupexp[18];
    }
    if(mainexp >= levelupexp[18] && mainlevel < 20){
        mainlevel = 20;
        mainexp -= levelupexp[18];
        mainatk++;
        maindef++;
        mainhp += 10;
        maxhp += 10;
        mainspd += 10;
        upexp = "Max";
    }
}

/*###########################################################
#############################################################
            Fügt Items in die Itemliste ein (Wird später evtl. auf nur eine Klasse beschränkt!)
#############################################################
#############################################################*/

function itemscreate(){

class Helm{
    constructor(name, wert, typ){
        this.name = name;
        this.wert = wert;
        this.typ = typ;
    }
}
lederhelm = new Helm("Lederhelm", 10 , "slot1");
helmlist.push(lederhelm);
eisenhelm = new Helm("Eisenhelm", 20, "slot1");
silberhelm = new Helm("Silberhelm", 30, "slot1");
goldhelm = new Helm("Goldhelm", 40, "slot1");


class Armor{
    constructor(name, wert, typ){
        this.name = name;
        this.wert = wert;
        this.typ = typ;
    }
}

lederarmor = new Armor("Lederrüstung", 10, "slot2");
armorlist.push(lederarmor);
eisenarmor = new Armor("Eisenrüstung", 20, "slot2");
silberarmor = new Armor("Silberrüstung", 30, "slot2");
goldarmor = new Armor("Goldrüstung", 40, "slot2");

class Schild{
    constructor(name, wert, typ){
        this.name = name;
        this.wert = wert;
        this.typ = typ;
    }
}

lederschild = new Schild("Lederschild", 10, "slot3");
shildlist.push(lederschild);
eisenschild = new Schild("Eisenschild", 20, "slot3");
silberschild = new Schild("Silberschild", 30, "slot3");
goldschild = new Schild("Goldschild", 40, "slot3");

class Boots{
    constructor(name, wert, typ){
        this.name = name;
        this.wert = wert;
        this.typ = typ;
    }
}
    lederschuhe = new Boots("Lederschuhe", 5, "slot4");
    bootslist.push(lederschuhe);
    eisenschuhe = new Boots("Eisenschuhe", 10, "slot4");
    silberschuhe = new Boots("Silberschuhe", 15, "slot4");
    goldschuhe = new Boots("Goldschuhe", 20, "slot4");

    class Waffen{
        constructor(name, wert, typ){
            this.name = name;
            this.wert = wert;
            this.typ = typ;
        }
    }
    holzschwert = new Waffen("Holzschwert", 10, "slot5");
    weaponlist.push(holzschwert);
    eisenschwert = new Waffen("Eisenschwert", 20, "slot5");
    silberschwert = new Waffen("Silberschwert", 30, "slot5");
    goldschwert = new Waffen("Goldschwert", 40, "slot5");
}

    class Gold{
        constructor(name, wert, typ){
            this.name = name;
            this.wert = wert;
            this.typ = typ;
        }
    }
    goldcoin = new Gold("Goldmünze", 1, "slot6");
    goldlist.push(goldcoin);

/*###########################################################
#############################################################
            Startet das Spiel
#############################################################
#############################################################*/

function startegame(){
    gamestartet = true;
    startbutton = document.getElementById("startbutton");
    startbutton.parentNode.removeChild(startbutton);
    buttonhandler1 = document.getElementById("buttonhandler1");
    buttonhandler2 = document.getElementById("buttonhandler2"); 
    buttonhandler3 = document.getElementById("buttonhandler3");
    
    cardseffekt = document.getElementsByClassName("cards");
    cardseffekt[0].style.display = "inline-block";
    cardseffekt[1].style.display = "inline-block";
    cardseffekt[2].style.display = "inline-block";
    
    object1 = document.createElement("div");
    object2 = document.createElement("div");
    object3 = document.createElement("div");

    wertobject1 = document.createElement("div");
    wertobject2 = document.createElement("div");
    wertobject3 = document.createElement("div");

    typobject1 = document.createElement("div");
    typobject2 = document.createElement("div");
    typobject3 = document.createElement("div");

    randomitem = Math.floor((Math.random()*itemlist.length)+0);
    item1 = itemlist[randomitem];
    itemlist[randomitem] = "z";
    itemlist.sort();
    itemlist.pop(1);

    randomitem = Math.floor((Math.random()*itemlist.length)+0);
    item2 = itemlist[randomitem];
    itemlist[randomitem] = "z";
    itemlist.sort();
    itemlist.pop(1);

    randomitem = Math.floor((Math.random()*itemlist.length)+0);
    item3 = itemlist[randomitem];
    itemlist[randomitem] = "z";
    itemlist.sort();
    itemlist.pop(1);

    itemlist.push(item1, item2, item3);

    object1.innerHTML = item1[0].name;
    object2.innerHTML = item2[0].name;
    object3.innerHTML = item3[0].name;

    wertobject1.innerHTML = item1[0].wert;
    wertobject2.innerHTML = item2[0].wert;
    wertobject3.innerHTML = item3[0].wert;

    typobject1.innerHTML = item1[0].typ;
    typobject2.innerHTML = item2[0].typ;
    typobject3.innerHTML = item3[0].typ;

    object1.classList.add("kartenoptik");
    object2.classList.add("kartenoptik");
    object3.classList.add("kartenoptik");

    buttonhandler1.addEventListener("click", itemchanger);
    buttonhandler2.addEventListener("click", itemchanger);
    buttonhandler3.addEventListener("click", itemchanger);

    buttonhandler1.appendChild(object1);
    buttonhandler2.appendChild(object2);
    buttonhandler3.appendChild(object3);

    buttonhandler1.appendChild(wertobject1);
    buttonhandler2.appendChild(wertobject2);
    buttonhandler3.appendChild(wertobject3);

    buttonhandler1.appendChild(typobject1);
    buttonhandler2.appendChild(typobject2);
    buttonhandler3.appendChild(typobject3);
}

/*###########################################################
#############################################################
            Prototyp für die Deckwechler funktion
#############################################################
#############################################################*/

function cardsdropper(){
    randomdeck = Math.floor((Math.random()*alldecks.length)+0);
    drewdeck = alldecks[randomdeck];

    randomlist = Math.floor((Math.random()*drewdeck.length)+0);
    drewlist = drewdeck[randomlist];

    randomcard = Math.floor((Math.random()*drewlist.length)+0);
    drewcard = drewlist[randomlist];

    console.log(drewcard);

    alldecks[randomdeck] = "z";
    alldecks.sort();
    alldecks.pop(1);

    alldecks.push(drewdeck);
}

/*###########################################################
#############################################################
            Ändert die Items auf dem Feld (WIRD SPÄTER ENTFERNT!)
#############################################################
#############################################################*/

function tester(){
    randomitem = Math.floor((Math.random()*itemlist.length)+0);
    item1 = itemlist[randomitem];
    itemlist[randomitem] = "z";
    itemlist.sort();
    itemlist.pop(1);

    randomitem = Math.floor((Math.random()*itemlist.length)+0);
    item2 = itemlist[randomitem];
    itemlist[randomitem] = "z";
    itemlist.sort();
    itemlist.pop(1);

    randomitem = Math.floor((Math.random()*itemlist.length)+0);
    item3 = itemlist[randomitem];
    itemlist[randomitem] = "z";
    itemlist.sort();
    itemlist.pop(1);

    itemlist.push(item1, item2, item3);

    randomitem1 = Math.floor((Math.random()*item1.length)+0);
    randomitem2 = Math.floor((Math.random()*item2.length)+0);
    randomitem3 = Math.floor((Math.random()*item3.length)+0);

    object1.innerHTML = item1[randomitem1].name;
    object2.innerHTML = item2[randomitem2].name;
    object3.innerHTML = item3[randomitem3].name;

    wertobject1.innerHTML = item1[randomitem1].wert;
    wertobject2.innerHTML = item2[randomitem2].wert;
    wertobject3.innerHTML = item3[randomitem3].wert;

    typobject1.innerHTML = item1[randomitem1].typ;
    typobject2.innerHTML = item2[randomitem2].typ;
    typobject3.innerHTML = item3[randomitem3].typ;
}

/*###########################################################
#############################################################
            Ändert die Items im Inventar
#############################################################
#############################################################*/

// WICHTIG ES MUSS NOCH ERWEITERT WERDEN DASS ANDERE DECKS ERSCHEINEN NACHDEM ETWAS GEWÄHLT WURDE!
function itemchanger(){
    if(this.childNodes[2].innerHTML == "slot1"){
        slot1[1] = this.childNodes[1].innerHTML; //Helmwert
        slot1[0] = this.childNodes[0].innerHTML;
    }   else if(this.childNodes[2].innerHTML == "slot2"){
            slot2[1] = this.childNodes[1].innerHTML; //Rüstungwert
            slot2[0] = this.childNodes[0].innerHTML;
    }          else if(this.childNodes[2].innerHTML == "slot3"){
                slot3[1] = this.childNodes[1].innerHTML; //Schildwert
                slot3[0] = this.childNodes[0].innerHTML;
    }             else if(this.childNodes[2].innerHTML == "slot4"){
                    slot4[1] = this.childNodes[1].innerHTML; //Schuhewert
                    slot4[0] = this.childNodes[0].innerHTML;
    }                  else if(this.childNodes[2].innerHTML == "slot5"){
                        slot5[1] = this.childNodes[1].innerHTML; //Waffewert
                        slot5[0] = this.childNodes[0].innerHTML;
    }                       else if(this.childNodes[2].innerHTML == "slot6"){
                                slot6[1] += Number(this.childNodes[1].innerHTML); //Goldwert
    }else {
        console.log("Hierbei handelt es sich um kein Item");
    }
}


/*###########################################################
#############################################################
            Setzt das Spiel zurück
#############################################################
#############################################################*/

function neustart(){
    if(gamestartet){
    gamestartet = false;
    slot1 = ["leer", 0,"slot1"]; //Helm
    slot2 = ["leer", 0,"slot2"]; //Rüstung
    slot3 = ["leer", 0,"slot3"]; //Schild
    slot4 = ["leer", 0,"slot4"]; //Schuhe
    slot5 = ["leer", 0,"slot5"]; //Waffe
    slot6 = ["leer", 0,"slot6"]; //Gold
    mainlevel = 1;
    mainexp = 0;
    upexp = 2;
    mainhp = 100;
    maxhp = 100;
    mainatk = 20;
    maindef = 10;
    mainspd = 50;
    maingold = 0;

    buttonhandler = document.getElementById("buttonhandler");
    buttonhandler.appendChild(startbutton);

    cardseffekt[0].style.display = "none";
    cardseffekt[1].style.display = "none";
    cardseffekt[2].style.display = "none";

    buttonhandler1.innerHTML = "";
    buttonhandler2.innerHTML = "";
    buttonhandler3.innerHTML = "";

    buttonhandler1.removeEventListener("click", Monsterfight);
    buttonhandler2.removeEventListener("click", Monsterfight);
    buttonhandler3.removeEventListener("click", Monsterfight);

    // Setzt die Itemliste zurück.
    armorlist = [lederarmor];
    helmlist = [lederhelm];
    shildlist = [lederschild];
    bootslist = [lederschuhe];
    weaponlist = [holzschwert];
    itemlist = [armorlist, helmlist, shildlist, bootslist, weaponlist, goldlist];

    }else{
        console.log("Game ist nicht gestartet!");
    }
}
/*###########################################################
#############################################################
            Erstellt die Klasse Monster
#############################################################
#############################################################*/
class Monster{
    constructor(mobname, mobhp, mobdef, mobspd, mobatk, mobexp, mobdrop){
        this.mobname = mobname;
        this.mobhp = mobhp;
        this.mobdef = mobdef;
        this.mobspd = mobspd;
        this.mobatk = mobatk;
        this.mobexp = mobexp;
        this.mobdrop = mobdrop;
    }
}//                                     HP  De  S  At Ex Drop
klbear = new Monster("Kleiner Bär",     40, 10, 30, 20, 1, 0);
bear = new Monster("Bär",               50, 12, 30, 30, 2, 0);
grbear = new Monster("Großer Bär",      50, 15, 30, 35, 3, 0);
klwolf = new Monster("Kleiner Wolf",    30, 05, 50, 20, 1, 0);
wolf = new Monster("Wolf",              30, 10, 60, 20, 2, 0);
grwolf = new Monster("Großer Wolf",     40, 10, 60, 30, 2, 0);
klboar = new Monster("Kleines Schwein", 60, 10, 20, 20, 1, 0);
boar = new Monster("Wildschwein",       60, 14, 20, 20, 1, 0);
grboar = new Monster("Großer Schwein",  80, 14, 30, 20, 2, 0);
testi = new Monster("Bot",             500, 00, 00, 00, 0, 0);
monsterdecks.push(klbear, bear, grbear, klwolf, wolf, grwolf, klboar, boar, grboar,testi);

function monsterspawn(){
    if(gamestartet){
    randommob = Math.floor((Math.random()*monsterdecks.length)+0);
    mob1 = monsterdecks[randommob];

    randommob = Math.floor((Math.random()*monsterdecks.length)+0);
    mob2 = monsterdecks[randommob];

    randommob = Math.floor((Math.random()*monsterdecks.length)+0);
    mob3 = monsterdecks[randommob];

    buttonhandler1.innerHTML = "";
    buttonhandler2.innerHTML = "";
    buttonhandler3.innerHTML = "";

    buttonhandler1.addEventListener("click", Monsterfight);
    buttonhandler2.addEventListener("click", Monsterfight);
    buttonhandler3.addEventListener("click", Monsterfight);

    var mobsize = Object.keys(mob1).length;
    for(var i = 0; i < mobsize; i++){
        var div = document.createElement("div");
        div.innerHTML = Object.values(mob1)[i];
        buttonhandler1.appendChild(div);
    }
    var mobsize = Object.keys(mob2).length;
    for(var i = 0; i < mobsize; i++){
        var div = document.createElement("div");
        div.innerHTML = Object.values(mob2)[i];
        buttonhandler2.appendChild(div);
    }
    var mobsize = Object.keys(mob3).length;
    for(var i = 0; i < mobsize; i++){
        var div = document.createElement("div");
        //div.innerHTML = Object.keys(mob3)[i] + ": " + Object.values(mob3)[i];
        div.innerHTML = Object.values(mob3)[i];
        buttonhandler3.appendChild(div);
        //console.log(buttonhandler3.childNodes[i].innerHTML);
    }
}else{
    console.log("Das Spiel hat noch nicht gestartet (Monsterspawner)");
}
}

function Monsterfight(){
    var mobhp =   Number(this.childNodes[1].innerHTML); // HP
    var mobdef =  Number(this.childNodes[2].innerHTML); // DEF
    var mobspd =  Number(this.childNodes[3].innerHTML); // SPD
    var mobatk =  Number(this.childNodes[4].innerHTML); // ATK
    var mobexp =  Number(this.childNodes[5].innerHTML); // EXP
    var mobdrop = this.childNodes[6].innerHTML; // Drop

    var mobspdmax = 0;
    var playerspdmax = 0;

    var playerlife = true;
    var moblife = true;
    var fightend = false;

    // Hier wird der Dmg kalkuliert
    var mobdmg = mobatk - (maindef + Number(slot1[1]) + Number(slot2[1]) + Number(slot3[1]));
    var dmg = (mainatk + Number(slot5[1])) - mobdef;
    if(mobdmg <= 0){
        mobdmg = 1;
    }
    if(dmg <= 0){
        dmg = 1;
    }

    while(!fightend){
    if(playerlife && moblife && mainhp > 0 && mobhp > 0){
        if(playerspdmax >= 1000){
            mobhp -= dmg; //Das Monster nimmt Dmg
            playerspdmax -= 1000;
            if(mobhp <= 0){
                moblife = false;
                mainexp += mobexp;
                console.log("Das Monster ist tot");
            }
        } else if(mobspdmax >= 1000){
            mainhp -= mobdmg; //Der Spieler nimmt Dmg
            mobspdmax -= 1000;
            if(mainhp <= 0){
                playerlife = false;
                console.log("Der Spieler ist tot");
            }
        } else{
            playerspdmax += mainspd + Number(slot4[1]);
            mobspdmax += mobspd;
        }
    }else{
        this.childNodes[1].innerHTML = mobhp;
        fightend = true;
        console.log("Game Over");
    }
}

}

/*###########################################################
#############################################################
            Ist erstmal nur zum teste, gibt derzeit Exp +
#############################################################
#############################################################*/
function expplus(){
    mainexp += 20000000;
    console.log(item1);
    console.log(item2);
    console.log(item3);

    console.table(alldecks);
    console.table(itemlist);
    console.log(monsterdecks);
}
