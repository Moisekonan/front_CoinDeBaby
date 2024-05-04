const apiUrl = 'http://localhost:3000/api/';

export const apiEndpoint = {
  AuthEndpoint: {
    login: `${apiUrl}/auth/sign-in`,
    logout: `${apiUrl}/auth/log-out`,
  },

  UserEndpoint: {
    // USER
    register: `${apiUrl}/users/signup`,
    getUser: `${apiUrl}/users`,
    updateUser: `${apiUrl}/users`,
    deleteUser: `${apiUrl}/users`,

    // ADDRESS
    createAddress: `${apiUrl}/users/address`,
    getAddress: `${apiUrl}/users/address`,
    updateAddress: `${apiUrl}/users/address`,
    deleteAddress: `${apiUrl}/users/address`,

    // PROMOTES
    promoteToAdmin: `${apiUrl}/users/promote-to-admin`,
    demoteToUser: `${apiUrl}/users/demote-to-user`,
  },

  ProductEndpoint: {
    create: `${apiUrl}/product`,
    getProduct: `${apiUrl}/product`,
    getProductByCategory: `${apiUrl}/product/category`,
    searchProductByName: `${apiUrl}/product/search`,
    update: `${apiUrl}/product`,
    delete: `${apiUrl}/product`,
  },

  // PAS FINIS !
  CategoryEndpoint: {
    create: `${apiUrl}/category/create`,
    update: `${apiUrl}/category/update`,
    delete: `${apiUrl}/category/delete`,
  },
  OrderEndpoint: {
    create: `${apiUrl}/order/create`,
    update: `${apiUrl}/order/update`,
    delete: `${apiUrl}/order/delete`,
  },
  CartEndpoint: {
    create: `${apiUrl}/cart/create`,
    update: `${apiUrl}/cart/update`,
    delete: `${apiUrl}/cart/delete`,
  },
  OrderItemEndpoint: {
    create: `${apiUrl}/order-item/create`,
    update: `${apiUrl}/order-item/update`,
    delete: `${apiUrl}/order-item/delete`,
  },
};
