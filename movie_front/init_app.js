export function init_app(user_id, password){
    console.log(user_id);
    console.log(password);
    document.querySelector("link").href = "./movie_front/movie_front.css"
    let container = document.querySelector(".container");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="movie_app_container">
            <div class="header">
                <h1>Movie App</h1>
                <div class="profile"></div>
            </div>
            <div class="list_elements">

              <div dropzone="copy" class="my_ranking_list">
                 
              </div>

              <div dropzone="copy" class="all_the_movies">
                
              </div>

            </div>
            <div class="buttons_container">
                <div class="search_button"></div>
                <div class="add_movies_yourself"></div>
            </div>
        </div>
    `;
    async function create_all_movie_elements(){
        let response = await fetch("https://teaching.maumt.se/apis/SR/v1/?series"); 
        let resource = await response.json();
        console.log(resource);
        resource.forEach(element => {
            let movie_element = document.createElement("div");
            movie_element.classList.add("drag_ele");
            movie_element.innerHTML = element.title;
            movie_element.setAttribute("draggable", true);
            document.querySelector(".all_the_movies").appendChild(movie_element);
        });

        document.querySelector(".my_ranking_list").addEventListener("dragover", (event) => {
            document.querySelectorAll(".drag_ele").forEach((movie_element) =>{
                movie_element.addEventListener("dragend", (event) => {
                    document.querySelector(".my_ranking_list").appendChild(movie_element);
                })
            })
            
        })

        document.querySelector(".all_the_movies").addEventListener("dragover", (event) => {
            document.querySelectorAll(".drag_ele").forEach((movie_element) =>{
                movie_element.addEventListener("dragend", (event) => {
                    document.querySelector(".all_the_movies").appendChild(movie_element);
                })
            })
            
        })
        
    }
    create_all_movie_elements();
}