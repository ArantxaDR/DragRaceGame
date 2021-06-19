export class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <home-component>
    
    </home-component>
    <random-drag-hashtags>
    </random-drag-hashtags`;
  }
}

customElements.define("home-page", HomePage);
