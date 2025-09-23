const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from current directory
app.use(express.static('.'));

// API endpoint to get Firebase configuration
app.get('/api/config', (req, res) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyC_1gMcl2CsFRzSMhntGTigeXfnYOHYoNk",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "vit-campus-connect-cd0c3.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "vit-campus-connect-cd0c3",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "vit-campus-connect-cd0c3.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "53637648658",
    appId: process.env.FIREBASE_APP_ID || "1:53637648658:web:fcea85d52f6b022c2c63cb"
  };
  
  res.json({ firebaseConfig });
});

// Serve the main page for all routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});