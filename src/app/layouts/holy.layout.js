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
        grid-template-rows: 100px 35px 1fr 100px 200px;
        grid-template-areas: "my-header my-header my-header" "my-nav my-nav my-nav" "my-main my-main my-main" "my-aside my-aside my-aside" "my-footer my-footer my-footer";
      }

      #holy-header {
        grid-area: my-header;
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
      }

      #holy-nav {
        grid-area: my-nav;
        background-color: var(--holy-nav-background-color, cornflowerblue);
      }

      #holy-aside {
        grid-area: my-aside;
        background-color: var(--holy-aside-background-color, darkmagenta);
      }

      #holy-content {
        padding: 1rem;
        grid-area: my-main;
        background-color: var(--home-background-color, lightblue);
      }

      #holy-footer {
        grid-area: my-footer;
        background-color: var(--holy-footer-background-color, darkorchid);
      }

      @media (min-width: 600px) and (max-width: 1000px) {
        #holy {
          grid-template-columns: 200px 1fr 200px;
          grid-template-rows: 50px 1fr 1fr 50px;
          grid-template-areas: "my-header my-header my-header" "my-nav my-nav my-nav" "my-aside my-main my-main" "my-footer my-footer my-footer";
        }
      }

      @media (min-width: 1001px) {
        #holy {
          grid-template-columns: 200px 1fr 200px;
          grid-template-rows: 50px 1fr 50px;
          grid-template-areas: "my-header my-header my-header" "my-nav my-main my-aside" "my-footer my-footer my-footer";
        }
      }
    `;
  }

  render() {
    return html`
      <div id="holy">
        <header id="holy-header" role="banner">
          <slot name="header"></slot>
        </header>
        <nav id="holy-nav">
          <slot name="nav"></slot>
        </nav>
        <main id="holy-content" role="main">
          <slot name="section"></slot>
        </main>
        <aside id="holy-aside" role="complementary">
          <slot name="aside"></slot>
        </aside>
        <footer id="holy-footer" role="contentinfo">
          <slot name="footer"></slot>
        </footer>
      </div>
    `;
  }
}

customElements.define("holy-layout", HolyLayout);
