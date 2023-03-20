import sideBar from "./SideBar.js";
import home from "./home.js";
import loading from "./loading.js";


export default class category {

    async getCategory() {
        new loading().startLoad()

        let api = await fetch(" https://www.themealdb.com/api/json/v1/1/categories.php");
        let response = await api.json();
        // console.log(response.meals);

        new sideBar().closeSideBar();
        new loading().stopLoad();

        // console.log("Hello from Home", response.categories);
        this.displayCategories(response.categories)

    }




    displayCategories(data) {
        let categories = ``

        for (let i = 0; i < data.length; i++) {
            categories += `<div class="col-md-3">
            <div class="homeMeal position-relative overflow-hidden">
                <img src="${data[i].strCategoryThumb}" alt="" class="w-100 rounded-2 ">
                <div class="homeMealLayer  text-center rounded-2 text-black">
                    <h3>${data[i].strCategory}</h3>
                    <p>${(data[i].strCategoryDescription).split(" ").slice(0, 20).join(" ")}</p>
                </div>
            </div>
        </div>`
        }

        // console.log((data[0].strCategoryDescription).split(" ").slice(0, 20).join(" "));
        document.querySelector("#rowHomeMeals").innerHTML = categories;
        this.getSpecificCategory(data)
    }








    async filterByCategory(category) {

        new loading().startLoad()
        // console.log("up");
        let api = await fetch(` https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        let response = await api.json();
        // console.log(response.meals);

        new sideBar().closeSideBar();
        new loading().stopLoad();

        // console.log(response.meals);
        new home().displayHomeMeals(response.meals.slice(0, 20))


    }





    getSpecificCategory(data) {
        let getSpecificCategory = document.querySelectorAll(".homeMeal");
        for (let i = 0; i < getSpecificCategory.length; i++) {
            getSpecificCategory[i].addEventListener("click", () => {
                // console.log(data[i].strCategory);
                this.filterByCategory(data[i].strCategory)
            })

        }
    }


}