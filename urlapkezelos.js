

export function ujAdat(){
    const ADATOK = [
        {
            nev: "",
            email:"",
            szSzam: 0,
            telSzam:0
        },
    ]
    const submitELEM= $("#submit")
    submitELEM.on("click", function(event){
        event.preventDefault();
        const nevElem = $("#nev")
        const emailElem = $("#email")
        const szamlaElem = $("#szSzam")
        const telElem = $("#telSzam")
        const validELEMEK=$(".valid-feedback")

        if (validELEMEK.eq(0).css("display")==="block" && validELEMEK.eq(1).css("display")==="block" && validELEMEK.eq(2).css("display")==="block" ) {
            ADATOK.nev = nevElem.val()
            ADATOK.email = emailElem.val()
            ADATOK.szSzam = Number(szamlaElem.val())
            ADATOK.telSzam = Number(telElem.val())
            console.log(ADATOK)
       }       
    })
}

