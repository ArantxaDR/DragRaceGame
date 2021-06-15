import { html, LitElement, render, css } from "lit";
import { QueensService } from "./queens.service";
import "./../layouts/card.layout";

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
        border: pink dotted 3px;
      }

      .queens-title {
        font-family: "Kotta One", serif;
        text-align: center;
      }
      .queens-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 0.5rem;
        margin-right: 1rem;
      }

      @media (min-width: 600px) and (max-width: 1000px) {
        .queens-wrapper {
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(5, 1fr);
          gap: 0.5rem;
        }
      }
      @media (min-width: 1001px) {
        .queens-wrapper {
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(5, 1fr);
          gap: 0.5rem;
        }
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.queens = await this.service.getQueens();
  }

  render() {
    return html` <div id="queens">
      <h2 class="queens-title">Meet the ladies</h2>

      <div class="queens-wrapper">
        ${this.queens &&
        this.queens.data.map(
          (queen) =>
            html`<card-layout>
              <div slot="card">
                <h4 slot="card-title">${queen.name}</h4>
                <img slot="card-img" src=${queen.image_url} alt=${queen.name} />
                <p slot="card-text">${queen.quote}</p>
              </div>
            </card-layout>`
        )}
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
