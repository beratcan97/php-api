async function callDB() {
  let users = await db.getUsers();
  console.log(users);
}

// db.postUsers();
db.getUsers();
