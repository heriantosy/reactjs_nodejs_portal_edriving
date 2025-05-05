// src/pages/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white text-center py-5"
        style={{
          backgroundImage: "url('/gambar2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Selamat Datang di Portal Belajar Mengemudi</h1>
          <p className="lead">Belajar mengemudi dengan profesional & penuh percaya diri.</p>
        </div>
      </section>

      {/* Program Belajar */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Program Belajar</h2>
        <div className="row">
          {[
            { title: 'Teori Dasar', img: '/gambar2.jpg' },
            { title: 'Simulasi', img: '/gambar3.jpg' },
            { title: 'Latihan Praktik', img: '/gambar4.jpg' },
          ].map(({ title, img }) => (
            <div key={title} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">Pelajari {title.toLowerCase()} dengan instruktur profesional kami.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jadwal */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Jadwal Belajar</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-primary">
                <tr>
                  <th>Hari</th>
                  <th>Waktu</th>
                  <th>Program</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Senin</td>
                  <td>08.00 - 10.00</td>
                  <td>Teori Dasar</td>
                </tr>
                <tr>
                  <td>Rabu</td>
                  <td>10.00 - 12.00</td>
                  <td>Simulasi</td>
                </tr>
                <tr>
                  <td>Jumat</td>
                  <td>14.00 - 16.00</td>
                  <td>Latihan Praktik</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Alumni Carousel */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Testimoni Alumni</h2>
        <div id="alumniCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {[
              {
                name: 'Ahmad',
                comment: 'Sangat membantu! Kini saya lebih percaya diri saat mengemudi.',
                img: 'https://randomuser.me/api/portraits/men/32.jpg',
              },
              {
                name: 'Rina',
                comment: 'Instruktur ramah dan profesional, saya lulus ujian dalam sekali coba!',
                img: 'https://randomuser.me/api/portraits/women/44.jpg',
              },
            ].map((item, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-circle mb-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <blockquote className="blockquote text-center">
                    <p className="mb-2">"{item.comment}"</p>
                    <footer className="blockquote-footer">{item.name}</footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#alumniCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Sebelumnya</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#alumniCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Berikutnya</span>
          </button>
        </div>
      </section>

      {/* Paket Belajar */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Paket Belajar</h2>
          <div className="row">
            {[
              {
                name: 'Basic',
                price: 'Rp500.000',
                img: '/gambar5.jpg',
                features: ['2x Teori', '1x Praktik'],
              },
              {
                name: 'Standar',
                price: 'Rp800.000',
                img: '/gambar6.jpg',
                features: ['3x Teori', '3x Praktik', 'Simulasi'],
              },
              {
                name: 'Premium',
                price: 'Rp1.200.000',
                img: '/gambar7.jpg',
                features: ['5x Teori', '5x Praktik', 'Simulasi + Sertifikat'],
              },
            ].map((pkg) => (
              <div key={pkg.name} className="col-md-4 mb-4">
                <div className="card h-100 text-center">
                  <img src={pkg.img} className="card-img-top" alt={pkg.name} />
                  <div className="card-body">
                    <h5 className="card-title">{pkg.name}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{pkg.price}</h6>
                    <ul className="list-unstyled">
                      {pkg.features.map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                    <a href="#daftar" className="btn btn-primary mt-3">
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
