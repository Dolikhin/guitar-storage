function render() {
  
  const productsStore = localStorageUtil.getProducts();
  
  headerPage.render(productsStore.length);
  productsPage.render();

}

let CATALOG = [];

// https://api.jsonserve.com/Z0eXEJ
//'server/catalog.json'
fetch('server/catalog.jsongit')
  .then(res => res.json())
  .then(body => {
    CATALOG = body;
    render();
  })
  .catch(error => {
    vonsole.log(error);
  })