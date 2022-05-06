// var h = document.createElement("h1");
// // insert some values in h1

// var myValue = document.createTextNode("Hello Prince");

// // put myValue inside h
// h.appendChild(myValue);

// document.querySelector("h1").appendChild(h);

// var val = 5;
// while (val > 0) {
//   console.log(val);
//   val--;
// }

var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", removeEverything);

// functions
function addItem() {
  var input = document.getElementById("input");
  var item = input.value;

  ul = document.getElementById("list");
  var textNode = document.createTextNode(item);

  if (item === "") {
    return false;
    // Add a alert and assign a value "enter your todo"
    alert("Enter your todo");
  } else {
    // create li
    li = document.createElement("li");

    // create check Box
    var checkBox = document.createElement("input");
    checkBox.type == "checkbox";
    checkBox.setAttribute("id", "check");

    // create label
    var label = document.createElement("label");
    label.setAttribute("for", "item");

    // add these elements on web page
    ul.appendChild(label);
    li.appendChild(checkBox);
    label.appendChild(textNode);
    li.appendChild(label);

    ul.insertBefore(li, ul.childNodes[0]);
    // li.className = "visulal";

    setTimeout(() => {
      li.className = "visual";
    }, 3);

    input.value = "";
  }
}

function removeItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    // const element = li[index];
    // console.log(element);
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}

function removeEverything() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    // to remove everything
    while (li[index] && li[index].children[0]) {
      ul.removeChild(li[index]);
    }
  }
}
