import { create } from '../../modules/utils';
import { makeAdminBtn } from './partials/makeAdminBtn';

export function AdminPanel(user) {
  // Imports
  const makeAdmin = makeAdminBtn(user);

  // Wrappers
  const usersWrapper = create.elem('div');

  // Elements
  const username = create.elem('p');
  const admin = create.elem('p');

  // Adds classes
  const usersWrapperClass = ['card-header', 'box', 'title-style'];
  usersWrapper.classList.add(...usersWrapperClass);

  // Text
  const usernameText = create.text(user.username);
  const adminText = create.text(user.admin);

  // Append text
  username.appendChild(usernameText);
  admin.appendChild(adminText);

  usersWrapper.appendChild(username);
  usersWrapper.appendChild(makeAdmin);

  return usersWrapper;
}
