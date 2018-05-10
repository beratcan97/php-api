const api = (function() {


  // login och logout är egna funktioner eftersom
  // de inte routas mot /api/... utan går direkt till /login eller /logout
  async function login(body) {
    const postOptions = {
      method: "POST",
      body: body,
      credentials: "include"
    };

    fetch("/login", postOptions)
    .then(response => response.text())
    .then(data => console.log(data[1] + " has logged in"))
    .catch(err => console.log(err));

    // return login;
  }

  async function logout() {
    let logout =  await fetch("/logout")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

    return logout;
  }

  async function index() {
    let index = await fetch("/")
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err));

    return index;
  }

  async function get(route) {
    route = route.toString();
    let get = await fetch("/api/" + route)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err));

    return get;
  }

  async function getOne(route, id) {
    route = route.toString();
    let getOne = await fetch("/api/" + route + "/" + id)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err));

    return getOne;
  }

  async function post(route, body) {
    route = route.toString();

     const postOptions = {
       method: "POST",
       body: body,
       credentials: "include"
     };

    fetch("/api/" + route, postOptions)
      .then(res => res.json())
      .then(data => {
        data.forEach(item => {
          console.log(item + " was posted");
        });
      })
      .catch(err => console.log(err));
  }

  async function update(route, id, body) {
    route = route.toString();

    const patchOptions = {
      method: "PATCH",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    };

    let patch = fetch("/api/" + route + "/" + id, patchOptions)
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err));

    return patch;
  }

  async function remove(route, id) {
    route = route.toString();

    const removeOptions = {
      method: "DELETE"
    };

    let remove = fetch("/api/" + route + "/" + id, removeOptions)
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err));

    return remove;
  }

  return {
    login: login,
    logout: logout,
    get: get,
    getOne: getOne,
    post: post,
    update: update,
    remove: remove
  };
})();
