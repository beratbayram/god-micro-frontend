import "./index.css";

const component = `
<div class="vanilla-container">
  <div>Name: vanilla-app</div>
  <div>Framework: vanilla</div>
  <div>Language: TypeScript</div>
  <div>(:3003)</div>
  <lit-button></lit-button>
</div>`;

const root = document.getElementById("app")

if(root) root.innerHTML = component;

export default function (element: Element) {
  return (element.innerHTML = component);
}
