const api = (function() {

  async function login(body) {

    const postOptions = {
      method: "POST",
      body: body,
      credentials: "include" // <-- muy importante
    };

    let login = await fetch("/login", postOptions)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));

    return login;
  }

  async function logout() {
    let logout = await fetch("/logout")
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));

    return logout;
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
    // example
    // val = {
    //   "username": "göran",
    //   "password": "hoppla",
    //   "createdAt": "1991-07-24"
    // }

    route = route.toString();

    const postOptions = {
      method: "POST",
      body: body,
      credentials: "include" // <-- muy importante
    };

    let post = fetch("/api/" + route, postOptions)
      .then(res => res.json())
      .then(data => data);
    console.log("posted");

    return post;
  }

  async function update(route, id, body) {
    route = route.toString();

    const patchOptions = {
      method: "PATCH",
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
    get: get,
    getOne: getOne,
    post: post,
    update: update,
    remove: remove
  };
})();
