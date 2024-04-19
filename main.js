import { cipokLISTA } from "./adat.js";
import { megjelenit ,kartyaRendezes } from "./kartyaMegjelenit.js";
import { nevRendezes} from "./rendezes.js";

let irany = 1;

function init(lista){
    megjelenit(kartyaRendezes(lista))
    nevRendez()
}

init(cipokLISTA)
function nevRendez(){
    const nevRendezELEM = $("#nev")
    nevRendezELEM.on("click", function(){
        const rLista = nevRendezes(cipokLISTA, irany)
        init(rLista)
        irany *= -1
    })
}
