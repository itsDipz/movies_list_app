import { init_login_page } from "./login.js";

export function init_register_page(){
    let container = document.querySelector(".container");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="register_container">
            <div class="header">
                <h1>register</h1>
            </div>
            <div class="register_elements">
                <input type="text"placeholder="username">
                <input type="text" placeholder="password">
                <button>register</button>
            </div>
            <div class="login_link">Back to login page</div>
        </div>
    `;
    document.querySelector(".login_link").addEventListener("click", init_login_page )
}
