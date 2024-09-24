import { RiHeading2, RiInputField, RiParagraph } from "react-icons/ri";

const basicElements = [
  {
    label: "Text Input",
    icon: <RiInputField size={25} />,
  },
  { label: "Heading", icon: <RiHeading2 size={25} /> },
  { label: "Paragraph", icon: <RiParagraph size={25} /> },
];

export const FormElements = () => {
  return (
    <aside className="flex-1 border-2 border-gray-50 bg-slate-200">
      <h1 className="text-2xl font-bold">Form Components</h1>
      <div className="bg-slate-700 text-center py-2">
        <h1 className="text-lg text-white">Basic Elements</h1>
      </div>
      <div className="divide-y" />
      <div>
        {basicElements.map((element, i) => (
          <div className="flex gap-5 items-center cursor-grab text-white bg-slate-500 border-b border-gray-400" key={i}>
            <div className="bg-slate-900 p-4">{element.icon}</div>
            <div className="font-semibold">{element.label}</div>
          </div>
        ))}
      </div>
    </aside>
  );
};
