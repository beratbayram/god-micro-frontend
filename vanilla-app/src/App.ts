import "./index.css";

interface Props {
  msg?: string;
}

function buildComponent(props?: Props){
  return `
  <div class="vanilla-container">
    <div>No Framework (:3003)</div>
    <input type="text" value="${props?.msg}" disabled/>
    <lit-button></lit-button>
  </div>
  `;
}


const root = document.getElementById("app")

if(root) root.innerHTML = buildComponent();

export default function(element: Element,props: Props) {
  return (element.innerHTML = buildComponent(props));
}
