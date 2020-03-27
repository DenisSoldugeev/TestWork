import  $ from 'jquery'
import './styles/main.scss'
import './assets/js/script'
import './assets/img/1.png'


const btn = document.querySelector(".reviews__more");
const more = document.querySelector(".more");
const arrow = document.querySelector(".arrow-down");
const text = document.querySelector(".product__reviews");
const textLength = text.innerHTML;

function sliceText() {
    if (textLength.length >= 150) {
        let  sliceText = textLength.substr(0, 150);
        text.innerHTML = sliceText;

    }
}
sliceText();

btn.onclick = function () {
      if (text.innerHTML.length <= 150) {
          text.innerHTML = textLength;
          more.innerHTML = 'Скрыть';
          arrow.style.transform = 'rotate(45deg)'

      } else {
          let  sliceText = textLength.substr(0, 150);
          text.innerHTML = sliceText;
          more.innerHTML = 'Подробнее';
          arrow.style.transform = 'rotate(225deg)'
      }

};

