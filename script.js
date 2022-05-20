window.addEventListener('click',generate);
window.addEventListener('click',update);
var sentences = [
    "Nejhorší jsou $nP za $n7p",
    "$n, vlástník krámku s $n7pP",
    "$n to je hazl. To ví i $n",
    "A $n se sešel s $n7p",
    "Máš na to tejden. Pokud to nedohraješ, utrhnu ti $n4p, dám ti $n4p a pujdeš sedět za konzumaci $n2p",
    "Pane $n to vás někdo chytil za $n4p",
    "Padají $nP na $n4p. Za to může $n.",
    "Pane $n, díváte se rád na $n4p z devadesátek?",
  
    "No jo, jsou zase na kafi ale $n4p $v nedokážou.",
    "Pane $n, proč se chcete $v . To by pan $n nebyl pyšný.",
    "To není možný. Jdu vás všechny $v pomocí $n2p.",
"Pane $n, vy už jste skoro jako $n. Stačilo se jen $v s $n7p.",
"Takže pane $n připravte si prezentaci na téma: \"Jak $v $n4p s $n7p bez použití $n2p\" ",
"Byly tu zvěsti o tom že jsem NPCéčko nebo snad $n. Mám pocit že to říkal $n. Takže ho nechám $v.",
"\"$v $n4p\" - to zní jako něco co by řekl $n."

];
//vlastní jméno  $n
var names = [
"Polák",
"Hric",
"Somr",
"Pytlík",
"Svoboda",
"Honomichl",
"Urban",
"Plic",
"Vituško",
"Černý",
"Svítek",
"Dziamko",
"Návštěva z Ukrajiny",
"Novosad",
"Pacanda",
"Pacovský",
"Binder",
"Boťa",//not plr
"Beneš",
"Pluhař",
"Štauber",
"David",
"Korzár",
"Pittr",
"Volf",
"Kučera",
"Mika",

"Mimoň",
"Čudlík",
"Server",
"Firewall", //plr

"Intel",
"Amd",

"Schwob",
"Koukol",
"Smitka",
"Kretén"

];
//vlastní jméno plurál $nP
var namesP = [

    "Poláci",
    "Hricové",
    "Somrové",
    "Pytlíkové",
    "Svobodové",
    "Honomichlové",
    "Urbanové",
    "Plicové",
    "Vituškové",
    "Černí",
    "Svítekové",
    "Dziamkové",
    "Návštěvy z Ukrajiny",
    "Novosadové",
    "Pacandové",
    "Pacovští",
    "Binderové",
    "Boťové",
    "Benešové",
    "Pluhařové",
    "Štauberové",
    "Davidové",
    "Korzárové",
    "Pittrové",
    "Volfové",
    "Kučerové",
    "Mikové",
    
    "Mimoni",
    "Čudlíci",
    "Servery",
    "Firewally",

    "Inteli",
    "Á m déčka",

    "Schwobové",
    "Koukolové",
    "Respirátory",
    "Smitkové"
    ,"Kreténi"

]
//podst. jméno 7. pád $n7p
var noun7p = [

    "cédečkem",
    "volantem",
    "hardiskem",
    "ramkou",
    "intelem",
    "á m déčkem",
    "časem",
    "respirátorem",
    "uchem",
    "koulí",
    "hlavou",
    "marihuanou",
    "konopí",
    "HDDčkamem",
    "filmem", 
    "počítačm",
    "frontou",
    "usb",
    "grafickou kartou" 
]
//podst. jméno 7. pád plurál $n7pP
var noun7pP = [

    
    "cédečky",
    "volanty",
    "hardisky",
    "ramkami",
    "intely",
    "á m déčkema",
    "časem",
    "respirátory",
    "uši",
    "koulemi",
    "hlavami",
    "marihuanami",
    "konopími",
    "HDDčkama",
    "filmy", 
    "počítačemi",
    "fronty",
    "usb",
    "grafickými kartami" 
]
//podstatné jméno s 4. pádem pp4
var noun4p = [

    "uši",
    "koule",
    "hlavu",
    "marihuanu",
    "konopí",
    "HDDčko",
    "filmy", 
    "počítače",
    "fronty",
    "usb",
    "grafickou kartu", 
    "prestiž"
]

var noun2p= [
    "cédečka",
    "volantu",
    "hardisku",
    "ramky",
    "intelu",
    "á m déčka",
    "času",
    "respirátou",
    "uší",
    "koulí",
    "hlavy",
    "marihuany",
    "konopí",
    "HDDčka",
    "filmů",
    "počítače",
    "fronty",
    "usb",
    "grafickoé karty", //in 2
    "prestiže"
]

var verb = [

    "zabít",
    "najít",
    "vyvrtat",
    "nakrájet",
    "postavit",
    "zajet",
    "udělat",
    "vyhlásit",
    "nahlásit",
    "podělat",
    "nahlásit",
    "zařvat",
    "pokazit",
    "nasadit",
    "napsat",
    "udeřit",


    
]


function generate(){
    var sel = document.getElementById("selA");
    sel = sel.value;
   
    var sentence = r(sentences);
    if(sel!="c"&&sel!="r"){
        sentence = sentences[sel];
    }
    if(sel == "c"){
        sentence = document.getElementById("cs").value;
    }
    console.log(sentence);
    var failSave = 0;
    while(sentence.includes("$")){
        failSave++; 
        sentence = sentence.replace("$n7pP",r(noun7pP));
        sentence = sentence.replace("$n7p",r(noun7p));
        sentence = sentence.replace("$n4p",r(noun4p));
        sentence = sentence.replace("$n2p",r(noun2p));
        sentence = sentence.replace("$nP",r(namesP));
      
        if(!(sentence.includes("$n7p")||sentence.includes("$n4p")||sentence.includes("$n2p")||sentence.includes("$nP"))){
            sentence = sentence.replace("$n",r(names));
        }
        sentence = sentence.replace("$v",r(verb));
        console.log(sentence);
        if(failSave>1000){
                
            

            var after_ =sentence.substring(
                sentence.indexOf("$") + 1, 
                sentence.lastIndexOf(" ")
            );
     
                  sentence = "{CANNOT PARSE: ILEGAL TOKEN ($"+after_+")}";
              
            break;
        }
       
        
    }

    document.getElementById("gen").innerHTML = sentence;
}
/*$n ,$nP ,$n2p, $n4p, $n7p, $n7pP, $v*/
function update(){
    var sel = document.getElementById("selA");
    sel = sel.value;
    if(sel == "c"){
        document.getElementById("cs").style.display = "block";
        document.getElementById("tut").style.display = "block";
    }
    else{
        document.getElementById("cs").style.display = "none";
        document.getElementById("tut").style.display = "none";
    }
}

function r(arr) {
    return  arr[Math.floor(Math.random() * arr.length)];
  }
