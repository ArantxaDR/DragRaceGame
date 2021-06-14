import { css, html, LitElement } from "lit";

export class HomePage extends LitElement {
  static get styles() {
    return css`
      .main-content {
        font-family: "Fira Code";
        line-height: 250%;
      }
      .main-content_title {
        text-align: center;
        font-family: "Kotta One", serif;
      }
      .main-content_title2 {
        text-align: center;
      }
      .main-content_text {
        text-align: left;
      }
    `;
  }
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="main-content">
        <h3 class="main-content_title">
          Welcome to RuPaul's DragRace fan page
        </h3>
        <h5 class="main-content_title2">We're here to celebrate diversity</h5>
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
          src="./../../assets/images/rupaul.png"
          alt="RuPaul in full drag"
        />
      </div>
    `;
  }
}

customElements.define("home-page", HomePage);
