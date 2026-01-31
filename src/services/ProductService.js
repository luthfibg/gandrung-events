// Environment configuration
const ENV = {
  development: {
    API_BASE: 'http://localhost:3001',
    API_VERSION: 'v1'
  },
  production: {
    API_BASE: 'https://events-be-indol.vercel.app',
    API_VERSION: 'v1'
  }
};

// Determine current environment
const getEnvironment = () => {
  if (import.meta.env?.PROD) {
    return ENV.production;
  }
  if (import.meta.env?.DEV) {
    return ENV.development;
  }
  // Default to production for safety
  return ENV.production;
};

// Get current environment configuration
const currentEnv = getEnvironment();

// API configuration with fallback
const API_CONFIG = {
  baseUrl: currentEnv.API_BASE,
  version: currentEnv.API_VERSION,
  endpoints: {
    products: `/api/products`,
    orders: `/api/orders`,
    search: (query) => `/api/products?q=${encodeURIComponent(query)}`,
    productById: (id) => `/api/products/${id}`
  }
};

// Helper function to get full API URL
const getApiUrl = (endpoint) => {
  return `${API_CONFIG.baseUrl}${endpoint}`;
};

// Helper function to handle fetch errors
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`);
  }
  return response.json();
};

export const productService = {
  // Get API configuration (for debugging or external use)
  getConfig: () => API_CONFIG,

  // Get all products
  async getAll() {
    try {
      const response = await fetch(getApiUrl(API_CONFIG.endpoints.products));
      return await handleResponse(response);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get single product by ID
  async getById(id) {
    try {
      const response = await fetch(getApiUrl(API_CONFIG.endpoints.productById(id)));

      if (response.ok) {
        return await handleResponse(response);
      }

      if (response.status === 404) {
        console.warn(`Product ${id} not found directly, trying to find in all products...`);
        const allProducts = await this.getAll();
        const product = allProducts.find(p =>
          String(p.id) === String(id) ||
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
      const response = await fetch(getApiUrl(API_CONFIG.endpoints.products), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      });
      
      return await handleResponse(response);
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  // Update product
  async update(id, product) {
    try {
      const response = await fetch(getApiUrl(API_CONFIG.endpoints.productById(id)), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      });
      
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error updating product ${id}:`, error);
      throw error;
    }
  },

  // Delete product
  async delete(id) {
    try {
      const response = await fetch(getApiUrl(API_CONFIG.endpoints.productById(id)), {
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
      const response = await fetch(getApiUrl(API_CONFIG.endpoints.search(query)));
      return await handleResponse(response);
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  },

  // Create order
  async createOrder(orderData) {
    try {
      const response = await fetch(getApiUrl(API_CONFIG.endpoints.orders), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });
      
      return await handleResponse(response);
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }
};
