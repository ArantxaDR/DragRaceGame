import { html, LitElement } from "lit";

export class GamePage extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html`<memory-game></memory-game>`;
  }
}
customElements.define("game-page", GamePage);
