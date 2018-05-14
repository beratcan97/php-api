const api = (function() {

  async function login(body) {
    const postOptions = {
      method: "POST",
      body: body,
      credentials: "include"
    };

    fetch("/login", postOptions)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("userID", data.data[0]);
        localStorage.setItem("username", data.data[1]);
      })
      .catch(err => console.log(err));
  }

  async function get(route) {
    route = route.toString();
    let get = await fetch ("/api/" + route)
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
      .then(res => res.text())
      .then(data => data)
      .catch(err => console.log(err));
  }

  async function update(route, id, body) {
    route = route.toString();

    const patchOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
    get: get,
    getOne: getOne,
    post: post,
    update: update,
    remove: remove
  };
})();
