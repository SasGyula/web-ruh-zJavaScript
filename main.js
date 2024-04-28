import { cipokLISTA } from "./adat.js";
import { megjelenit ,kartyaRendezes } from "./kartyaMegjelenit.js";
import { nevRendezes , arRendezes, szures} from "./rendezes.js";
import { torol, tablazat } from "./fuggvenyek.js";
const KOSAR = []

let nevIrany = 1;
let arIrany = 1 ;
function init(lista){
    megjelenit(kartyaRendezes(lista))
    kosarEsemeny()

}
nevRendez()
arRendez()
szuresEsemeny()



function nevRendez(){
    const nevRendezELEM = $("#nev")
    nevRendezELEM.on("click", function(){
        const rLista = nevRendezes(cipokLISTA, nevIrany)
        init(rLista)
        nevIrany *= (-1)
    })
}
function arRendez(){
    const arELEM = $("#ar")
    arELEM.on("click", function(){
        const arLista = arRendezes(cipokLISTA, arIrany)
        init(arLista)
        arIrany *= (-1)
    })
}
function szuresEsemeny(){
    const keresoElem=$("#szures")
    keresoElem.on("keyup", function(){
        let keresoSzoveg = keresoElem.val()
        const szLISTA = szures(cipokLISTA,keresoSzoveg);
        console.log(szLISTA)
        init(szLISTA);
})
}
const kosarELEM = $("#kosar")
function kosarEsemeny(){
    const gombELEM = $("#termekek button")
    gombELEM.on("click", function(event){
        const ID = event.target.id
        KOSAR.push(cipokLISTA[ID])
        kosarELEM.html(tablazat(KOSAR))
        torolEsemeny()
    })
}
function torolEsemeny(){
    const torolGombELEM = $(".torol")
    torolGombELEM.on("click", function(event){
        const ID = event.target.id
        const tLISTA = torol(KOSAR, ID)
        kosarELEM.html(tablazat(tLISTA))
    } )
}

init(cipokLISTA)

