const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "zNkOWWzDqm6RkAQIkGvnsw==jGz9vo39Mhv4ovsb";

const options = {
    method: "GET",
    
        headers: { 
            'X-Api-Key': apiKey,
        },
    
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


 async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
      //console.log(data[0].joke);
    
      jokeEl.innerText = data[0].joke;
    } catch (error) {

      jokeEl.innerText = "An error happend, try again later";
      btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        console.log(error);
     }

  
}



btnEl.addEventListener("click", getJoke);