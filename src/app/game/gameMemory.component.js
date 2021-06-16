// import { QueensService } from "./../Queens/queens.service";

import { LitElement, css, html } from "lit";

export class MemoryComponent extends LitElement {
  constructor() {
    super();
    // this.service = new QueensService();
    // this.flips = 0;
  }

  static get properties() {
    return { queens: { type: Object }, flips: { type: Number } };
  }
  static get styles() {
    return css`
      .game-grid {
        display: flex;
        flex-wrap: wrap;
        height: 300px;
        width: 400;
      }
    `;
  }
  // async connectedCallback() {
  //   super.connectedCallback();
  //   this.queens = await this.service.getQueens();
  // }

  render() {
    return html`
      <h1 class="game-title">Start your engines and may the best woman win</h1>
      <!-- <div class="game-info">
        <h3 class="game-flips">Flips: <span>${this.flips}</span></h3>
      </div>
      <div class="game-grid">
        <div class="game-cards" @click=${(e) => this.increment(e)}></div>
      </div> -->
    `;
  }

  // increment(e) {
  //  e.preventDefault();
  //   this.flips++;
  // }
}
customElements.define("memory-drag", MemoryComponent);
