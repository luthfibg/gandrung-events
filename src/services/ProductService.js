const API_BASE = 'http://localhost:3001';

export const productService = {
  // Get all products
  async getAll() {
    try {
      const response = await fetch(`${API_BASE}/products`);
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get single product
  async getById(id) {
    try {
      const response = await fetch(`${API_BASE}/products/${id}`);
      if (!response.ok) {
        if (response.status === 404) throw new Error('Produk tidak ditemukan');
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  },

  // Create new product
  async create(product) {
    const response = await fetch(`${API_BASE}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    });
    
    if (!response.ok) throw new Error('Failed to create product');
    return await response.json();
  },

  // Update product
  async update(id, product) {
    const response = await fetch(`${API_BASE}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    });
    
    if (!response.ok) throw new Error('Failed to update product');
    return await response.json();
  },

  // Delete product
  async delete(id) {
    const response = await fetch(`${API_BASE}/products/${id}`, {
      method: 'DELETE'
    });
    
    if (!response.ok) throw new Error('Failed to delete product');
    return true;
  },

  // Search products
  async search(query) {
    const response = await fetch(`${API_BASE}/products?q=${query}`);
    if (!response.ok) throw new Error('Failed to search products');
    return await response.json();
  }
};