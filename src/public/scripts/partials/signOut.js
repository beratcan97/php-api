import { get } from '../modules/utils';

export const SignOut = () => {
  const signOut = get.id('sign-out');
  signOut.addEventListener('click', () => {
    sessionStorage.clear();
  });
};
