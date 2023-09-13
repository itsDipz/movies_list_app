function popup(message){

}


export async function delete_user_func(a_user_id, a_password){
   let body = {
        action: "delete_user",
        user_id: a_user_id,
        password: a_password,
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