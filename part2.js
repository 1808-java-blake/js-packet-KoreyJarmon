// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    element = document.getElementsByTagName("h1")[0].childNodes[3];
    console.log(element.innerHTML);
}
getUSA();
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    for (i = 0; i < document.getElementsByTagName("td").length; i++) {
        names = document.getElementsByTagName("td")[i];
        if (names.innerHTML === "Sales") {
            names = document.getElementsByTagName("td")[i - 1];
            console.log(names.innerHTML);
            i++;
        }
    }
}
getPeopleInSales();

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    b = document.getElementsByTagName("a");
    for (i = 0; i < b.length; i++) {
        c = b[i].childNodes;
        for (j = 0; j < c.length; j++) {
            if (c[j].nodeName === "SPAN") {
                console.log(c[j].innerHTML);
            }
        }
    }
}
getAnchorChildren();
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies() {
    skill = document.getElementsByTagName("select")[1].querySelectorAll("[selected]");
    for (i = 0; i < skill.length; i++) {
        console.log(skill[i].innerHTML);
    }
}
getHobbies();
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {
    att = document.querySelectorAll("[data-customAttr]");
    for (i = 0; i < att.length; i++) {
        out = att[i];
        console.log(out.innerHTML);
    }
}
getCustomAttribute();
// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
document.getElementById("num1").onchange = function () { add() };
document.getElementById("num2").onchange = function () { add() };
function add() {

    n1 = + document.getElementById("num1").value;
    n2 = + document.getElementById("num2").value;
    document.getElementById("sum").innerHTML = n1 + n2;

}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
sk = document.querySelectorAll(`select[name="skills"]`)[0];
sk.onchange = function () { skillsEvent() };
function skillsEvent() {
    alert("Are you sure " + sk.value + " is your skill?");
}
// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
document.getElementById("firstForm").onchange = function () { favColor() };
color1 = "no color";

function favColor() {
    color = document.getElementsByName("favoriteColor");
    for (i = 0; i < color.length; i++) {
        if (color[i].checked) {
            color2 = color1;
            if (color1 === color[i].value) {
                break;
            }
            color1 = color[i].value;
            alert("So you like " + color1 + " more than " + color2 + " now?");
        }
    }
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
for (i = 0; i < document.getElementsByClassName("empName").length; i++) {
    n = document.getElementsByClassName("empName")[i];
    n.addEventListener("mouseover", showHide);
}

function showHide() {
    for (j = 0; j < document.getElementsByClassName("empName").length; j++) {
        document.getElementsByClassName("empName")[j].style.visibility = "hidden";
    }

}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function fixTime(k) {
    if (k < 10) {
        k = "0" + k;
    }
    return k;
}
function time() {
    today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    minutes = fixTime(minutes);
    seconds = fixTime(seconds);
    document.getElementById("currentTime").innerHTML = hours + ":" + minutes + ":" + seconds;
    tm = setTimeout(function () {
        time();
    }, 500);
}
time();

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
document.getElementById("helloWorld").onclick = function () { delay() };
function delay() {
    letters = "0123456789ABCDEF";
    color = "#";
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    setTimeout(function () { document.getElementById("helloWorld").style.color = color }, 3000);
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

var results = [];
function walkDOM(node, func) {
    func(node);                   
    node = node.firstChild;
    while (node) {
        walkDOM(node, func);
        node = node.nextSibling;
    }
}
walkDOM(document.body, function (node) {
    console.log(node.tagName);
});