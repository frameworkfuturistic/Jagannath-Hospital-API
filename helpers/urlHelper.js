// utils/urlHelper.js
exports.getFullUrl = (req, relativePath) => {
    return relativePath ? `${req.protocol}://${req.get('host')}/${relativePath.replace(/\\/g, '/')}` : null;
  };
  