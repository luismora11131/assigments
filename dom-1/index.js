//document.querySelector(".first").style.background = "lightblue";

//1) Select the section with an id of container without using querySelector.
let containerID = document.getElementById("container");

//2) Select the section with an id of container using querySelector.
let queryContainer = document.querySelector("#container");

//3) Select all of the list items with a class of "second".
let secondItem = document.getElementsByClassName("second");

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
let olThirdClass = document.querySelector("ol .third");

//5) Give the section with an id of container the text "Hello!".
//let hello =containerID.innerHTML= "Hello";

//6) Add the class main to the div with a class of footer.
document.querySelector("div.footer").classList.add("main");

//7) Remove the class main on the div with a class of footer.
document.querySelector("div.footer").classList.remove("main");

//8) Create a new li element.
const newElement = document.createElement("li");

//9) Give the li the text "four".
newElement.innerHTML = "four";

//10) Append the li to the ul element.
document.querySelector("ul").appendChild(newElement);
//11) Loop over all of the lis inside the ol tag and give them a background color of "green".

const listItems = document.querySelectorAll("ol il");
for (let i = 0; i < listItems.length; i++) {
  console.log(listItems);
  listItems[i].style.color = "green"; //not working for me
}

//12) Remove the div with a class of footer.
const footer = document.querySelector(".footer");
footer.remove();
