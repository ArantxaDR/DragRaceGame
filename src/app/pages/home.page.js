export class HomePage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
           Home page bitches`;
  }
}

customElements.define("home-page", HomePage);
