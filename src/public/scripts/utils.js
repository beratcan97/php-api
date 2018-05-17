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

function getQueryParams(qs) {
  qs = qs.split("+").join(" ");

  let params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while ((tokens = re.exec(qs))) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

export { get, isset, create, getQueryParams };
