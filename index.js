function render() {
  
  const productsStore = localStorageUtil.getProducts();
  
  headerPage.render(productsStore.length);
  productsPage.render();

}

spinnerPage.render();
let CATALOG = [];


// https://api.jsonserve.com/Z0eXEJ
//'server/catalog.json'
fetch('server/catalog.json')
  .then(res => res.json())
  .then(body => {
    CATALOG = body;
    
    setInterval(() => {
      spinnerPage.handleClear();
      render();
    }, 1000);
    
    
  })
  .catch(error => {
    vonsole.log(error);
  });

