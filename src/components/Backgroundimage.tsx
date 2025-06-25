import { useState } from 'react';

export default function BackgroundImage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src="/public/indexassets.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={(e) => {
          console.error('Error cargando imagen:', e);
          // Fallback a un gradiente
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      {/* Fallback gradiente */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 hidden"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      />
      {/* Overlay para mejorar legibilidad en móviles si es necesario */}
      <div className="absolute inset-0 bg-black bg-opacity-10 lg:bg-opacity-0"></div>
    </div>
  );
}
