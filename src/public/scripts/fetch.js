const db = (function() {

  async function getUsers() {
    let data = await fetch("api/users")
    .then(response => response.json())
    .then(data => data);

    return data;
  }

  async function postUsers() {
    let val = {
      username: "göran",
      password: "hoppla",
      createdAt: "1991-07-24",
      admin: false
    }

    const postOptions = {
      method: 'POST',
      body: val,
      // credentials: 'include' // <-- muy importante
    };

    let data = fetch('api/register', postOptions)
      .then(res => res.json())
      .then(dat => console.log(dat.data.content + " was posted"));
      console.log("posted");


    // return data;
  }

  return {
    getUsers: getUsers,
    postUsers: postUsers
  }
})();
