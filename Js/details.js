import loading from "./loading.js";


export default class details {




    async getDetails(id) {
        new loading().startLoad()
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        let response = await api.json();
        console.log(response.meals);
        new loading().stopLoad();
        this.displayDetails(response.meals);
        console.log(response.meals);
    }







    displayDetails(detail) {


        let strIngredient = ``;
        for (let i = 1; i <= 20; i++) {

            if (detail[0][`strIngredient${i}`]) {
                strIngredient += `  <li class="alert alert-info m-2 p-1">
                ${detail[0][`strMeasure${i}`]}
                ${detail[0][`strIngredient${i}`]}
                
           
        </li>
`

            }


        }


        let tags = ``;



        if (!detail[0].strTags) {
            tags = ``;
        }
        else {
            let tagsArr = detail[0].strTags.split(",");
            for (let i = 0; i < tagsArr.length; i++) {

                tags += ` <li class="alert alert-danger m-2 p-1">
                ${tagsArr[i]}
                      </li>`

            }


        }



        let details = `  <div class="col-md-4 ">
        <img src="${detail[0].strMealThumb}" alt="" class="w-100 rounded-2">
        <h2>${detail[0].strMeal}</h2>
    </div>
    
    <div class="col-md-8">
    <h2>Instructions</h2>
    <p>${detail[0].strInstructions}</p>

    <h3>
        <span class="fw-bold">Area :</span>
        ${detail[0].strArea}
    </h3>

    <h3>
        <span class="fw-bold">Category : </span>
        ${detail[0].strCategory}
    </h3>

    <h3>
        <span>
            Recipes :
        </span>
    </h3>

    <ul class=" list-unstyled d-flex flex-wrap g-3">
        ${strIngredient}
       
    </ul>

    <h3>Tags :</h3>

    <ul class=" list-unstyled d-flex flex-wrap g-3">
       ${tags}
    </ul>


    <a href="${detail[0].strSource}" target="_blank"> <button class="btn btn-success" >Source</button></a>
    <a href="${detail[0].strYoutube}" target="_blank"> <button class="btn btn-danger" >Youtube</button></a>
</div>
     
    
    `

        document.querySelector("#rowHomeMeals").innerHTML = details;
    }


}