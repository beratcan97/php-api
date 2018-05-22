import * as api from '../modules/fetch';
import { get } from '../modules/utils';
import { AdminPanel } from '../components/adminPanel/AdminPanel';

// Check if user is in admin-page and is admin
// non-admins get sent to index
export async function buildAdminPanel() {
  if (window.location.pathname === '/admin') {
    if (sessionStorage.getItem('admin') === '1') {
      // loader
      const loader = document.createElement('DIV');
      loader.classList.add('loader');
      document.body.appendChild(loader);

      const usersContainer = get.id('users-container');
      const users = await api.get('users');

      for (let i = 0; i < users.data.length; i++) {
        usersContainer.appendChild(AdminPanel(users.data[i]));
      }
      loader.remove();
      console.log(sessionStorage.getItem('admin'));
    } else {
      window.location.href = '/';
    }
  }
}
