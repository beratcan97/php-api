// Helpers
const get = {
  id: arg => document.getElementById(arg),
  class: arg => document.getElementsByClassName(arg)
};

function isset(item) {
  return item !== null;
}

const create = {
  elem: arg => document.createElement(arg.toString()),
  text: arg => document.createTextNode(arg.toString())
};

export { get, isset, create };
