import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-success text-white text-center py-4">
      <p className="mb-0">&copy; {new Date().getFullYear()} Portal Belajar Mengemudi. All rights reserved.</p>
    </footer>
  );
}
