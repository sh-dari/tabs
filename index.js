const tabs = document.querySelectorAll('.tabs__list');
const tabButtons = document.querySelectorAll('.tabs__btn');
const continueButton = document.querySelector('.tabs__btn-continue');

let buttonClicked = [1];

const handleTabClick = (index) => {
  tabButtons.forEach(tab => {
    tab.classList.remove('tabs__btn_active');
  });
  tabs.forEach(tab => {
    tab.classList.remove('tabs__list_show');
  });
  const id = index;
  tabs[index].classList.add('tabs__list_show');
  tabButtons[index].classList.add('tabs__btn_active');
  buttonClicked.push(id + 1);
  console.log(buttonClicked)
  let intersection = [1, 2, 3, 4].filter(x => !buttonClicked.includes(x));
  if (intersection.length == 0) {
    continueButton.disabled = false;
  }
}

tabButtons.forEach((button, index) => button.addEventListener('click', () => {handleTabClick(index)}));
