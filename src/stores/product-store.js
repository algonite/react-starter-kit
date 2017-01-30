import { store } from 'hacksaw';

@store class ProductStore {}

export default ProductStore;

// initialize the data
ProductStore.put({ id: 1, name: 'Product 1' });
ProductStore.put({ id: 2, name: 'Product 2' });
ProductStore.put({ id: 3, name: 'Product 3' });
