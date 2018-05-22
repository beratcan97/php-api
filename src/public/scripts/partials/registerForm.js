import { get } from '../modules/utils';
import { register } from '../modules/fetch';

export function RegisterForm() {
  if (window.location.pathname === '/register') {
    const registerForm = get.id('register_form');

    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      register(formData);
    });
  }
}
