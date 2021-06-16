import { html, LitElement } from "lit";

export class DragMemoryComponent extends LitElement {
  constructor() {
    super();
    this.flips;
  }
  render() {
    return html`<h1>Are you a winner?</h1>

      <div class="game-container">
        <h3 class="game-flips">Flips: <span>${this.flips}</span></h3>
        <div class="game-grid"></div>
      </div>
      <!-- 
      <button @click="${(e) => this.clickMe(e)}>">WIN</button> -->`;
  }
  clickMe(e) {
    console.log(e);
    const message = new CustomEvent("queens:message", {
      bubbles: true,
      detail: {
        msg: "BAAAM"
      }
    });
    this.dispatchEvent(message);
  }
}
customElements.define("drag-memory", DragMemoryComponent);
