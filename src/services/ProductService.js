const API_BASE = 'https://events-be-ten.vercel.app/';

export const productService = {
  // Get all products
  async getAll() {
    try {
      if (import.meta.env.DEV) {
        // Development: use JSON server
        const response = await fetch(`${API_BASE}/products`);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        return await response.json();
      } else {
        // Production: use static JSON file
        const response = await fetch(API_BASE);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        const data = await response.json();
        return data.products;
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get single product - improved with fallback
  async getById(id) {
    try {
      if (import.meta.env.DEV) {
        // Development: use JSON server
        const response = await fetch(`${API_BASE}/products/${id}`);

        if (response.ok) {
          return await response.json();
        }

        // If 404, try to get from all products (in case ID type mismatch)
        if (response.status === 404) {
          console.warn(`Product ${id} not found directly, trying to find in all products...`);

          const allProducts = await this.getAll();
          const product = allProducts.find(p =>
            p.id.toString() === id.toString() ||
            p.id == id  // Loose comparison to handle string/number
          );

          if (product) {
            console.log(`Found product ${id} via filtering`);
            return product;
          }

          throw new Error(`Produk dengan ID ${id} tidak ditemukan`);
        }

        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      } else {
        // Production: get from all products
        const allProducts = await this.getAll();
        const product = allProducts.find(p =>
          p.id.toString() === id.toString() ||
          p.id == id  // Loose comparison to handle string/number
        );

        if (product) {
          return product;
        }

        throw new Error(`Produk dengan ID ${id} tidak ditemukan`);
      }
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  },

  // Create new product
  async create(product) {
    try {
      const response = await fetch(`${API_BASE}/products`, {
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
      const response = await fetch(`${API_BASE}/products/${id}`, {
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
      const response = await fetch(`${API_BASE}/products/${id}`, {
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
      const response = await fetch(`${API_BASE}/products?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Failed to search products');
      return await response.json();
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  }
};