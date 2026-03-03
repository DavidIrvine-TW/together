import './TextLink.css';

interface TextLinkProps {
  label: string;
  href?: string;
  className?: string;
}

export default function TextLink({ label, href = '#', className = '' }: TextLinkProps) {
  return (
    <a
      href={href}
      className={`text-link ${className}`}
      aria-label={label}
    >
      {label}  <span className="text-link__arrow">→</span>
    </a>
  );
}
