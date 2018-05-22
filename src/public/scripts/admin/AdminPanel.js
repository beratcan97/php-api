import { create } from '../utils';
import { makeAdminBtn } from './components/makeAdminBtn';

export function AdminPanel(user) {
  // Imports
  const makeAdmin = makeAdminBtn(user);

  // Wrappers
  const usersWrapper = create.elem('div');

  // Elements
  const username = create.elem('p');
  const admin = create.elem('p');

  // Text
  const usernameText = create.text(user.username);
  const adminText = create.text(user.admin);

  // Append text
  username.appendChild(usernameText);
  admin.appendChild(adminText);

  usersWrapper.appendChild(username);
  usersWrapper.appendChild(admin);
  usersWrapper.appendChild(makeAdmin);

  // get.id('users-container').appendChild(usersWrapper);
  return usersWrapper;
}
