import './Menu.css';

interface Option {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export default function Menu({ options }: { options: Option[] }) {
  return (
    <div className="menu p-2-a b bra">
      {options.map((option) => (
        <button
          key={option.label}
          onClick={option.onClick}
          className="menu-option f jc-sb ai-c g-1"
        >
          {option.icon}
          {option.label}
        </button>
      ))}
    </div>
  );
}
