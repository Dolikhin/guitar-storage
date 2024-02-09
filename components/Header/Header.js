class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
    console.log('dfhdfkjdf')
  }

  render(count) {
    const html = `
      <div class="header-container">
        <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
          🔥 ${count}
        </div>
      </div>
    `;

    ROOT_HEADER.innerHTML = html;
    
  }
}

const headerPage = new Header();




