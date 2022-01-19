const URL_FIX = 'http://localhost:4000';

const URL  = {
  categories: `${URL_FIX}/categories`,
  category: {
    root: `${URL_FIX}/category/`,
    searchName: `${URL_FIX}/category/search/`,
  },
  products: `${URL_FIX}/products/`,
  product: {
    root: `${URL_FIX}/product/`,
    searchName: `${URL_FIX}/product/search/`,
  },
  productComment: `${URL_FIX}/product/comment/`,
  user: `${URL_FIX}/user/`,
};

const METHOD = {
  get: (body) => ({
    method: 'get',
    body: JSON.stringify(body),
  }),
  post: (body) => ({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body), 
  }),
  put: (body) => ({
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body), 
  }),
  delete: (body = undefined) => ({
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body), 
  }),
};

export const fetchCategories = {
  get: async () => {
    const { categories } = URL;
    try {
      const data = await fetch(categories, METHOD.get());
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  delete: async () => {
    const { categories } = URL;
    try {
      await fetch(categories, METHOD.delete());
      return 'Categorias Deletadas';
    } catch(error) {
      console.error(error);
    }
  }
};

export const fetchCategory = {
  getByName: async (name, _empty) => {
    const { category } = URL;
    try {
      const data = await fetch(`${category.searchName}${name}`, METHOD.get());
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  getByCategory: async (cat, _empty) => {
    const { category } = URL;
    try {
      const data = await fetch(`${category.root}${cat}`, METHOD.get());
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  create: async (updated, _empty) => {
    const { category } = URL;
    try {
      const data = await fetch(category.root, METHOD.post(updated));
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  update: async (cat, updated) => {
    const { category } = URL;
    try {
      await fetch(`${category.root}${cat}`, METHOD.put(updated));

      return 'Atualizado';
    } catch(error) {
      console.error(error);
    }
  },
  delete: async (cat, _empty) => {
    const { category } = URL;
    try {
      await fetch(`${category.root}${cat}`, METHOD.delete());
      return 'Categoria Deletada';
    } catch(error) {
      console.error(error);
    }
  },
};

export const fetchComments = {
  create: async (comment) => {
    const { productComment } = URL;
    try {
      const data = await fetch(productComment, METHOD.post(comment));
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  getByProduct: async (product_id) => {
    const { productComment } = URL;
    try {
      const data = await fetch(`${productComment}${product_id}`, METHOD.get());
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  delete: async (comment) => {
    const { productComment } = URL;
    try {
      await fetch(productComment, METHOD.delete(comment));
      return 'Comentário Deletado';
    } catch(error) {
      console.error(error);
    }
  }
};

export const fetchProducts = {
  getAllProducts: async () => {
    const { products } = URL;
    try {
      const data = await fetch(products, METHOD.get());
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  getByCategory: async (category) => {
    const { products } = URL;
    try {
      const data = await fetch(`${products}${category}`, METHOD.get());
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  deleteByCategory: async (category) => {
    const { products } = URL;
    try {
      await fetch(`${products}${category}`, METHOD.delete());
      return 'Produtos Deletados';
    } catch(error) {
      console.error(error);
    }
  }
};

export const fetchProduct = {
  getByName: async (name, _empty) => {
    const { product } = URL;
    try {
      const data = await fetch(`${product.searchName}${name}`, METHOD.get());
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  getById: async (id, _empty) => {
    const { product } = URL;
    try {
      const data = await fetch(`${product.root}${id}`, METHOD.get());
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  create: async (updated, _empty) => {
    const { product } = URL;
    try {
      const data = await fetch(product.root, METHOD.post(updated));
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  update: async (cat, updated) => {
    const { product } = URL;
    try {
      const data = await fetch(`${product.root}${cat}`, METHOD.put(updated));
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  delete: async (cat, _empty) => {
    const { product } = URL;
    try {
      const data = await fetch(`${product.root}${cat}`, METHOD.delete());
      return data.status;
    } catch(error) {
      console.error(error);
    }
  },
};

export const fetchUser = {
  get: async (id, _empty) => {
    const { user } = URL;
    try {
      const data = await fetch(`${user}${id}`, METHOD.get());
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  login: async (body, _empty) => {
    const { user } = URL;
    try {
      const data = await fetch(`${user}${body.email}/${body.password}`, METHOD.get());
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  verifyByEmail: async (email, _empty) => {
    const { user } = URL;
    try {
      const data = await fetch(`${user}${email}`, METHOD.get());
      const results = await data.json();
      return !!results;
    } catch {
      return true
    }
  },
  create: async (updated, _empty) => {
    const { user } = URL;
    try {
      const data = await fetch(user, METHOD.post(updated));
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  update: async (id, updated) => {
    const { user } = URL;
    try {
      const data = await fetch(`${user}${id}`, METHOD.put(updated));
      const results = await data.json();
      return results;
    } catch(error) {
      console.error(error);
    }
  },
  delete: async (id, _empty) => {
    const { user } = URL;
    try {
      await fetch(`${user}${id}`, METHOD.delete());
      return 'Produto Deletado';
    } catch(error) {
      console.error(error);
    }
  },
};
