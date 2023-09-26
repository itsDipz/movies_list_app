export async function add_movie(a_title,a_user_id, a_password){
    let body_for_fetch ={
        action: "add_series",
        user_id: parseInt(a_user_id),
        password: a_password,
        title: a_title,
    }
    let fetch_parameters = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(body_for_fetch),
    }
    let response = await fetch("https://teaching.maumt.se/apis/SR/v1/",fetch_parameters);
    let resource = response.json();
    console.log(resource);
}

export async function add_to_list(user_id, password, series_id) {
    let body_for_request = {
        action: "add_series_to_list",
        user_id: user_id,
        password: password,
        series_id: series_id,
    }
    let patch_config = {
        method: "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(body_for_request),
    }
    let response = fetch("https://teaching.maumt.se/apis/SR/v1/", patch_config);
    let resource = response.json();
    console.log(resource);
}

export async function remove_from_list(user_id, password, series_id) {
    let body_for_request = {
        action: "remove_series_to_list",
        user_id: user_id,
        password: password,
        series_id: series_id,
    }
    let patch_config = {
        method: "DELETE",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(body_for_request),
    }
    let response = fetch("https://teaching.maumt.se/apis/SR/v1/", patch_config);
    let resource = response.json();
    console.log(resource);
}

export async function show_list(user_id, password) {
  
    let response = await fetch(`https://teaching.maumt.se/apis/SR/v1/?list&user_id=${user_id}&password=${password}`);
    let resource = await response.json();
    console.log(resource);

    
    let all_movies_container = document.querySelector(".all_the_movies");
    let all_movies_elements = all_movies_container.querySelectorAll("div")
    console.log(all_movies_elements);
    let array_of_your_list_ele = [];
    for (let index = 0; index < all_movies_elements.length; index++) {
      resource.forEach(element => {
        console.log(parseInt(all_movies_elements[index].dataset.id))
            if(element === parseInt(all_movies_elements[index].dataset.id)){
                array_of_your_list_ele.push(all_movies_elements[index]);
            }
       });
    }
    console.log(array_of_your_list_ele);

    for (let i = 0; i < array_of_your_list_ele.length; i++) {
        let element = array_of_your_list_ele[i];
        document.querySelector(".my_ranking_list").appendChild(element);
    }
}

