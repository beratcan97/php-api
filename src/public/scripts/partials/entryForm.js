import { post } from '../modules/fetch';
import { get } from '../modules/utils';

export async function EntryForm() {
  const entryForm = get.id('entry_form');

  if (entryForm) {
    entryForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      post('entries', formData);
      location.reload();
    });
  }
}
