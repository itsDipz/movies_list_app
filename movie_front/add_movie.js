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