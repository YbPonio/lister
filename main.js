let flags;
let currentFlag = 0;
let image = document.querySelector("#image-container");

async function getFlags() {
    let response = await fetch("http://localhost/Image%20Carousell/api/get-flags.php");
    flags = await response.json();

    showFlag()
    renderFlagList()
}

function searchFlags() {
    let theCountry = searchInputId.value;

    let searchCountry = flags.find(flag => flag.common_name == theCountry)

    if(!searchCountry){
        alert("Country not found");
        return;
    }
    
    currentFlag = flags.indexOf(searchCountry);

    showFlag()
}

function buttonFruit(name) {
    if (name == "next") {
        currentFlag = (currentFlag + 1) % flags.length;
    } else {
        currentFlag = (currentFlag - 1 + flags.length) % flags.length;
    }

    showFlag();
}

function renderFlagList() {
    countryList.innerHTML = "";

    for (flag of flags) {
        countryList.innerHTML += `<option value="${flag.common_name}">`;
    }

}

function showFlag() {
    let flag = flags[currentFlag];
    image.src = `./images/${flag.common_name}.png`;

    
    countryName.innerHTML = flag.common_name;
    countryCode.innerHTML = flag.code;
    searchInputId.value = "";
}



getFlags()