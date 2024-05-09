let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

fetch(url)
    .then(res => res.json())
    .then(object => {
        
        let html = `<div class="row m-5">`
        for (let datos of object.drinks) {
            console.log(datos)
            html += `<div class="col-3 border">
                        <h4 class = "text-center"> 
                        <b> ${datos.strCategory} </b> 
                        <b> - </b> 
                        <b> ${datos.strGlass} </b> 
                        </h4>
                        <img class="img-fluid" src=${datos.strDrinkThumb}> 
                        <p class = "text-center">
                            ${datos.strInstructionsES} 
                        </p>
                        <p class = "text-center">
                            ${datos.strIngredient1} 
                        </p>
                        <p class = "text-center"> 
                            ${datos.strIngredient2} 
                        </p>
                        <p class = "text-center"> 
                            ${datos.strIngredient3} 
                        </p>
                        
                     </div>`
        }

        html += `</div>`

        document.getElementById("charContent").innerHTML = html

    }
)