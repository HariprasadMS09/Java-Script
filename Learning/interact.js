let firstBtn = document.querySelector("#btn1");
firstBtn.onclick = () =>{
    console.log("redirecting..");
    alert("Login info saved");
}
firstBtn.onmouseover = (evt) =>{
    let info = document.createElement("span");
    info.innerHTML = "This saves your data on clicking";
    console.log(evt);
    console.log(info);
}

