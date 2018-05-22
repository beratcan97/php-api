async function login(body) {
  const postOptions = {
    method: 'POST',
    body,
    credentials: 'include',
  };

  //
  fetch('/login', postOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.hasOwnProperty('data')) {
        console.log(data);
        sessionStorage.setItem('userID', data.data[0]);
        sessionStorage.setItem('username', data.data[1]);
        sessionStorage.setItem('admin', data.data[2]);
        window.location.href = '/';
      } else {
        alert(data.error);
      }
    })
    .catch((err) => console.log(err));
}

async function register(body) {
  const postOptions = {
    method: 'POST',
    body,
    credentials: 'include',
  };

  fetch('/register', postOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.href = '/login';
    })
    .catch((err) => console.log(err));
}

async function get(route) {
  route = route.toString();
  const get = await fetch(`/api/${route}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return get;
}

async function getOne(route, id) {
  route = route.toString();
  const getOne = await fetch(`/api/${route}/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return getOne;
}

async function post(route, body) {
  route = route.toString();

  const postOptions = {
    method: 'POST',
    body,
    credentials: 'include',
  };

  fetch(`/api/${route}`, postOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

async function update(route, id, body) {
  route = route.toString();
  const content = body.content;
  const title = body.title;

  const patchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `content=${content}&title=${title}`,
  };

  const patch = fetch(`/api/${route}/${id}`, patchOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return patch;
}

async function updateUser(id, body) {
  const username = body.username;
  const admin = body.admin;

  const patchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${username}&admin=${admin}`,
  };

  const patch = fetch(`/api/users/${id}`, patchOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return patch;
}

async function remove(route, id) {
  route = route.toString();

  const removeOptions = {
    method: 'DELETE',
  };

  const remove = fetch(`/api/${route}/${id}`, removeOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return remove;
}

export { login, get, getOne, post, update, remove, register, updateUser };
