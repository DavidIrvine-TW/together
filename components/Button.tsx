interface ButtonProps {
  label: string;
  variant?: 'primary' | 'ghost';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ label, variant = 'primary', icon, onClick, className = '' }: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn-${variant} inline-flex items-center gap-[10px] ${className}`}
      onClick={onClick}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}
