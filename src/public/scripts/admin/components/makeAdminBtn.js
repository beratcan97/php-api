import { create } from '../../utils';

export function makeAdminBtn(user) {
  let admin = "Ej admin";
  const adminBtn = create.elem('button');

  const clsLC = ['button', 'is-outlined', 'is-info', 'is-small'];
  adminBtn.classList.add(...clsLC);

  if (user.admin === 0) {
    admin = "Ej admin";
  } else {
    admin = "Admin";
  }

  const adminBtnText = create.text(admin);
  adminBtn.appendChild(adminBtnText);

  return adminBtn;
}
