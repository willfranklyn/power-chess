async function fetchData() {
    const options = {
        method: 'GET'
    }

    const res = await fetch("https://api.chess.com/pub/player/willfranklyn", options);
    const record = await res.json();

    console.log("record: ", record);
    console.log("League: ", record.league);
    document.getElementById("league").innerHTML = record.league;
}

fetchData();