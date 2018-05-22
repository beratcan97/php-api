// Helpers
const get = {
  id: arg => document.getElementById(arg),
  class: arg => document.getElementsByClassName(arg)
};

const create = {
  elem: arg => document.createElement(arg.toString()),
  text: arg => document.createTextNode(arg.toString())
};

function isset(item) {
  return item !== null;
}

export { get, isset, create, getQueryParams };
