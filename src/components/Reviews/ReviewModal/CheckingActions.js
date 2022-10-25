export function checkingActions(state = {}) {
  if (!state.name) {
    return alert('Заполните поле ввода вашего имени!');
  } else if (!state.reviewTopic) {
    return alert('Заполните поле ввода вашей темы!');
  } else if (!state.feedback) {
    return alert('Заполните поле ввода вашего отзыва!');
  } else if(!state.rate) {
    return alert('Поставьте оценку сервису!')
  }
}
