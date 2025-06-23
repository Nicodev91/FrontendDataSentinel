interface EmailInputProps {
    email: string;
    setEmail: (value: string) => void;
  }
  
  export default function EmailInput({ email, setEmail }: EmailInputProps) {
    return (
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-gray-900"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>
    );
  }
  