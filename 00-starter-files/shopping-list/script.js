const item_input = document.querySelector("#item-input");
const btn_input = document.querySelector(".btn");
const item_list = document.querySelector("#item-list");
const btn_link = document.querySelectorAll(".remove-item");
const btn_clear = document.querySelector(".btn-clear");
const filter = document.querySelector("#filter");

function preventRefreshClick(j) {
  event.preventDefault();


// let preventInput = true

// document.querySelector(".btn").addEventListener("click", function (e) {
  // e.preventDefault();

  // replaceButton1()

  if (item_input.value === "") {
    // alert("you have to input something");
    saveData();
    return
  } else {
    // if(!preventInput) return;
    console.log(document.querySelector(".btn"));
    let li = document.createElement("li");
    li.innerHTML = item_input.value;
    item_list.appendChild(li);

    let button = document.createElement("button");
    button.className = "remove-item btn-link text-red";
    li.appendChild(button);

    let i = document.createElement("i");
    i.className = "fa-solid fa-xmark";
    button.appendChild(i);

    btn_clear.style.opacity = 100;
    item_list.style.opacity = 100;
    filter.style.opacity = 100;
    item_input.value = "";
    saveData();
  }
// });
console.log('not refresh');
return false;
}
// btn_link.forEach((btn) => btn.addEventListener('click', function(e) {
//     console.log(e.target.tagName);
//     if(e.target.closest('button')){
//         e.target.closest('button').parentElement.remove();
//         // saveData()
//     }
// }))

item_list.addEventListener("click", function (e) {
  console.log(e.target.closest("button"));
  console.log(e.target.textContent);

  //remove li element
  if (e.target.closest("button")) {
    alert('Are you sure?')
    e.target.closest("button").parentElement.remove();
    replaceButton1();

    saveData();
  }

  //edit li textcontent
  if (e.target.tagName === "LI") {
    // preventInput = false
    e.target.style.color = "#cecece";
    // btn_input.style.background = "#0bc204";
    // btn_input.innerHTML = `<i class="fa-solid fa-plus"></i> Update Item`;
    replaceButton2();

    document.querySelector(".btn2").addEventListener("click", function (b) {
      b.preventDefault();
      replaceButton1();

      e.target.style.color = "#333";
      console.log(document.querySelector(".btn"));
      // preventInput = true
      if (item_input.value === "") {
          alert("you have to input something");
        saveData();
      }
      else{
        e.target.innerHTML = `${item_input.value} <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
          </button>`;
        e.target.style.color = "#333";
        item_input.value = "";
        saveData();
      }
    });
    saveData();
  } 
});


/*
 item_list.addEventListener('click', function(e) {

    if(e.target.tagName === 'LI'){
        // preventInput = false
        e.target.style.color = "#cecece";
        // btn_input.style.background = "#0bc204";
        // btn_input.innerHTML = `<i class="fa-solid fa-plus"></i> Update Item`;
        replaceButton2()

        document.querySelector('.btn2').addEventListener('click', function(b) {
            b.preventDefault()
            replaceButton1()
            console.log(document.querySelector('.btn'));
            // preventInput = true
            if (item_input.value === "") {
                alert("you have to input something");
                saveData()
                return
              } else {
                e.target.innerHTML = `${item_input.value} <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
                </button>`;
                e.target.style.color = "#333";

                item_input.value = ''
                saveData()
        }
        })
      }
})
 */



//replace button
function replaceButton1(e) {
  // e.preventDefault()
  const formButton = document.querySelector("button:first-child");
  const btn1 = `<button type="submit" class="btn">
  <i class="fa-solid fa-plus"></i> Add Item
</button>`
formButton.outerHTML = btn1
//   document.createElement("button");
//   btn1.setAttribute("type", "submit");
//   btn1.classList.add("btn");
//   btn1.innerHTML = `<i class="fa-solid fa-plus"></i> Add Item`;
//   btn1.style.background = "#333";
//   formButton.replaceWith(btn1);
} 


function replaceButton2(e) {
// e.preventDefault()
const formButton = document.querySelector("button:first-child");
const btn2 = document.createElement("button");
btn2.classList.add("btn2");
btn2.setAttribute("type", "submit");
// btn2.setAttribute('submit')
btn2.style.background = "#0bc204";
btn2.innerHTML = `<i class="fa-solid fa-plus"></i> Update Item`;
// btn2.innerText = 
formButton.replaceWith(btn2);
}


btn_clear.addEventListener("click", function (e) {
  console.log(e);
  item_list.innerHTML = "";
  filter.style.opacity = 0
  btn_clear.style.opacity = 0
  // filter.style.transition = 1;
  // btn_clear.style.transition = 1;
  saveData()
});

filter.addEventListener("input", function () {
  const search = document.querySelector("#filter");
  const filter = search.value;
  const listItem = document.querySelectorAll("li");

  listItem.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

// const person = {
//   name: "ryan",
//   age: 20,
//   data: item_list.innerHTML,
// };

// save the data input list
const saveData = function () {
  localStorage.setItem("data", item_list.innerHTML);
};

const showTask = function () {
  item_list.innerHTML =localStorage.getItem("data")
/*   `<li>
  ${localStorage.getItem("data")}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>
</li>`  */;
};
showTask();
