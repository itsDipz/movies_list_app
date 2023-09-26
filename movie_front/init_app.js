import { add_movie, add_to_list, remove_from_list, show_list } from "./add_movie.js";

export function init_app(user_id, password){

    async function take_away_ranked_list_element(title){
        let response = await fetch();
        let resource = await response.json();
    }

    

    async function create_all_movie_elements(){
        let response = await fetch("https://teaching.maumt.se/apis/SR/v1/?series"); 
        let all_movies = await response.json();
        console.log(all_movies);
        all_movies.forEach(element => {
            let movie_element = document.createElement("div");
            movie_element.classList.add("drag_ele");
            movie_element.dataset.id = element.series_id;
            movie_element.innerHTML = element.title;
            movie_element.setAttribute("draggable", true);
            document.querySelector(".all_the_movies").appendChild(movie_element);
        });
        show_list(user_id, password);
        let my_list = document.querySelector(".my_ranking_list");
        my_list.addEventListener("dragover", (event) => {
            the_movies.querySelectorAll(".drag_ele").forEach((movie_element) =>{
                movie_element.addEventListener("dragend", (event) => {
                    document.querySelector(".my_ranking_list").appendChild(movie_element);
                    add_to_list(user_id, password, parseInt(movie_element.dataset.id));
                    
                })
            })
        })
        let the_movies = document.querySelector(".all_the_movies")
        the_movies.addEventListener("dragover", (event) => {
            my_list.querySelectorAll(".drag_ele").forEach((movie_element) =>{
                movie_element.addEventListener("dragend", (event) => {
                    document.querySelector(".all_the_movies").appendChild(movie_element);
                    remove_from_list(user_id, password, parseInt(movie_element.dataset.id));
                })
            })
        })
       
    }
    
    

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
                <div class="search_button">Search</div>
                <div class="add_movies_yourself">Add</div>
            </div>
        </div>
    `;
    create_all_movie_elements();
    // remove_from_list(user_id, password, 1);
}