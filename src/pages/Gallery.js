import React from 'react';
import Footer from '../components/Footer';
export default function Gallery() {
  const images = [
    { id: 1, src: '/gambar1.jpg', alt: 'Latihan parkir' },
    { id: 2, src: '/gambar2.jpg', alt: 'Siswa dan instruktur' },
    { id: 3, src: '/gambar3.jpg', alt: 'Simulasi mengemudi' },
    { id: 4, src: '/gambar4.jpg', alt: 'Mobil latihan' },
    { id: 5, src: '/gambar5.jpg', alt: 'Ujian praktik' },
    { id: 6, src: '/gambar6.jpg', alt: 'Pelatihan teori' },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Galeri Kegiatan</h2>
      <div className="row">
        {images.map((img) => (
          <div key={img.id} className="col-sm-6 col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={img.src}
                alt={img.alt}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body text-center">
                <small className="text-muted">{img.alt}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* Footer */}
            <Footer />          
    </div>
  );
}
