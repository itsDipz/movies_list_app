import { init_register_page } from "./register.js";
import { delete_user_func } from "../utils.js";
import { init_app } from "../movie_front/init_app.js";

export function init_login_page(){
    // delete_user_func("fuse1111", );
    document.querySelector("link").href = "./login_register/login.css"
    let container = document.querySelector(".container");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="login_container">
            <div class="header">
                <h1>Login</h1>
            </div>
            <div class="login_elements">
                <input class="login_username" type="text"placeholder="username">
                <input class="login_password" type="password" placeholder="password">
                <button class="login_button">Log in</button>
            </div>
            <div class="register_link">Dont have a account register here</div>
        </div>
        
    `;
    let register_link = document.querySelector(".register_link");
    register_link.addEventListener("click", init_register_page);

    document.querySelector(".login_button").addEventListener("click", async () => {
        
        let user_name = document.querySelector(".login_username").value;
        let password =  document.querySelector(".login_password").value;
       
        let response = await fetch(`https://teaching.maumt.se/apis/SR/v1/?user_name=${user_name}&password=${password}&login`);
        let resource = await response.json();
        
        
        if(response.status === 200){
            init_app(resource.user_id, document.querySelector(".login_password").value);
           
        }
        else{
            document.querySelector(".login_username").value = "";
            document.querySelector(".login_password").value = "";
        }
    })
}

init_login_page();

