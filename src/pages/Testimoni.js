import React from 'react';
import Footer from '../components/Footer';

export default function Testimoni() {
  const videos = [
    { id: 1, url: 'https://www.youtube.com/embed/1fXxc-aP1Js?si=escP6GfCKSBY0QqZ', title: 'Testimoni Siswa 1' },
    { id: 2, url: 'https://www.youtube.com/embed/3mdx7RRjoKM?si=fzke4zfl0oAkmVWa', title: 'Testimoni Siswa 2' },
    { id: 3, url: 'https://www.youtube.com/embed/F-wm-Vc-124?si=aB52WJ0BwQCI04_j', title: 'Testimoni Siswa 3' },
    { id: 4, url: 'https://www.youtube.com/embed/T8MvhqiFftk?si=ktz0NCDd6mL-uZoa', title: 'Testimoni Siswa 4' },
    { id: 5, url: 'https://www.youtube.com/embed/xpRe0r-IP5o?si=oK-yjEYacvOhwMUQ', title: 'Testimoni Siswa 5' },
    { id: 6, url: 'https://www.youtube.com/embed/J0laAfePSpM?si=ZHhW7XENOSNifiBZ', title: 'Testimoni Siswa 6' },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Testimoni Siswa</h2>
      <div className="row">
        {videos.map((video) => (
          <div key={video.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="ratio ratio-16x9">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{video.title}</h5>
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
