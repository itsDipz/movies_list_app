function popup(message){

}


export async function delete_user_func(password, user_id){
   let body = {
        action: "delete_user",
        user_id: user_id,
        password: password,
    }
    let request_body = {
        method: "DELETE",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(body),
    }
    let response = await fetch("https://teaching.maumt.se/apis/SR/v1/",request_body);
    let resource = await response.json();
    console.log(resource);
}