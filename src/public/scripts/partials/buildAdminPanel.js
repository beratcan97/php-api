import * as api from '../modules/fetch';
import { get } from '../modules/utils';
import { AdminPanel } from '../components/adminPanel/AdminPanel';

export async function buildAdminPanel() {
  const loader = document.createElement('DIV');
  loader.classList.add('loader');
  document.body.appendChild(loader);

  const usersContainer = get.id('users-container');

  const users = await api.get('users');

  for (let i = 0; i < users.data.length; i++) {
    usersContainer.appendChild(AdminPanel(users.data[i]));
  }

  loader.remove();
}
