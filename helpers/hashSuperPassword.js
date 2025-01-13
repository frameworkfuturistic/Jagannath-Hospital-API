const bcrypt = require('bcryptjs');

const superPassword = 'Prayag#@123'; // Your super password
const saltRounds = 10; // Number of salt rounds for hashing

// Hash the super password
bcrypt.hash(superPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing super password:', err);
  } else {
    console.log('Hashed Super Password:', hash);
  }
});
