import { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

export default function HubungiKami() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Jika backend tersedia:
      await axios.post('http://localhost:5000/api/kontak', form);

      console.log('Pesan dikirim:', form); // simulasi kirim
      setSuccess('Pesan berhasil dikirim!');
      setForm({ nama: '', email: '', pesan: '' });
    } catch (error) {
      setSuccess('Gagal mengirim pesan.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Hubungi Kami</h2>
      {success && <div className="alert alert-info">{success}</div>}
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input type="text" name="nama" value={form.nama} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Pesan</label>
          <textarea name="pesan" value={form.pesan} onChange={handleChange} className="form-control" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Kirim Pesan</button>
      </form>
<br/>
        {/* Footer */}
                  <Footer />       
    </div>
  );
}
