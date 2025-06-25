interface SubmitButtonProps {
    onClick: () => void;
  }
  
  export default function SubmitButton({ onClick }: SubmitButtonProps) {
    return (
      <div className="w-full">
        <button
          type="button"
          onClick={onClick}
          className="w-full bg-slate-800 text-white py-3 sm:py-4 px-4 rounded-lg font-medium hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 transition-colors text-sm sm:text-base"
        >
          Iniciar Sesión
        </button>
      </div>
    );
  }
  