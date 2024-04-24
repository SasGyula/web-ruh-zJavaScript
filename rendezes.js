export function nevRendezes(lista, irany){
    lista.sort(function(e1, e2){
        let eredmeny = 1
        if(e1.nev < e2.nev){
            eredmeny = -1
        }
        return eredmeny*irany
    })
    return lista
}
export function arRendezes(lista, irany) {
    lista.sort(function (e1,e2) {
        return (e1.ar - e2.ar)*irany;
    })
    return lista;
}
export function szures(lista, keresoSzoveg){
    const szurtLISTA = lista.filter(function (ember) {
    return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtLISTA;

}