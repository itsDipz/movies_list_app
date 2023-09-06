import { init_register_page } from "./register.js";
export function init_login_page(){
    let container = document.querySelector(".container");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="login_container">
            <div class="header">
                <h1>Login</h1>
            </div>
            <div class="login_elements">
                <input type="text"placeholder="username">
                <input type="text" placeholder="password">
                <button>Log in</button>
            </div>
            <div class="register_link">Dont have a account register here</div>
        </div>
        
    `;
    let register_link = document.querySelector(".register_link");
    register_link.addEventListener("click", init_register_page);
}

init_login_page();

