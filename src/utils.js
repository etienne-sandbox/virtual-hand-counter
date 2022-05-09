// A small helper to create an element with some text content
export function createElement(type, content) {
  var elem = document.createElement(type);
  if (content !== undefined) {
    elem.innerText = content;
  }
  return elem;
}
