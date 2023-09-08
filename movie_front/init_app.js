export function init_app(){
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

              <div class="my_ranking_list">
                 
              </div>

              <div class="all_the_movies">
                <div class="test_drag_ele" draggble="true"></div>
              </div>

            </div>
            <div class="buttons_container">
                <div class="search_button"></div>
                <div class="add_movies_yourself"></div>
            </div>
        </div>
    `;
}