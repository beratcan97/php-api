import * as api from '../fetch.js';
import { create } from '../utils.js';
import { LikeBtn } from './components/makeAdminBtn.js';

export async function MakeAdmin(user) {
  // Imports
  const makeAdmin = await makeAdminBtn();

  // Wrappers
  const usersWrapper = crteate.elem('div');

  // Elements
  var username = create.elem('p');
  var admin = create.elem('p');

  // Text
  let usernameText = create .text(user.username);
  let adminText = create.text(user.admin);

  // Append text
  username.appendChild(usernameText);
  admin.appendChild(adminText);

  usersWrapper.appendChild(usernameWrapper);
  usersWrapper.appendChild(adminWrapper);

  document.getElementById('users-container').appendChild(usersWrapper);
}