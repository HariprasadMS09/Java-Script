let request = "https://api-testnet.bscscan.com/api";  // get this link from any free api on browser
// let request = "https://cat-fact.herokuapp.com/facts";
async function getData() {
    console.log("Getting data...");
    let response = await fetch(request);
    console.log(response);
    let data = await response.json();
    console.log(data);
};

getData();

