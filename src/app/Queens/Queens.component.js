import { html, LitElement, render, css } from "lit";
import { QueensService } from "./queens.service";

export class QueensComponent extends LitElement {
  constructor() {
    super();
    this.service = new QueensService();
  }

  static get properties() {
    return { hello: { type: String }, queens: { type: Object } };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border: pink solid 3px;
      }
      p {
        color: var(--color-queens, blue);
      }
      li::marker {
        content: "👑";
      }
      ::slotted(p) {
        color: red;
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.hello = this.getAttribute("hello") || "Hello, hello, hello";
    this.queens = await this.service.getQueens();
  }

  render() {
    return html` <p part="hello">${this.hello} SHADOW</p>
      <slot></slot>
      <button @click="${(e) => this.clickMe(e)}>">WIN</button>
      <div id="queens">
        <ul>
          ${this.queens &&
          this.queens.data.map((queen) => html`<li>${queen.name}</li>`)}
        </ul>
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
