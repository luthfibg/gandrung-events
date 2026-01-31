const API_BASE = 'https://events-be-indol.vercel.app';

export const productService = {
  // Get all products
  async getAll() {
    try {
      // Note: Changed from /products to /api/products
      const response = await fetch(`${API_BASE}/api/products`);
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
      const response = await fetch(`${API_BASE}/api/products/${id}`);

      if (response.ok) {
        return await response.json();
      }

      if (response.status === 404) {
        console.warn(`Product ${id} not found directly, trying to find in all products...`);
        const allProducts = await this.getAll();
        const product = allProducts.find(p =>
          p.id.toString() === id.toString() ||
          p.id == id
        );

        if (product) {
          console.log(`Found product ${id} via filtering`);
          return product;
        }

        throw new Error(`Produk dengan ID ${id} tidak ditemukan`);
      }

      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  },

  // Create new product
  async create(product) {
    try {
      const response = await fetch(`${API_BASE}/api/products`, {  // Changed to /api/products
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create product: ${errorText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  // Update product
  async update(id, product) {
    try {
      const response = await fetch(`${API_BASE}/api/products/${id}`, {  // Changed to /api/products
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      });
      
      if (!response.ok) throw new Error('Failed to update product');
      return await response.json();
    } catch (error) {
      console.error(`Error updating product ${id}:`, error);
      throw error;
    }
  },

  // Delete product
  async delete(id) {
    try {
      const response = await fetch(`${API_BASE}/api/products/${id}`, {  // Changed to /api/products
        method: 'DELETE'
      });
      
      if (!response.ok) throw new Error('Failed to delete product');
      return true;
    } catch (error) {
      console.error(`Error deleting product ${id}:`, error);
      throw error;
    }
  },

  // Search products
  async search(query) {
    try {
      const response = await fetch(`${API_BASE}/api/products?q=${encodeURIComponent(query)}`);  // Changed to /api/products
      if (!response.ok) throw new Error('Failed to search products');
      return await response.json();
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  }
};