import { css, html, LitElement } from "lit";

export class GamePage extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      .game-title {
        border: red solid 3px;
      }
    `;
  }
  render() {
    return html`
      <h1 class="game-title">Start your engines and may the best woman win</h1>
    `;
  }
}
customElements.define("game-page", GamePage);
