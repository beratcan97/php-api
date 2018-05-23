import * as api from '../../../modules/fetch';
import { create } from '../../../modules/utils';

export async function LikeBtn(entry, likes) {
  // Init with amount of likes
  let amountOfLikes;
  !likes ? (amountOfLikes = 0) : (amountOfLikes = likes.length);

  const likeBtn = create.elem('button');
  const likeIcon = create.elem('i');

  const likeBtnText = create.text(amountOfLikes);

  const clsLC = ['button', 'is-outlined', 'is-primary', 'is-small'];
  const clsLI = ['far', 'fa-thumbs-up', 'icons'];

  likeBtn.classList.add(...clsLC);
  likeIcon.classList.add(...clsLI);

  // fill like button if current user has liked
  likes.forEach((like) => {
    if (like.userID === sessionStorage.getItem('userID')) {
      likeBtn.classList.remove('is-outlined');
      likeBtn.classList.add('is-primary');
    }
  });

  likeBtn.onclick = async function() {
    const route = 'likes';
    const body = new FormData();

    let checkUserID = false;
    let currentLikeID = 0;

    likes.forEach((like) => {
      if (like.userID === sessionStorage.getItem('userID')) {
        checkUserID = true;
        currentLikeID = like.likeID;
      }
    });

    if (!checkUserID) {
      body.append('userID', sessionStorage.getItem('userID'));
      body.append('entryID', entry.entryID);
      api.post(route, body);

      const newLikes = await api.get(`likes/${entry.entryID}`);

      amountOfLikes = newLikes.data.length;
      likeBtn.innerHTML = amountOfLikes;
      likeBtn.appendChild(likeIcon);
      likes = newLikes.data;

      likeBtn.classList.remove('is-outlined');
      likeBtn.classList.add('is-primary');
    } else {
      api.remove(route, currentLikeID);

      const newLikes = await api.get(`likes/${entry.entryID}`);

      amountOfLikes = newLikes.data.length;
      likeBtn.innerHTML = amountOfLikes;
      likeBtn.innerHTML = `${amountOfLikes}`;
      likes = newLikes.data;
      likeBtn.appendChild(likeIcon);

      likeBtn.classList.add('is-outlined');
      likeBtn.classList.remove('is-primary');
    }
  };

  likeBtn.appendChild(likeBtnText);
  likeBtn.appendChild(likeIcon);

  return likeBtn;
}
