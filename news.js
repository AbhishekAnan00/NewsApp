let key = "";
let cardBox = document.querySelector(".card-box");
let searchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");

const getdata = async (input) => {
  let res = await fetch(
    `https://newsdata.io/api/1/news?&q=${input}&apiKey=${key}`
  );
  let jsonData = await res.json();
  console.log(jsonData.results[0]);

  cardBox.innerHTML = "";
  jsonData.results.forEach(function (result) {
    let divs = document.createElement("div");
    divs.classList.add("card");
    cardBox.appendChild(divs);

    divs.innerHTML = `
        <img src="${result.image_url}">
           <h3>${result.title}</h3>
           <p>${result.category}</p>
        
       `;
    console.log(result);
  });
};

//searchtype.inputData.value ="";
window.addEventListener("load", function () {
  getdata("india");
});

divs.addEventListener("click", function () {
  window.open(result.url);
});

searchBtn.addEventListener("click", function () {
  let inputText = inputData.value;
  getdata(inputText);
});

function navClick(navName) {
  if (navName == sports) {
    document.getElementById("Sports").style.color = "blue";
    document.getElementById("Politics").style.color = "white";
    document.getElementById("travels").style.color = "white";
  }
  if (navName == politics) {
    document.getElementById("Sports").style.color = "white";
    document.getElementById("Politics").style.color = "blue";
    document.getElementById("travels").style.color = "white";
  }
  if (navName == travels) {
    document.getElementById("Sports").style.color = "white";
    document.getElementById("Politics").style.color = "white";
    document.getElementById("travels").style.color = "blue";
  }
  getdata(navName);
}
function showSidebar() {
  const sidebar = document.querySelector(".hide-sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".hide-sidebar");
  sidebar.style.display = "none";
}
