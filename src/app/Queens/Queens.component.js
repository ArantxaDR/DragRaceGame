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
        border: pink dotted 3px;
        font-family: "Fira Code";
      }

      .queens-title {
        font-family: "Kotta One", serif;
        text-align: center;
        color: #4db1f3;
        text-shadow: 5px 5px 0px #71f8e6;
      }
      .queens-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 1fr);
        gap: 0.5rem;
        margin-right: 1rem;
      }
      .card {
        display: flex;
        width: 17rem;
        height: 25rem;
        margin: 0 auto;
        background-color: #98caeb;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        box-shadow: inset 0 0 5px 8px #408591;
        border: 11px double #5ca18c;
        border-radius: 0 44px;
      }
      .card:hover {
        box-shadow: 10px 10px 93px 0px #38bdd4;
      }
      .card-title {
        color: greenyellow;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-family: "Kotta One", serif;
        padding-bottom: 0.9rem;
        padding-top: 0.5rem;
      }
      .card-img {
        width: 8rem;
        height: 8rem;
        border: #27b9ad ridge 4px;
        border-radius: 60% 40% 45% 55% / 54% 34% 66% 46%;
        box-shadow: 2px 0px 5px #145751;
      }
      .card-text {
        color: snow;
        font-size: 0.9rem;
        line-height: 140%;
        font-family: "Kotta One", serif;
        padding: 0.9rem;
      }

      @media (min-width: 600px) and (max-width: 1000px) {
        .queens-wrapper {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(5, 1fr);
          gap: 0.5rem;
        }
      }
      @media (min-width: 1001px) {
        .queens-wrapper {
          grid-template-columns: repeat(4, 1fr);
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
      <h1 class="queens-title">Category is: Runway Stravaganza</h1>
      <div class="queens-wrapper">
        ${this.queens &&
        this.queens.data.map(
          (queen) => html` <div class="card" id="elem-${queen.id}">
            <h4 class="card-title">${queen.name}</h4>
            <img class="card-img" src=${queen.image_url} alt="${queen.name}" />
            <p class="card-text">${queen.quote}</p>
          </div>`
        )}
      </div>
    </div>`;
  }
}

customElements.define("drag-queens", QueensComponent);
