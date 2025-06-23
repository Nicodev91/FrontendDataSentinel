export default function LoginHeader() {
    return (
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded mb-4">
          <span className="text-blue-100 mr-1"></span>
          <span>ClientSecure</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Iniciar Sesión</h2>
        <p className="text-sm text-gray-600">
          Si ya eres miembro, puedes iniciar sesión con tu dirección de correo electrónico y contraseña.
        </p>
      </div>
    );
  }
  