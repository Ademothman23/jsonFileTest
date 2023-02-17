async function jsonUpdate(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const myJson = await response.json();
    //console.log(JSON.stringify(myJson));
    console.log(myJson.userId)
    // look for json update and resend it if changed
    setTimeout(jsonUpdate, 1000);
}

jsonUpdate();