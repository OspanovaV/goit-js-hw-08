// Задание 3 - форма обратной связи
// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей
//  в локальное хранилище когда пользователь что - то печатает.

// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище 
//    объект с полями email и message, в которых сохраняй текущие значения полей формы.
//    Пусть ключом для хранилища будет строка "feedback-form-state".
// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные
//    данные, заполняй ими поля формы.В противном случае поля должны быть пустыми.
// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email,
//    message и текущими их значениями в консоль.
// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
//   Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state'; //ключ для хранения данных
 //обработчик событий
form.addEventListener('input', throttle(onFormData, 500));//вызываем функцию не чаще чем один раз в 500 миллисекунд
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));//делаем запись в хранилище, преобразоваем в строку методом JSON
}

function onSubmitForm(evt) {
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));//выводим в консоль объект с полями email, message и текущими их значениями 
  evt.preventDefault();//запретим перезагрузку страницы
  evt.currentTarget.reset();//очищаем форму
  localStorage.removeItem(LOCALSTORAGE_KEY);//удаляем из хранилища запись
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)); //возвращает из хранилища значение
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();