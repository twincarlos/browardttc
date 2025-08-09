import './Menu.css';

interface Option {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export default function Menu({ options }: { options: Option[] }) {
  return (
    <div className="menu p-1 b bra f fd-c">
      {options.map((option) => (
        <button
          key={option.label}
          onClick={option.onClick}
          className="menu-option f jc-fs ai-c g-1 p-1 bra"
        >
          {option.icon}
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}
