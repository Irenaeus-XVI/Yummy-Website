import sideBar from "./SideBar.js";
import home from "./home.js";
import loading from "./loading.js";



export default class area {



    async getAreaData() {
        new loading().startLoad()

        let api = await fetch(" https://www.themealdb.com/api/json/v1/1/list.php?a=list");
        let response = await api.json();
        // console.log(response.meals);

        new sideBar().closeSideBar(0);
        new loading().stopLoad();

        console.log("Hello from Area", response.meals);
        this.displayArea(response.meals);


    }




    displayArea(data) {
        let areas = ``;

        for (let i = 0; i < data.length; i++) {

            areas += `
            <div class="col-md-3 ">
            <div class="homeMeal text-center">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
               
                    <h3>${data[i].strArea}</h3>
              
            </div>
        </div>
            
            `

        }

        document.querySelector("#rowHomeMeals").innerHTML = areas;
        this.getSpecificArea(data)
    }



    async filterByCategory(area) {


        new loading().startLoad()

        let api = await fetch(` https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        let response = await api.json();
        // console.log(response.meals);

        new sideBar().closeSideBar();
        new loading().stopLoad();

        console.log("Hello from filterByCategory", response.meals);
        new home().displayHomeMeals(response.meals.slice(0, 20))
    }



    getSpecificArea(data) {

        let getSpecificArea = document.querySelectorAll(".homeMeal");

        for (let i = 0; i < getSpecificArea.length; i++) {
            getSpecificArea[i].addEventListener("click", () => {
                this.filterByCategory(data[i].strArea)
                console.log(data[i].strArea);
            })


        }
    }

}