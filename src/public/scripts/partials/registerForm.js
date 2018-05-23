import { get } from '../modules/utils';
import { register } from '../modules/fetch';

export function RegisterForm() {
  const registerForm = get.id('register-form');

  if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      register(formData);
    });
  }
}
