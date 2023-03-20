import sideBar from "./SideBar.js";
import home from "./home.js";
import loading from "./loading.js";



export default class ingredient {



    async getIngredientDate() {
        new loading().startLoad()

        let api = await fetch(" https://www.themealdb.com/api/json/v1/1/list.php?i=list");
        let response = await api.json();
        // console.log(response.meals);
        AOS.init();
        new sideBar().closeSideBar(0);
        new loading().stopLoad();
        console.log("Hello from getIngredientDate", response.meals.slice(0, 20));
        this.displayIngredient(response.meals.slice(0, 20))

    }




    displayIngredient(data) {
        let Ingredient = ``;

        for (let i = 0; i < data.length; i++) {

            Ingredient += `
            <div class="col-md-3 ">
            <div class="homeMeal text-center">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
               
                    <h3>${data[i].strIngredient}</h3>
                    <p>${(data[i].strDescription).split(" ").slice(0, 20).join(" ")}</p>
              
            </div>
        </div>
            
            `

        }
        document.querySelector("#rowHomeMeals").innerHTML = Ingredient;
        this.getSpecificIngredient(data)
    }

    async filterByIngredient(Ingredient) {


        new loading().startLoad()

        let api = await fetch(` https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredient}`);
        let response = await api.json();
        // console.log(response.meals);
        AOS.init();
        new sideBar().closeSideBar();
        new loading().stopLoad();

        console.log("Hello from filterByIngredient", response.meals, Ingredient);
        new home().displayHomeMeals(response.meals)
    }




    getSpecificIngredient(data) {
        let getSpecificCategory = document.querySelectorAll(".homeMeal");
        for (let i = 0; i < getSpecificCategory.length; i++) {
            getSpecificCategory[i].addEventListener("click", () => {
                console.log(data[i].strIngredient);
                this.filterByIngredient(data[i].strIngredient)
            })

        }
    }




}