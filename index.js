const tabs = document.querySelectorAll('.tabs__list');
const tabButtons = document.querySelectorAll('.tabs__btn');
const continueButton = document.querySelector('.tabs__btn-continue');

let buttonClicked = ['1'];

const handleTabClick = (evt) => {
  tabButtons.forEach(tab => {
    tab.classList.remove('tabs__btn_active');
  });
  const {id} = evt.currentTarget;
  document.querySelector(`[id="tab-${id}"]`).classList.add('tabs__list_show');
  document.querySelector(`[id="${id}"]`).classList.add('tabs__btn_active');
  buttonClicked.push(id);
  let intersection = ['1', '2', '3', '4'].filter(x => !buttonClicked.includes(x));
  if (intersection.length == 0) {
    continueButton.disabled = false;
  }
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
