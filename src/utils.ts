// A small helper to create an element with some text content
export function createElement(type: string, content?: string) {
  var elem = document.createElement(type);
  if (content !== undefined) {
    elem.innerText = content;
  }
  return elem;
}
