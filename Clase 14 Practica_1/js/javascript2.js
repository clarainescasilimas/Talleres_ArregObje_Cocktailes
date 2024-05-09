let url = `https://jsonplaceholder.typicode.com/users`

fetch(url)
    .then(res => res.json())
    .then(object => {
        
        let html = `<div class="row m-5">`
        for (let datos of object) {
            
            html += `<div class="col-4 border">
                        <h4> 
                            <b> ${datos.name} </b> 
                        </h4>
                        <p> 
                            ${datos.username} 
                        </p>
                        <p> 
                            <a href="${datos.website}"> 
                                ${datos.website} 
                            </a> 
                        </p>
                        <p> 
                            ${datos.address.city} 
                        </p>
                        <p> 
                            ${datos.address.geo.lat} 
                        </p>
                     </div>`
            //html = html + ` B `
        }

        html += `</div>`

        document.getElementById("charContent").innerHTML = html

    })
