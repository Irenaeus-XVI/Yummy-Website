
import sideBar from "./SideBar.js";
import details from "./details.js";
import loading from "./loading.js";
export default class home {

    constructor() {



    }



    async getDate() {
        new loading().startLoad()
        console.log("up");
        let api = await fetch(" https://www.themealdb.com/api/json/v1/1/search.php?s=");
        let response = await api.json();
        // console.log(response.meals);
        // AOS.init();
        new sideBar().closeSideBar(0);
        new loading().stopLoad();
        this.displayHomeMeals(response.meals);
        console.log("Hello from Home", response.meals);


    }




    displayHomeMeals(data) {
        let meals = ``
        for (let i = 0; i < data.length; i++) {
            meals += `<div class="col-md-3 ">
            <div class="homeMeal position-relative overflow-hidden">
                <img src="${data[i].strMealThumb}" alt="" class="w-100 rounded-2 ">
                <div class="homeMealLayer d-flex  align-items-center rounded-2 text-black">
                    <h3>${data[i].strMeal}</h3>
                </div>
            </div>
        </div>`

        }


        document.querySelector("#rowHomeMeals").innerHTML = meals;
        // console.log("done");
        this.sendId(data)

    }





    sendId(data) {
        let meal = document.querySelectorAll(".homeMeal");
        for (let i = 0; i < data.length; i++) {
            meal[i].addEventListener("click", function () {

                new details().getDetails(data[i].idMeal);
                console.log(data[i].idMeal);

            })





        }

    }










}