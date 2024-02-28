// 1 ///

const textInput = document.getElementById('textInput');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', () => {

    const newText = textInput.value;
    changeButton.textContent = newText;
});

// 2 ///

const nesquikImage = document.getElementById('second__img');

nesquikImage.addEventListener('click', () => {
    nesquikImage.src = './img/nesquik-2.jpg';
    });

// 3 ///

const wotsLink = document.getElementById("wots__link");
const wotsImage = document.getElementById('third__img');

wotsLink.href = 'https://youtu.be/-tjl-hMz23U';
wotsImage.setAttribute('alt', 'wots cover');

console.log(wotsImage);

// 4 ///

const listElement = document.querySelector('ul');
console.log(listElement);
const firstItem = listElement.firstElementChild;
firstItem.textContent = "лялялялял бебебебе мемекмемемм омомомвомооф";