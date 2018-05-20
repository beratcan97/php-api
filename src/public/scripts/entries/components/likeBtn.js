import * as api from '../../fetch.js';
import { create } from '../../utils';

export async function LikeBtn(entry, likes) {
  let amountOfLikes;
  const likeBtn = create.elem('button');

  const clsLC = ['button', 'is-outlined', 'is-info', 'is-small'];
  likeBtn.classList.add(...clsLC);

  if (!likes) {
    amountOfLikes = 0;
  } else {
    amountOfLikes = likes.length;
  }

  const likeBtnText = create.text(`${amountOfLikes} Likes`);

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
      likeBtn.innerHTML = `${amountOfLikes} Likes`;
      likes = newLikes.data;

      likeBtn.classList.remove('is-outlined');
      likeBtn.classList.add('is-primary');
    } else {
      api.remove(route, currentLikeID);
      const newLikes = await api.get(`likes/${entry.entryID}`);

      amountOfLikes = newLikes.data.length;
      likeBtn.innerHTML = `${amountOfLikes} Likes`;
      likes = newLikes.data;

      likeBtn.classList.add('is-outlined');
      likeBtn.classList.remove('is-primary');
    }
  };

  likeBtn.appendChild(likeBtnText);

  return likeBtn;
}
