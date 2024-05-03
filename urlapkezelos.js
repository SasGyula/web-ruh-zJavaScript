

export function ujAdat(){
    const adatokELEM = $("#adatok")
    const nevElem = $("#nev")
    const emailElem = $("#email")
    const szamlaElem = $("#szSzam")
    const telElem = $("#telSzam")
    const submitELEM= $("#submit")
    const ADATOK = [
        {
            nev: "",
            email:"",
            szSzam: 0,
            telSzam:0
        },
    ]
    submitELEM.on("click", function(event){
        event.preventDefault();
        ADATOK.nev = nevElem.val()
        ADATOK.email = emailElem.val()
        ADATOK.szSzam = Number(szamlaElem.val())
        ADATOK.telSzam = Number(telElem.val())
        console.log(ADATOK)
    })
}

