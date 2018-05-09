const api = (function() {

  async function get(route) {
    route = route.toString();
    let data = await fetch("api/" + route)
      .then(response => response.json())
      .then(dat => dat)
      .catch(err => console.log(err));

    return data;
  }

  async function getOne(route, id) {
    route = route.toString();
    let data = await fetch("api/" + route + "/" + id)
      .then(response => response.json())
      .then(dat => dat)
      .catch(err => console.log(err));

    return data;
  }

  async function post(route, val) {
    // example
    // val = {
    //   "username": "göran",
    //   "password": "hoppla",
    //   "createdAt": "1991-07-24"
    // }

    route = route.toString();

    const postOptions = {
      method: "POST",
      body: val,
      credentials: "include" // <-- muy importante
    };

    let post = fetch("api/" + route, postOptions)
      .then(res => res.json())
      .then(data => data);
    console.log("posted");

    return post;
  }

  async function update(route, id, val) {
    route = route.toString();

    const patchOptions = {
      method: "PATCH",
      body: val
    };

    let patch = fetch("api/" + route + "/" + id, patchOptions)
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

    let remove = fetch("api/" + route + "/" + id, removeOptions)
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
