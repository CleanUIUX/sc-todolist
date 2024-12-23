interface TabdescProps {
  title: string;
  description: string;
}

const Tabdesc: React.FC<TabdescProps> = ({ title, description }) => (
  <li className="mt-[30px]">
    <p className="text-2xl font-bold">{title}</p>
    <span className="text-lg">{description}</span>
  </li>
);

export default Tabdesc;