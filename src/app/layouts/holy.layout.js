import { css, html, LitElement } from "lit";

export class HolyLayout extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      #holy {
        color: black;
        margin: 0 auto;
        min-height: 100vh;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 50px 35px 1fr 50px;
        grid-template-areas: "my-header my-header my-header" "my-nav my-nav my-nav" "my-main my-main my-main" "my-footer my-footer my-footer";
      }

      #holy-header {
        grid-area: my-header;
        background-color: var(--holy-header-background-color, #e24d5c);
        text-align: center;
        color: var(--holy-header-color, #fae7c8);
        font-family: "Niconne", cursive;
        font-size: 1.5rem;
        font-weight: 700;
        text-shadow: 5px 5px 0px var(--holy-header-first-shadow, #eb452b),
          10px 10px 0px var(--holy-header-second-shadow, #efa032),
          15px 15px 0px var(--holy-header-third-shadow, #46b59b),
          20px 20px 0px var(--holy-header-fourth-shadow, #017e7f),
          25px 25px 0px var(--holy-header-fifth-shadow, #052939),
          30px 30px 0px var(--holy-header-sixth-shadow, #c11a2b),
          35px 35px 0px var(--holy-header-seventh-shadow, #c11a2b);
      }

      #holy-nav {
        grid-area: my-nav;
        background-color: var(--holy-nav-background-color, #81f3e0);
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: space-around;
        font-family: "Kotta One", serif;
      }

      #holy-content {
        grid-area: my-main;
        background-color: var(--home-background-color, #c5f3e0);
      }

      #holy-footer {
        grid-area: my-footer;
        background-image: linear-gradient(
          270deg,
          #ff99ff 0,
          #ff91ff 3.33%,
          #ff8bf9 6.67%,
          #ff86e4 10%,
          #ff85cf 13.33%,
          #ff85b9 16.67%,
          #ff89a4 20%,
          #ff8f90 23.33%,
          #ff967d 26.67%,
          #ff9e6a 30%,
          #ffa758 33.33%,
          #ffb047 36.67%,
          #ffb937 40%,
          #ffc228 43.33%,
          #ffca1a 46.67%,
          #f8d110 50%,
          #e5d812 53.33%,
          #d0de1f 56.67%,
          #bae32f 60%,
          #a2e840 63.33%,
          #87ec52 66.67%,
          #67ef65 70%,
          #36f279 73.33%,
          #00f48e 76.67%,
          #00f6a3 80%,
          #00f7b9 83.33%,
          #00f8cf 86.67%,
          #00f9e5 90%,
          #00f9fb 93.33%,
          #00f9ff 96.67%,
          #00f8ff 100%
        );
        padding-left: 2rem;
        padding-top: 0.5rem;
        font-family: "Kotta One", serif;
      }

      @media (min-width: 600px) and (max-width: 1000px) {
        #holy {
          grid-template-columns: 50px 1fr 50px;
          grid-template-rows: 100px 35px 1fr 50px;
          grid-template-areas: "my-header my-header my-header" "my-nav my-nav my-nav" "my-main my-main my-main" "my-footer my-footer my-footer";
        }
      }

      @media (min-width: 1001px) {
        #holy {
          grid-template-columns: 90px 1fr 50px;
          grid-template-rows: 80px 30px 1fr 30px;
          grid-template-areas: "my-header my-header my-header" "my-nav my-nav my-nav" "my-main my-main my-main" " my-footer  my-footer my-footer";
        }
      }
    `;
  }

  render() {
    return html`
      <div id="holy">
        <header id="holy-header" role="banner">
          <slot name="header">
            <img src="myLogo" alt="RuPaul's Drag Race logo" />
          </slot>
        </header>
        <nav id="holy-nav">
          <slot name="nav"></slot>
        </nav>
        <main id="holy-content" role="main">
          <slot name="section"></slot>
        </main>
        <footer id="holy-footer" role="contentinfo">
          <slot name="footer"></slot>
        </footer>
      </div>
    `;
  }
}

customElements.define("holy-layout", HolyLayout);
