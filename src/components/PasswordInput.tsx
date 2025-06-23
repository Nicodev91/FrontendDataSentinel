import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface PasswordInputProps {
  password: string;
  setPassword: (value: string) => void;
}

export default function PasswordInput({ password, setPassword }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
        Contraseña
      </label>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-3 pr-12 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-gray-900"
          placeholder="••••••••"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
