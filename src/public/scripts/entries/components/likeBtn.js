import * as api from "../../fetch.js";
import { create } from "../../utils";

export async function LikeBtn(entry, likes) {
  let amountOfLikes;
  let likeBtn = create.elem("button");

  const clsLC = ["button", "is-outlined", "is-info", "is-small"];
  likeBtn.classList.add(...clsLC);

  if (!likes) {
    amountOfLikes = 0;
  } else {
    amountOfLikes = likes.length;
  }
  
  let likeIcon = create.elem("i");
  likeIcon.classList.add("far");
  likeIcon.classList.add("fa-thumbs-up");
  likeIcon.classList.add("icons");
  let likeBtnText = create.text(amountOfLikes);

  likeBtn.onclick = async function() {
    var route = "likes";
    let body = new FormData();
    let checkUserID = false;
    let currentLikeID = 0;

    likes.forEach(like => {
      if (like.userID.includes(sessionStorage.getItem("userID"))) {
        // THIS MUST BE CHANGED FROM "includes" TO "===" !!!
        checkUserID = true;
        currentLikeID = like.likeID;
      }
    });

    if (!checkUserID) {
      body.append("userID", sessionStorage.getItem("userID"));
      body.append("entryID", entry.entryID);
      api.post(route, body);

      let newLikes = await api.get("likes/" + entry.entryID);
      amountOfLikes = newLikes.data.length;
      likeBtn.innerHTML = amountOfLikes;
      likeBtn.appendChild(likeIcon);
      likes = newLikes.data;
    } else {
      api.remove(route, currentLikeID);
      let newLikes = await api.get("likes/" + entry.entryID);
      amountOfLikes = newLikes.data.length;
      likeBtn.innerHTML = amountOfLikes;
      likeBtn.appendChild(likeIcon);
      likes = newLikes.data;
    }
  };

  likeBtn.appendChild(likeBtnText);
  likeBtn.appendChild(likeIcon);


  return likeBtn;
}
