// async function callDB() {
//   let users = await db.getUsers();
//   console.log(users);
// }
//
// // db.postUsers();
// callDB();

fetch("api/users")
.then(response => response.json())
.then(dat => console.log(JSON.stringify(dat)))
.catch(err => console.log(err));
