interface EmailInputProps {
    email: string;
    setEmail: (value: string) => void;
  }
  
  export default function EmailInput({ email, setEmail }: EmailInputProps) {
    return (
      <div className="w-full">
        <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-3 sm:py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-gray-900 text-sm sm:text-base placeholder-gray-500"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>
    );
  }
  