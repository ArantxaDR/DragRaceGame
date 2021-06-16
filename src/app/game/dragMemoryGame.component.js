import { html, LitElement } from "lit";

export class DragMemoryComponent extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`<drag-memory></drag-memory> `;
  }
}
customElements.define("drag-memory", DragMemoryComponent);
