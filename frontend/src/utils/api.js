const API_URL = 'http://localhost:5000/api';

// Enhanced response handler with better error handling and logging
const handleResponse = async (response) => {
  console.log('Raw response:', {
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers)
  });

  let data;
  try {
    const textResponse = await response.text();
    console.log('Raw response text:', textResponse);
    
    try {
      data = JSON.parse(textResponse);
    } catch (e) {
      console.error('JSON parsing error:', e);
      throw new Error(`Invalid JSON response: ${textResponse.substring(0, 100)}...`);
    }
  } catch (error) {
    console.error('Response parsing error:', error);
    throw new Error('Failed to parse server response');
  }

  console.log('Parsed response data:', data);

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Unauthorized');
    }
    if (response.status === 403) {
      throw new Error('Forbidden');
    }
    if (response.status === 404) {
      throw new Error('User not found');
    }
    throw new Error(data.message || `Server error: ${response.status}`);
  }

  return data;
};

const getAuthHeader = (token) => {
  if (!token) {
    throw new Error('No authentication token provided');
  }
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

export const register = async (userData) => {
  console.log('Registering user:', userData);
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Registration error:', error);
    throw new Error(error.message || 'Registration failed');
  }
};

export const login = async (credentials) => {
  console.log('Logging in user:', credentials);
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Login error:', error);
    throw new Error(error.message || 'Login failed');
  }
};

export const getUserProfile = async (userId, token) => {
  if (!userId) {
    throw new Error('User ID is required');
  }
  
  console.log('Fetching user profile:', { 
    userId, 
    hasToken: !!token,
    url: `${API_URL}/users/${userId}`
  });

  try {
    const headers = getAuthHeader(token);
    console.log('Request headers:', headers);

    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: 'GET',
      headers: headers
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Get profile error:', {
      message: error.message,
      status: error.status,
      stack: error.stack
    });
    throw error;
  }
};

export const updateUserProfile = async (userId, userData, token) => {
  if (!userId) {
    throw new Error('User ID is required');
  }
  
  console.log('Updating user profile:', { 
    userId, 
    userData, 
    hasToken: !!token 
  });

  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: 'PUT',
      headers: getAuthHeader(token),
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Update profile error:', {
      message: error.message,
      stack: error.stack
    });
    throw error;
  }
};

// Utility functions
export const  checkAuthStatus = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  
  if (!token || !user) {
    return null;
  }
  
  try {
    return {
      token,
      user: JSON.parse(user)
    };
  } catch (error) {
    console.error('Error parsing stored user data:', error);
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};