// function isset(item) {
//   return item !== null;
// }
//
// //  build entries
// async function buildProfileEntries() {
//   entriesContainer.innerHTML = "";
//   let loader = document.createElement("DIV");
//   loader.classList.add("loader");
//   document.body.appendChild(loader);
//
//   let userRoute = "entries/user/" + sessionStorage.getItem("userID");
//   let userEntries = await api.get(userRoute);
//
//   for (let i = 0; i < userEntries.data.length; i++) {
//     console.log(userEntries.data);
//     let commentRoute = "comments/entries/" + userEntries.data[i].entryID;
//     let comments = await api.get(commentRoute);
//     console.log(comments.data);
//     let newEntry = builder.entries(userEntries.data[i], comments.data);
//     entriesContainer.appendChild(newEntry);
//   }
//
//   loader.remove();
// }
//
// if (isset(sessionStorage.getItem("userID"))) {
//   buildProfileEntries();
// }
