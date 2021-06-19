export class QueensPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <drag-queens>
    
    </drag-queens>`;
  }
}

customElements.define("queens-page", QueensPage);
