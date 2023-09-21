// Write your code here!
const element = document.createElement("div")
document.body.append(element);
const ul = document.createElement('ul');
for (let i=0; i<3; i++){
    const li = document.createElement("li");
    li.textContent =(i+1).toString();
    ul.append(li)
}
document.body.append(ul)
const newElem = document.createElement("p")
document.body.append(newElem)
newElem.textContent="hello gues!"

const newEl = document.getElementById("main");
newEl.style.height="300px";
newEl.style.backgroundColor="#27647B";
newEl.textContent='Hello everybody'
newEl.className="pet-listing dog"
newEl.classList.remove('dog');
newEl.classList.add('cat', 'sale');
const secondChild = ul.querySelector('li:nth-child(2)');
ul.removeChild(secondChild);
ul.remove();
const main = document.getElementById('main');
main.remove()
const newHeader = document.createElement("h1");
document.body.append(newHeader);
newHeader.id = 'victory';
newHeader.textContent="Khrystyna is the champion"



