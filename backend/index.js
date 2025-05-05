const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // sesuaikan
  database: 'db_aanodejs' // sesuaikan
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Get all siswa
app.get('/api/siswa', (req, res) => {
  db.query('SELECT * FROM siswa', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add siswa
app.post('/api/siswa', (req, res) => {
  const { nis, nama_siswa, alamat } = req.body;
  db.query('INSERT INTO siswa (nis, nama_siswa, alamat) VALUES (?, ?, ?)', [nis, nama_siswa, alamat], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, nis, nama_siswa, alamat });
  });
});

// Update siswa
app.put('/api/siswa/:id', (req, res) => {
  const { nis, nama_siswa, alamat } = req.body;
  db.query('UPDATE siswa SET nis = ?, nama_siswa = ?, alamat = ? WHERE id = ?', [nis, nama_siswa, alamat, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Updated' });
  });
});

// Delete siswa
app.delete('/api/siswa/:id', (req, res) => {
  db.query('DELETE FROM siswa WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Deleted' });
  });
});

// Hubungi kami
app.post('/api/kontak', (req, res) => {
  const { nama, email, pesan } = req.body;
  db.query('INSERT INTO kontak (nama, email, pesan) VALUES (?, ?, ?)', [nama, email, pesan], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Pesan disimpan' });
  });
});


app.listen(5000, () => console.log('Server running on port 5000'));
