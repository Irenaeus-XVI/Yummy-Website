import area from "./area.js";
import category from "./category.js";
import contact from "./contact.js";
import ingredient from "./ingredient.js";
import search from "./search.js";



export default class sideBar {

    constructor() {
        this.getSideBar()
        this.showSearchInputs()

    }


    getSideBar() {
        $("#closeSideBar").click(() => {
            // console.log("clicked");
            let sideBarLeft = $(".sidBar").css("left")
            if (sideBarLeft == "0px") {
                this.closeSideBar()

                $(".links li ").map((x) => {
                    $(".links li ").eq(x).animate({ top: 300 }, (5 + x) * 100)

                })
            }
            else {
                this.openSideBar()
                $(".links li ").map((x) => {
                    $(".links li ").eq(x).animate({ top: 0 }, (5 + x) * 100)

                })
            }
            // AOS.init();
        })

    }


    openSideBar() {

        $("#closeSideBar").removeClass("fa-solid fa-bars fa-2x ")
        $("#closeSideBar").addClass("fa-solid open-close-icon  fa-x fa-2x")
        let sideBar = $(".sidBar")
        let rightSideBarWidth = $(".rightSidBar").width()
        // console.log(rightSideBarWidth);
        let sideBarWidth = $(".sidBar").innerHeight();
        sideBar.animate({ left: (0) }, 500);

    };



    closeSideBar() {
        let sideBar = $(".sidBar")
        let rightSideBarWidth = $(".rightSidBar").width()
        $("#closeSideBar").removeClass("fa-solid open-close-icon  fa-x fa-2x  ")
        $("#closeSideBar").addClass("fa-solid fa-bars fa-2x ")

        let sideBarWidth = $(".sidBar").width();

        sideBar.animate({ left: -(sideBarWidth - rightSideBarWidth) }, 500);

    }



    showSearchInputs() {

        let searchLink = document.querySelector("#searchLink");
        let categorylink = document.querySelector("#categorylink");
        let ingredientsLink = document.querySelector("#ingredientsLink");
        let areaLink = document.querySelector("#areaLink");
        let contactlink = document.querySelector("#contactlink");
        searchLink.addEventListener("click", () => {
            this.closeSideBar()

            new search().displayInputs()

        })
        categorylink.addEventListener("click", () => {
            this.closeSideBar()

            new category().getCategory()

        })

        areaLink.addEventListener("click", () => {
            this.closeSideBar()

            new area().getAreaData()

        })


        ingredientsLink.addEventListener("click", () => {
            this.closeSideBar()

            new ingredient().getIngredientDate()

        })
        contactlink.addEventListener("click", () => {
            this.closeSideBar()
            // new ingredient().getIngredientDate()

        })
        contactlink.addEventListener("click", () => {
            this.closeSideBar()

            // new ingredient().getIngredientDate()
            new contact()

        })




    }
}