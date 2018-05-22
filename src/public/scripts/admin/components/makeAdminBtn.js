import { create } from '../../utils';
import * as api from "../../fetch.js";

export function makeAdminBtn(user) {
  let admin = "Ej admin";
  const adminBtn = create.elem('button');

  const clsLC = ['button', 'is-outlined', 'is-info', 'is-small'];
  adminBtn.classList.add(...clsLC);

  if (user.admin == 0) {
    admin = "Ej admin";
  } else {
    admin = "Admin";
  }

  const adminBtnText = create.text(admin);
  adminBtn.appendChild(adminBtnText);

  let body = {};

  adminBtn.onclick = function() {
    let id = user.userID;
    if (user.admin == 0) {
      body = {
        admin: 1
      }
    }
    else {
      body = {
        admin: 0
      }
    }
    api.updateUser(id, body);
  }

  return adminBtn;
}
