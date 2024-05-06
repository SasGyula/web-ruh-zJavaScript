export function torol(lista, id) {
    lista.splice(id, 1);
    return lista;
}

export function tablazat(lista){
      let txt = "<h3>A kosár tartalma</h3>"
      txt += "<table class='table table-striped'>";
      txt +=
        "<thead><tr><th>Név</th><th>Ár</th><th></th></tr></thead>";
      txt += "<tbody>";
      for(let i = 0; i<lista.length; i++){
        txt += `<tr>`;
        txt += `<td>${lista[i].nev} ${lista[i].db}db</td>`;
        txt += `<td>${lista[i].ar} ft</td>`;
        txt += `<td><img src="${lista[i].kep}" class="kosarKep"></td>`;
        txt += `<td class="torol" id=${i}>🗑️</td>`;
        txt += `<tr>`;
      }
      txt += "</tbody></table>";
      
      return txt
}