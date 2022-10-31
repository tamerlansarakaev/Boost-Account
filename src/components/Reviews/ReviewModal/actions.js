export function inputValidate(name, reviewInput, feedbackInput, rate) {
  if (name.length && reviewInput.length && feedbackInput.length && rate) {
    return true;
  } else {
    return false;
  }
}

export function nameInputValidate(button, input) {
  if (button && !input.length) {
    return true;
  }
}

export function finalRateValidate(rate, button) {
  if (button) {
    if (!rate) {
      return 'flex';
    } else {
      return 'none';
    }
  }
}
