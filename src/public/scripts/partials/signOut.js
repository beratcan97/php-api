import { get } from '../modules/utils';

export const SignOut = () => {
  const signOut = get.id('sign_out');
  signOut.addEventListener('click', () => {
    sessionStorage.clear();
  });
};
