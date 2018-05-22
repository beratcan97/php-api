import * as api from './fetch';
import { get } from './utils';
import { AdminPanel } from './admin/AdminPanel';

export async function buildAdminUsersPanel() {
  const usersContainer = get.id('users-container');

  const users = await api.get('users');

  users.forEach((user) => {
    usersContainer.appendChild(AdminPanel(user));
  });
}
