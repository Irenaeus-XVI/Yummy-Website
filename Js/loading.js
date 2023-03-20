export default class loading {

    constructor() {

    }
    



    startLoad(){
        $("window").ready(() => {
            $("#loader").removeClass("d-none");
            $("#loader").addClass("d-flex")
        })
    }



    stopLoad(){
        $("window").ready(() => {
            $("#loader").removeClass("d-flex");
            $("#loader").addClass("d-none")
        })
    }
}