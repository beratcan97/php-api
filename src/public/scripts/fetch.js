const db = (function() {

  async function getUsers() {
    let data = await fetch("api/users")
    .then(response => response.json())
    .then(dat => dat)
    .catch(err => console.log(err));

    console.log(data);
    // return data;
  }

  async function postUsers() {
    let val = {
      "username": "göran",
      "password": "hoppla",
      "createdAt": "1991-07-24"
    }

    const postOptions = {
      method: 'POST',
      body: val,
      // credentials: 'include' // <-- muy importante
    };

    fetch('api/register', postOptions)
      .then(res => res.json())
      .then(dat => console.log(dat + " was posted"));
      console.log("posted");


    // return data;
  }

  return {
    getUsers: getUsers,
    postUsers: postUsers
  }
})();
