class DragGame extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ` <drag-memory></drag-memory> `;
  }
}
customElements.define("drag-game-page", DragGame);
