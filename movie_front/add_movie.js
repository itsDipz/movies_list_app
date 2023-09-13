export async function add_movie(title,user_id, password){
    let fetch_body = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: {
            action: "add_series",
            user_id: user_id,
            password: password,
            title: title,
        }
    }
    let response = await fetch("https://teaching.maumt.se/apis/SR/v1/",fetch_body);
    let resource = response.json();
    console.log(resource);
}