import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Image - full width on mobile (above), half width on desktop (left) */}
      <div className="w-full h-32 md:h-screen md:w-1/2">
        <img
          src="/indexassets.png"
          alt="Fondo"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Error cargando imagen de fondo');
            // Fallback a un gradiente si la imagen falla
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
          }}
        />
      </div>

      {/* content - full width on mobile (below), half width on desktop (right) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md flex flex-col items-center px-4 py-8 md:py-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout; 