// showing form input sections and toggling button backgrounds and colors

// variables

const showPhrase = document.getElementById('showPhrase');
const showKJsonArea = document.getElementById('showKJsonArea');
const showPrivateKey = document.getElementById('showPrivateKey');
const formArray = document.querySelectorAll('.mb-3');
const formSectionSelectors = document.querySelectorAll('.option-item');

formSectionSelectors.forEach(function (each) {
  each.addEventListener('click', function () {
    this.style.backgroundColor = '#3877d3';
    this.style.color = 'white';
  });
  //   each.addEventListener('mouseIn', function () {
  //     () => (this.style.backgroundColor = '#bdbdbd');
  //   });
});

function selectPhrase() {
  formArray[0].style.display = 'block';
  formArray[1].style.display = 'none';
  formArray[2].style.display = 'none';
  showKJsonArea.style.backgroundColor = 'white';
  showPrivateKey.style.backgroundColor = 'white';
  showKJsonArea.style.color = 'black';
  showPrivateKey.style.color = 'black';
}

function selectKJsonArea() {
  formArray[0].style.display = 'none';
  formArray[1].style.display = 'block';
  formArray[2].style.display = 'none';
  showPhrase.style.backgroundColor = 'white';
  showPrivateKey.style.backgroundColor = 'white';
  showPhrase.style.color = 'black';
  showPrivateKey.style.color = 'black';
}

function selectPrivateKey() {
  formArray[0].style.display = 'none';
  formArray[1].style.display = 'none';
  formArray[2].style.display = 'block';
  showKJsonArea.style.backgroundColor = 'white';
  showPhrase.style.backgroundColor = 'white';
  showKJsonArea.style.color = 'black';
  showPhrase.style.color = 'black';
}

// event listeners

showPhrase.addEventListener('click', selectPhrase);
showKJsonArea.addEventListener('click', selectKJsonArea);
showPrivateKey.addEventListener('click', selectPrivateKey);
console.log(formArray);
