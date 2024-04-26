export function tablazatOsszealit(lista, ID){
    let txt = "<table class='table table-striped'>";
    txt +=
      "<thead><tr><th>Név</th><th>Ár</th><th></th></tr></thead>";
    txt += "<tbody>";
    lista.forEach((elem,index) => {
      txt += `<tr>`;
      for (const kulcs in elem) {
        txt += `<td>${elem[kulcs]}</td>`;
      }
      txt += `<td class="torol" id=${index}>🗑️</td>`;
      txt += `</tr>`;
    });
    txt += "</tbody></table>";
    return txt;
}
export function megjelenit(){

}

export function kosarMennyiseg(lista){
    let txt = `<p>Termékek száma: ${lista.length} </p>`
    return txt
}
export function torol(lista, id) {
    lista.splice(id, 1);
    return lista;
}