import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataSiswa() {
  const [siswa, setSiswa] = useState([]);
  const [formData, setFormData] = useState({ nis: '', nama_siswa: '', alamat: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchSiswa();
  }, []);

  const fetchSiswa = async () => {
    const res = await axios.get('http://localhost:5000/api/siswa');
    setSiswa(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/api/siswa/${editingId}`, formData);
      setEditingId(null);
    } else {
      await axios.post('http://localhost:5000/api/siswa', formData);
    }
    setFormData({ nis: '', nama_siswa: '', alamat: '' });
    fetchSiswa();
  };

  const handleEdit = (s) => {
    setFormData({ nis: s.nis, nama_siswa: s.nama_siswa, alamat: s.alamat });
    setEditingId(s.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus data?')) {
      await axios.delete(`http://localhost:5000/api/siswa/${id}`);
      fetchSiswa();
    }
  };

  return (
    <div>
      <h2>Data Siswa</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input type="text" name="nis" value={formData.nis} onChange={handleChange} className="form-control" placeholder="NIS" required />
        </div>
        <div className="mb-2">
          <input type="text" name="nama_siswa" value={formData.nama_siswa} onChange={handleChange} className="form-control" placeholder="Nama Siswa" required />
        </div>
        <div className="mb-2">
          <textarea name="alamat" value={formData.alamat} onChange={handleChange} className="form-control" placeholder="Alamat" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          {editingId ? 'Update' : 'Tambah'}
        </button>
        {editingId && (
          <button type="button" className="btn btn-secondary ms-2" onClick={() => {
            setEditingId(null);
            setFormData({ nis: '', nama_siswa: '', alamat: '' });
          }}>
            Batal
          </button>
        )}
      </form>

      {/* Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>NIS</th>
            <th>Nama Siswa</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {siswa.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.nis}</td>
              <td>{s.nama_siswa}</td>
              <td>{s.alamat}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(s)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(s.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
