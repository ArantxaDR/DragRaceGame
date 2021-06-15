import { css, html, LitElement } from "lit";

export class CardLayout extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      #card {
        display: inline-block;
        list-style: none;
        width: 45%;
        height: 200px;
        margin: 0 auto;
        padding: 4rem 1rem 7rem 1rem;
        background-color: #ff89a4;
        position: relative;
        &:after {
          content: "";
          display: block;
          width: 0px;
          height: 0px;
          background-color: skyblue;
          top: 0px;
          right: 0px;
          border-bottom: 20px solid darken(#ff89a4, 5%);
          border-left: 20px solid darken(#ff89a4, 5%);
          border-right: 20px solid yellow;
          border-top: 20px solid yellow;
          position: absolute;
          filter: drop-shadow(-5px 5px 3px rgba(0, 0, 0, 0.5));
        }
        &:before {
          content: "";
          display: block;
          width: 0px;
          height: 0px;
          border-top: 40px solid darken(#ff89a4, 5%);
          border-right: 40px solid darken(#ff89a4, 5%);
          border-left: 40px solid yellow;
          border-bottom: 40px solid yellow;
          bottom: 0px;
          left: 0px;
          position: absolute;
          filter: drop-shadow(7px -7px 5px rgba(0, 0, 0, 0.5));
          margin-right: 10%;
        }
        &:nth-of-type(1) {
          margin-right: 9%;
        }
      }

      #card-title {
        color: snow;
        margin-bottom: 1rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      #card-text {
        color: snow;
        font-size: 0.9rem;
        line-height: 140%;
      }
    `;
  }

  render() {
    return html`
      <div id="card">
        <slot name="card"></slot>
        <h4 id="card-title">
          <slot name="card-title"></slot>
        </h4>
        <p id="card-text">
          <slot name="card-text"></slot>
        </p>
      </div>
    `;
  }
}

customElements.define("card-layout", CardLayout);
