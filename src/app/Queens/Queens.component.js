import { html, LitElement, render, css } from "lit";
import { QueensService } from "./queens.service";

export class QueensComponent extends LitElement {
  constructor() {
    super();
    this.service = new QueensService();
  }

  static get properties() {
    return { queens: { type: Object } };
  }

  static get styles() {
    return css`
      #queens {
        border: pink solid 3px;
        font-family: "Fira Code";
      }

      .queens-title {
        font-family: "Kotta One", serif;
        text-align: center;
      }
      .queens-card {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
      }
      .queens-image {
        width: 15%;
        height: 20%;
      }

      li::marker {
        content: "👑";
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.queens = await this.service.getQueens();
  }

  render() {
    return html` <div id="queens">
      <h3 class="queens-title">Meet the ladies</h3>
      <div class="queens-card">
        <ul>
          ${this.queens &&
          this.queens.data.map(
            (queen) =>
              html`<img
                  class="queens-image"
                  src=${queen.image_url}
                  alt=${queen.name}
                />
                <li>${queen.name}</li>`
          )}
        </ul>
      </div>
      <button @click="${(e) => this.clickMe(e)}>">WIN</button>
    </div>`;
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

customElements.define("drag-queens", QueensComponent);
