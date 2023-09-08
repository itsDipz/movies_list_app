import { init_login_page } from "./login.js";

export function init_register_page(){
    document.querySelector("link").href = "./login_register/register.css"
    let container = document.querySelector(".container");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="register_container">
            <div class="header">
                <h1>register</h1>
            </div>
            <div class="register_elements">
                <input class="username_register" type="text"placeholder="username">
                <input class="password_register" type="password" placeholder="password">
                <input class="mau_id_register" type="text" placeholder="MAU ID">
                <button class="register_button">register</button>
            </div>
            <div class="login_link">Back to login page</div>
        </div>
    `;
    document.querySelector(".login_link").addEventListener("click", init_login_page )
    document.querySelector(".register_button").addEventListener("click", async () => {

        let request_send_data = {
            action: "register_user",
            user_name: document.querySelector(".username_register").value,
            password: document.querySelector(".password_register").value,
            mau_id: document.querySelector(".mau_id_register").value,
        }
        let post_body = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(request_send_data),
        }
        let response = await fetch("https://teaching.maumt.se/apis/SR/v1/", post_body)
        let resource = await response.json();
        
        
        document.querySelector(".username_register").value = "";
        document.querySelector(".password_register").value = "";
        
        
    })
}


