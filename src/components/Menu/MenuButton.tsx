interface MenuButtonProps {
  label: string;

  icon: string;

  target: string;

  active: boolean;
  
  screenHandler: (targetScreen: string) => void;
}

export default function MenuButton({
  label,
  icon,
  target,
  active,
  screenHandler,
}: MenuButtonProps) {
  return (
    <button
      type="button"
      className={`menu-button ${active ? "active" : ""}`}
      onClick={() => screenHandler(target)}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </button>
  );
}
