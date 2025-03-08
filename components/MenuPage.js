export class MenuPage extends HTMLElement {
  constructor() {
    super();
  }
  // ConnectedCallback fires when component attaches to DOM
  connectedCallback() {
    console.log("menu-page loaded");
    console.log("menu-page connected:", this.isConnected); // Check if it's in the DOM
    if (!this.isConnected) {
        console.error("menu-page is not connected to the DOM.");
        return;
    }
    const template = document.getElementById("menu-page-template");

    if (!template) {
        console.error("Template 'menu-page-template' not found!");
        return;
    }

    console.log("Template content before cloning:", template.content);
    const content = template.content.cloneNode(true);
    console.log("Cloned content:", content); // Log the cloned content

    this.appendChild(content);
  }
}

customElements.define("menu-page", MenuPage);