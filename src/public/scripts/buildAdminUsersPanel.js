import * as api from './fetch';
import { get } from './utils';
import { AdminPanel } from './admin/AdminPanel';

export async function buildAdminUsersPanel() {
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
