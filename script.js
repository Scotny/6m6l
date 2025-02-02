let body = document.querySelector("body");

const root = document.documentElement;

let night = document.getElementById("night");
let nightImg = document.getElementById("night-img");
let search = document.getElementById("search");

night.addEventListener("click", () => {
  if (body.style.backgroundColor === "rgb(37, 37, 37)") {
    body.style.backgroundColor = "white";
    root.style.setProperty("--main-color", "#000000");
    nightImg.src = "./moon.svg";
    search.style.borderColor = "#6C63FF";
    search.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "rgb(37, 37, 37)";
    root.style.setProperty("--main-color", "#F7F7F7");
    nightImg.src = "./sun.svg";
    search.style.borderColor = "#F7F7F7";
    search.style.backgroundColor = "#252525";
  }
});

let send = document.getElementById("send");

let data = JSON.parse(localStorage.getItem("data")) || ["A1", "B2", "C3"];

let table = document.querySelector("table");

function renderData() {
  table.innerHTML = "";
  if (data.length === 0 || !data) {
    let h1 = document.createElement("h1");
    h1.innerHTML = "No data";
    table.appendChild(h1);
  } else {
    data.forEach((item, index) => {
      let tr = document.createElement("tr");
      table.appendChild(tr);

      let td1 = document.createElement("td");
      tr.appendChild(td1);

      let check = document.createElement("input");
      check.type = "checkbox";
      check.classList.add("check");
      check.addEventListener("change", () => {
        if (check.checked) {
          p.style.textDecoration = "line-through";
        } else {
          p.style.textDecoration = "none";
        }
      });
      td1.appendChild(check);

      let p = document.createElement("p");
      p.innerHTML = item;
      td1.appendChild(p);

      let td2 = document.createElement("td");
      td2.classList.add("action");
      tr.appendChild(td2);

      let btn1 = document.createElement("button");
      td2.appendChild(btn1);
      let img1 = document.createElement("img");
      img1.src = "./edit.svg";
      img1.alt = "edit";
      btn1.appendChild(img1);

      let btn2 = document.createElement("button");
      td2.appendChild(btn2);
      let img2 = document.createElement("img");
      img2.src = "./trash.svg";
      img2.alt = "trash";
      btn2.appendChild(img2);
      btn2.addEventListener("click", () => {
        data.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(data));
        renderData();
      });
    });
  }
}

renderData();

send.addEventListener("click", () => {
  if (search.value.trim() != "") {
    data.push(search.value);
    localStorage.setItem("data", JSON.stringify(data));
    renderData();
    search.value = "";
  }
});
