// Validate email format
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate password strength
export const validatePassword = (password) => {
  // Password must be at least 8 characters
  if (password.length < 8) {
    return {
      isValid: false,
      message: 'Password must be at least 8 characters long'
    };
  }
  
  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one uppercase letter'
    };
  }
  
  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one lowercase letter'
    };
  }
  
  // Check for at least one number
  if (!/[0-9]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one number'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

// Validate name
export const validateName = (name) => {
  if (name.trim().length < 3) {
    return {
      isValid: false,
      message: 'Name must be at least 3 characters long'
    };
  }
  
  if (name.trim().length > 30) {
    return {
      isValid: false,
      message: 'Name cannot exceed 30 characters'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};