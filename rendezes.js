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
