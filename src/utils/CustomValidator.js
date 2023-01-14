class CustomValidator {

  checkInputValidity(input) {
    const errorField = document.querySelector(`.form-error-${input.id}`);
    if (input.validity.valid) {
      errorField.textContent = '';
    }
    if (!input.validity.valid) {
      errorField.textContent = input.validationMessage;
    }
    if (input.validity.patternMismatch) {
      errorField.textContent = 'Используйте только буквы, цифры, пробел или дефис';
    }
    return this.checkFormValidity();
  }

  checkFormValidity() {
    const inputList = document.querySelectorAll('.form__input');
    const formValidity = Array.from(inputList).filter(input => input.validity.valid === true);
    if (formValidity.length === inputList.length) {
      return true;
    } else {
      return false;
    }
  }
}

export const customValidator = new CustomValidator();