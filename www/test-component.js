(() => {
  // src/test-component.scss
  var test_component_default = `:host {
  border: solid cyan 1px;
}`;

  // src/test-component.js
  var TestComponent = class extends HTMLElement {
    constructor() {
      super();
      this.name = "World";
      this.shadow = this.attachShadow({ mode: "open" });
      this.sheet = new CSSStyleSheet();
      this.sheet.replaceSync(test_component_default);
      this.shadowRoot.adoptedStyleSheets = [this.sheet];
    }
    static get observedAttributes() {
      return ["name"];
    }
    attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue)
        return;
      this[property] = newValue;
    }
    connectedCallback() {
      this.shadow.innerHTML = `<span>Hello ${this.name}!</span>`;
    }
    disconnectedCallback() {
    }
    adoptedCallback() {
    }
  };
  window.customElements.define("test-component", TestComponent);
})();
