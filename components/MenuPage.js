export class MenuPage extends HTMLElement {
  constructor() {
    super();

    // Typically you create the shadowDOM in the constructor
    this.root = this.attachShadow({ mode: 'open' }); // allow outside access to inside this inner DOM

    const styles = document.createElement("style");

    this.root.appendChild(styles);

    // load CSS
    async function loadCSS() {
        const request = await fetch("./components/MenuPage.css");
        const css = await request.text();
        styles.textContent = css;
    }
    loadCSS();
  }

  // When component is attached to DOM
  connectedCallback() {
    // console.log("menu-page connected:", this.isConnected); // Check if it's in the DOM
    if (!this.isConnected) {
        console.error("menu-page is not connected to the DOM.");
        return;
    }

    const template = document.getElementById("menu-page-template");
    if (!template) {
        console.error("Template 'menu-page-template' not found!");
        return;
    }
    // console.log("Template content before cloning:", template.content);

    const content = template.content.cloneNode(true);
    // console.log("Cloned content:", content); // Log the cloned content

    this.root.appendChild(content);
  }
}

customElements.define("menu-page", MenuPage);