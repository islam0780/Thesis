const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

const

 pool = new Pool({
  user: 'your-username',
  host: 'your-host',
  database: 'your-database-name',
  password: 'your-password',
  port: 5432
});

app.use(express.json());

app.post('/save-data', async (req, res) => {
  const { inputText, encryptedText, decryptedText } = req.body;

  try {
    const query = 'INSERT INTO data (input_text, encrypted_text, decrypted_text) VALUES ($1, $2, $3)';
    await pool.query(query, [inputText, encryptedText, decryptedText]);
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
