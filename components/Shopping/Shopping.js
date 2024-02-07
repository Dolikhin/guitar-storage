class Shopping {

  render() {
    
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';

    htmlCatalog.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog+=`
          <tr>
            <td class="shopping-element__name">${name}</td>
            <td class="shopping-element__price">${price.toLocaleString()} USD</td>
          </tr>
        `;
      }  
    });

    const html = `
      <div class="shopping-container">
        <table>
          ${htmlCatalog}
        </table>
      </div>
    `;

    ROOT_SHOPPING.innerHTML = html;
    console.log('2222');
  }
}

const shoppingPage = new Shopping();
shoppingPage.render();
console.log('5555');
// class Shopping {
//   handleClear() {
//     ROOT_SHOPPING.innerHTML = '';
//   }

//   render() {
//     const productsStore = localStorageUtil.getProducts();
//     let htmlCatalog = '';
//     let sumCatalog = 0;

//     CATALOG.forEach(({ id, name, price }) => {
//       if (productsStore.indexOf(id) !== -1) {
//         htmlCatalog += `
//                     <tr>
//                         <td class="shopping-element__name">⚡️ ${name}</td>
//                         <td class="shopping-element__price">${price.toLocaleString()} USD</td>
//                     </tr>
//                 `;
//         sumCatalog += price;
//       }
//     });

//     const html = `
//             <div class="shopping-container">
//                 <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
//                 <table>
//                     ${htmlCatalog}
//                     <tr>
//                         <td class="shopping-element__name">💥 Сумма:</td>
//                         <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
//                     </tr>
//                 </table>
//             </div>
//         `;
//     ROOT_SHOPPING.innerHTML = html;
//     console.log('22222')
//   }
// }

// const shoppingPage = new Shopping();
// shoppingPage.render()