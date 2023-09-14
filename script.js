const superiore = document.getElementById('superiore');
const inferiore = document.getElementById('inferiore');
const scarpe = document.getElementById('scarpe');
const clothesSlot = document.querySelectorAll('.slot');
const styleButton = document.getElementById('button');
const loading = document.getElementById('loading');
let armadio = ['', '', ''];
superiore.addEventListener('change', function () {
  const selectedOption = superiore.options[superiore.selectedIndex].value;
  addClothes(selectedOption, 0);
});
inferiore.addEventListener('change', function () {
  const selectedOption = inferiore.options[inferiore.selectedIndex].value;
  addClothes(selectedOption, 1);
});
scarpe.addEventListener('change', function () {
  const selectedOption = scarpe.options[scarpe.selectedIndex].value;
  addClothes(selectedOption, 2);
});

function addClothes(clothes, index) {
  armadio[index] = clothes;
  clothesSlot.forEach(function (slot, i) {
    slot.innerText = armadio[i] || '?';
  });
  console.log(armadio, 'armadio aggiornato');
}

styleButton.addEventListener('click', function () {
  console.log('click');
});
