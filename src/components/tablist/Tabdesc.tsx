interface TabdescProps {
  title: string;
  description: string;
}

const Tabdesc: React.FC<TabdescProps> = ({ title, description }) => (
  <li>
    <p>{title}</p>
    <span>{description}</span>
  </li>
);

export default Tabdesc;