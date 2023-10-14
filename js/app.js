// 1 
const allLi = document.querySelectorAll('li');

let li = 0;
while (li < allLi.length){ 
    let notCar = allLi[li].innerHTML;

    if (notCar !== 'Mercedes-Benz'
     && notCar !== 'Audi'
     && notCar !== 'Ferrari'
     && notCar !== 'Porshe'
     && notCar !== 'Bugatti'
     && notCar !== 'Ford') {
        allLi[li].remove();
    }   li++;
}


// 2
document.querySelector('ul').classList.add('list');
for(let li of allLi) {
    li.classList.add('listItem')
}


// 3
const unLi = document.querySelector('ul');
const firstLi = document.querySelector('li')
const newLiBugatti = document.createElement('li');
unLi.insertBefore( newLiBugatti, firstLi).classList.add('listItem');
newLiBugatti.innerText = 'Bugatti';


// 4
const newLiFord = document.createElement('li');
newLiFord.innerText = 'Ford';
unLi.appendChild(newLiFord).classList.add('listItem');


// 5
const form = document.querySelector('form');
const input = document.createElement('input');
input.type = 'text';
form.append(input);
input.placeholder = 'Name'

const inputLastName = document.createElement('input');
input.type = 'text';
form.append(inputLastName);
inputLastName.placeholder = 'LastName';

const inputPassword = document.createElement('input');
inputPassword.type = 'password';
form.append(inputPassword);
inputPassword.placeholder = 'Password';

const inputConfirmPassword = document.createElement('input');
inputConfirmPassword.type = 'password';
form.append(inputConfirmPassword);
inputConfirmPassword.placeholder = 'ConfirmPassword';


// 6
const image = document.createElement('img');
image.src = 'https://cdn.riastatic.com/photosnewr/ria/news_common/novyj-bugatti-chiron-za-2-6-mln-razgonyaetsya-do-420-km-ch__225882-940x0.webp'
document.querySelector('form').appendChild(image);

// 7
document.querySelector('p').classList.remove('red', 'italic');

// 8
const h1 = document.getElementById('h1Wrapper');
h1.innerHTML = '<h1>this is h1 tag</h1>';

// 9

h1.style.color = 'blue';
h1.style.fontSize = '40px' 




