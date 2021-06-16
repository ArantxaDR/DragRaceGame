import { html, LitElement } from "lit";

class DragGame extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html` <h1>Are you a winner?</h1> `;
  }
}
customElements.define("drag-game-page", DragGame);
