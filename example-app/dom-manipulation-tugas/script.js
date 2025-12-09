// ===================== Daftar Dinamis ===========================
const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const itemList = document.getElementById('itemList');

addBtn.onclick = function() {
  const value = itemInput.value.trim();
  if (!value) return;
  const li = document.createElement('li');
  li.textContent = value + ' ';

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Hapus';
  delBtn.onclick = function() {
    itemList.removeChild(li);
  };

  li.appendChild(delBtn);
  itemList.appendChild(li);
  itemInput.value = '';
};

// ===================== Ubah Background ===========================
const bgBtns = document.querySelectorAll('.bg-btn');
bgBtns.forEach(btn => {
  btn.onclick = function () {
    document.body.style.backgroundColor = btn.dataset.color;
  };
});

// ===================== Counter ===================================
let counter = 0;
const counterValue = document.getElementById('counterValue');
document.getElementById('incrementBtn').onclick = function() {
  counter++;
  counterValue.textContent = counter;
};
document.getElementById('decrementBtn').onclick = function() {
  counter--;
  counterValue.textContent = counter;
};
document.getElementById('resetBtn').onclick = function() {
  counter = 0;
  counterValue.textContent = counter;
};

// ================== Toggle Show/Hide Paragraf ====================
const toggleBtn = document.getElementById('toggleBtn');
const toggleParagraph = document.getElementById('toggleParagraph');

toggleBtn.onclick = function() {
  if (toggleParagraph.style.display === 'none') {
    toggleParagraph.style.display = 'block';
    toggleBtn.textContent = 'Sembunyikan';
  } else {
    toggleParagraph.style.display = 'none';
    toggleBtn.textContent = 'Tampilkan';
  }
};