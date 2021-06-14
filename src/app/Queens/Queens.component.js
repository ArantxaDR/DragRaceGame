import { QueensService } from "./queens.service";

export class QueensComponent extends HTMLElement {
  constructor() {
    super();
    this.service = new QueensService();
  }
  async connectedCallback() {
    this.queens = await this.service.getQueens();
    this.hello = this.getAttribute("hello") || "Hello, hello, hello";

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
            :host{
                display: block;
                border: pink solid 3px;
            }
            p {
                color: var(--color-queens, blue);
            }
            ::slotted(p){
                color: red;
            }
        </style>   
        <p part="hello">${this.hello} SHADOW</p>
        <slot></slot>
        <button>WIN</button>
        <div id="queens">
            <ul>${this.queens.data
              .map(
                (queen) => `
                <li>${queen.image_url}</li>`
              )
              .join("")}
            </ul>
        </div>
        `;
    this.button = this.shadowRoot.querySelector("button");
    this.button.onclick = (e) => this.clickMe(e);
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
