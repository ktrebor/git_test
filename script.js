const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


//a <p> with red text that says “Hey I’m red!”
const redParagraph = document.createElement('p');
redParagraph.setAttribute('style', 'color: red;');
redParagraph.textContent = "Hey I'm red!";

container.appendChild(redParagraph);

//an <h3> with blue text that says “I’m a blue h3!”

const blueHeading = document.createElement('h3');
blueHeading.setAttribute('style', 'color: blue;');
blueHeading.textContent = "I'm a blue h3";
container.appendChild(blueHeading);

//a <div> with a black border and pink background color with the following elements inside of it:
// - another <h1> that says “I’m in a div”
// - a <p> that says “ME TOO!”
//Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

const pinkDiv = document.createElement('div');
const headingDiv = document.createElement('h1');
headingDiv.textContent = "I'm in a div";
pinkDiv.appendChild(headingDiv);

const paragraphDiv = document.createElement('p');
paragraphDiv.textContent = "MEE TOO!";
pinkDiv.appendChild(paragraphDiv);

pinkDiv.setAttribute('style', 'border: 1px solid black; background-color:pink;');
container.appendChild(pinkDiv);

//Event Listeners Exercises
function alertFunction () {
    alert('Yay');
}

const btn = document.querySelector("#btn");
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });





