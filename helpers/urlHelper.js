exports.getFullUrl = (req, relativePath) => {
    if (!relativePath) {
      return null;
    }
  
    const protocol = req.protocol || 'http'; // Default to 'http' if undefined
    const host = req.get('host') || 'localhost'; // Default to 'localhost' if undefined
  
    // Ensure the domain is correct
    if (host.includes("192.168.1.251")) {
      // If it's the IP address, replace with the domain
      host = 'sjhrc.in';  // Ensure this is set to your production domain
    }
  
    return `${protocol}://${host}/${relativePath.replace(/\\/g, '/')}`;
  };
  