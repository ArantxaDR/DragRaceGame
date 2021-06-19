import { css, html, LitElement } from "lit";
import "random-drag-hashtags/random-drag-hashtags";

import "./../../assets/images/rupaul.jpg";

export class HomePage extends LitElement {
  static get styles() {
    return css`
      .main {
        font-family: "Kotta One", serif;
      }
      .main-title {
        text-align: center;
        font-family: "Niconne";
        color: darkred;
        font-size: xx-large;
      }
      .main-title2 {
        text-align: center;
        color: #2b1010;
      }
      .main-content {
        display: flex;
        flex-direction: column;
        margin: 1em;
      }
      .main-content_text {
        width: 100%;
        text-align: left;
        line-height: 200%;
        color: #2b1010;
      }
      .main-content_image {
        width: 20rem;
        height: 13rem;
        border-radius: 50%;
        position: relative;
      }
      .main-button {
        height: 3rem;
        width: 10rem;
        position: relative;
        left: 25%;
        top: -10px;
        border-radius: 30%;
        background-color: var(--btn-color, #36f279);
        border-style: none;
        box-shadow: 5px 3px 7px var(--btn-shadow-color, #80af90);
      }
      @media (min-width: 600px) and (max-width: 1000px) {
        .main-content_image {
          left: 300px;
        }
      }
      @media (min-width: 1001px) {
        .main-content_image {
          left: 200px;
        }
      }
    `;
  }
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="main">
        <h2 class="main-title">Welcome to RuPaul's DragRace</h2>
        <h4 class="main-title2">Reading is Fun-da-men-tal!!</h4>
      </div>
      <div class="main-content">
        <p class="main-content_text">
          This is an American reality competition television series, the first
          in the Drag Race franchise. The show documents RuPaul in the search
          for "America's next drag superstar". RuPaul plays the role of host,
          mentor, and head judge for this series, as contestants are given
          different challenges each week. RuPaul's Drag Race employs a panel of
          judges, who critique contestants' progress throughout the competition.
          The title of the show is a play on drag queen and drag racing, and the
          title sequence and song "Drag Race" both have a drag-racing theme.
        </p>
        <img
          class="main-content_image"
          src="./../../assets/images/rupaul.jpg"
          alt="RuPaul in full drag"
        />
      </div>

      <random-drag-hashtags></random-drag-hashtags>
    `;
  }
}

customElements.define("home-page", HomePage);
