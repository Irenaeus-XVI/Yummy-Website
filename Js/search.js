import home from "./home.js";
import loading from "./loading.js";


export default class search {

    async getMealName(meal) {
        new loading().startLoad()
        let api = await fetch(` https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
        let response = await api.json();
        console.log(response.meals);
        new loading().stopLoad();
        response.meals ? new home().displayHomeMeals(response.meals) : new home().displayHomeMeals([]);

    }

    async getMealLetter(letter) {
        new loading().startLoad()
        let api = await fetch(` https://www.themealdb.com/api/json/v1/1/search.php?f=${letter ? letter : `a`}`);//default value if not found the letter 
        let response = await api.json();
        console.log(response.meals);
        new loading().stopLoad();
        response.meals ? new home().displayHomeMeals(response.meals) : new home().displayHomeMeals([]);

    }



    displayInputs() {
        let inputs = ` <div class="col-md-6">
        <input type="text" class="form-control bg-transparent text-white" id="searchByName"
            placeholder="Search By Name ">
    </div>
    <div class="col-md-6">
        <input type="text" class="form-control bg-transparent bg-transparent text-white" id="searchByChar"
            placeholder="Search Ny Letter" maxlength="1">

    </div>`

        document.querySelector("#rowSearch").innerHTML = inputs;
        console.log("hello from input search");
        this.getInputValue()
    }

    getInputValue() {
        document.querySelector("#rowHomeMeals").innerHTML = ``;

        let searchByName = document.querySelector("#searchByName");
        let searchByChar = document.querySelector("#searchByChar");

        searchByName.addEventListener("input", (event) => {
            this.getMealName(searchByName.value);
            console.log("in search value now ", searchByName.value);
        })

        searchByChar.addEventListener("input", (event) => {
            this.getMealLetter(searchByChar.value);
            console.log("in search value now ", searchByChar.value);
        })
    }
}