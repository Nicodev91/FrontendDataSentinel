// import React from 'react';
import { useNavigate } from "react-router-dom"; // Para el botón de Regresar al login
import { Link } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    return (
    <div className="flex h-screen">
      {/* Menú lateral a la izquierda en Dashboard */}
      <aside className="w-64 bg-slate-800 text-white p-6">
        <h2 className="text-xl font-bold mb-4">Menú</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => navigate("/")}
              className="w-full bg-slate-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 transition-colors">
              Regresa al login
            </button>
            <Link to="/dashboard" className="hover:text-blue-400">Inicio</Link>

          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Perfil</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Configuración</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Cerrar sesión</a>
          </li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Bienvenido a ClientSecure</h1>
        <p className="text-gray-900 mb-8"></p>

        {/* Tarjetas de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {/* Ventas del mes */}
          <div className="bg-emerald-500 rounded-xl shadow p-4 flex flex-col items-start">
            <span className="text-white text-sm">Ventas del mes</span>
            <span className="text-2xl font-bold">$350.4</span>
          </div>
          {/* Spend this month */}
          <div className="bg-emerald-500 rounded-xl shadow p-4 flex flex-col items-start">
            <span className="text- text-sm">Total Ventas Hoy</span>
            <span className="text-2xl font-bold">$642.39</span>
          </div>
          {/* Sales */}
          <div className="bg-emerald-500 rounded-xl shadow p-4 flex flex-col items-start">
            <span className="text-white text-sm">Ventas de los ultimos 7 días</span>
            <span className="text-2xl font-bold">$574.34</span>
          </div>
          {/* Your balance */}
          <div className="bg-blue-500 rounded-xl shadow p-4 flex flex-col items-start">
            <span className="text-white text-sm">Gastos del mes</span>
            <span className="text-2xl font-bold">$1,000</span>
          </div>
          {/* New Tasks */}
          {/* Clientes Activos */}
          <div className="bg-blue-500 rounded-xl shadow p-4 flex flex-col items-start">
          <span className="text-white text-sm">Clientes Activos</span>
          <span className="text-2xl font-bold">154</span> 
          </div>

          {/* Total Proyectos */}
          <div className="bg-blue-500 rounded-xl shadow p-4 flex flex-col items-start">
            <span className="text-white text-sm">Total Proyectos</span>
            <span className="text-2xl font-bold">2935</span>
          </div>

          
        </div>
        {/* Aquí puedes seguir agregando gráficos, tablas, etc. */}
      </main>
    </div>
  );
}
