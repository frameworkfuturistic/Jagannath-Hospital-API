exports.getFullUrl = (req, relativePath) => {
    if (!relativePath) {
      return null;
    }
  
    // Force the protocol to 'https' as we're assuming production.
    const protocol = 'https'; 
  
    // Default to 'localhost' for development or fallback.
    let host = req.get('host') || 'localhost';
  
    // If the host is '192.168.1.251', replace it with 'sjhrc.in'.
    if (host.includes("192.168.1.251")) {
      host = 'sjhrc.in';  // Ensure this is your production domain.
    }
  
    // Construct the full URL by appending the relativePath.
    return `${protocol}://${host}/hospital-api/${relativePath.replace(/\\/g, '/')}`;
  };
  