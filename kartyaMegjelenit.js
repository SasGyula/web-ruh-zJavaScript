export function kartyaRendezes(lista){
    let txt = ""
    txt += `<div class ="row container-fluid">`
    for(let i = 0; i < lista.length; i++){
        txt += `<div class="card col-md-4">`
        txt += `<div class="card-header">${lista[i].nev}</div>`
        txt += `<div class="card-body"><img src="${lista[i].kep}"class="kepek" ></div>`
        txt += `<div class="card-footer">${lista[i].ar} ft</div>`
        txt += `<div><button id="${i}">Kosárba</button></div>`
        txt += `</div>`
    }
    txt += `</div>`
    return txt
}
export function megjelenit(txt) {
    const kartyaELEM = $("#termekek");
    kartyaELEM.html(txt);
  }