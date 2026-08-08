class card_footer extends HTMLElement {
  connectedCallback({titulo, conteudo, imagem}) {
    this.innerHTML = `
      <div>
        <h2>${titulo}</h2>
        <p>${conteudo}</p>
        <img src="${imagem}">
        <button>${titulo}</button>
      </div>
    `;
  }
}
customElements.define('card-footer', card_footer);
