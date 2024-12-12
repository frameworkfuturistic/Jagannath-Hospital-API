exports.getFullUrl = (req, relativePath) => {
    if (!relativePath) {
      return null;
    }
  
    // Ensure the path doesn't have a leading slash (to avoid double slashes)
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  
    // Enforce https in production environment, fallback to localhost in dev.
    const baseUrl = process.env.BASE_URL || `http://${req.get('host')}`;
  
    // Return the full URL (it will always be HTTPS in production)
    return `${baseUrl}/${cleanPath.replace(/\\/g, '/')}`;
  };
  