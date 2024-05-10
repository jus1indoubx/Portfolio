// Lấy phần tử HTML
var modal = document.getElementById('modal-content');
var blurBg = document.getElementById('blur-bg');
var openBtn = document.getElementById('open-modal');
var closeBtn = document.getElementById('close-modal');

// Khi người dùng nhấn nút mở popup
openBtn.onclick = function() {
  modal.style.display = 'block';
  blurBg.style.display = 'block';
}

// Khi người dùng nhấn nút đóng popup
closeBtn.onclick = function() {
  modal.style.display = 'none';
  blurBg.style.display = 'none';
}

// Khi người dùng nhấn bất cứ đâu ngoài popup, đóng popup
window.onclick = function(event) {
  if (event.target == blurBg) {
    modal.style.display = 'none';
    blurBg.style.display = 'none';
  }
}