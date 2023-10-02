async function fetchData(username) {
    const options = {
        method: 'GET'
    }
    const res = await fetch(`https://api.chess.com/pub/player/${username}`, options);
    const record = await res.json();

    if (record.code == 0) {
        const error = document.getElementById("username-error");
        error.style.visibility = "visible";
        error.innerHTML = "Error Retrieving Username";
    } else {
        console.log("record: ", record);
        console.log("League: ", record.league);
        document.getElementById("league").innerHTML = record.league;
    }
    
    
}

function buttonSubmit() {
    const username = document.getElementById("username-input").value;
    console.log("username: ", username);
    if (username) {
        fetchData(username);
    } else {
        const error = document.getElementById("username-error");
        error.style.visibility = "visible";
        error.innerHTML = "Error Retrieving Username Data";
    }
    
}