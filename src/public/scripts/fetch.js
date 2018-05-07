const db = (function() {

  function getUsers() {
    let data = await fetch("/users")
    .then(response => response.json())
    .then(data => data);

    return data;
  }

  return {
    getUsers: getUsers
  }
})();
