import { RiHeading2, RiInputField, RiParagraph } from "react-icons/ri";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { nanoid } from "nanoid";
const basicElements = [
  {
    label: "Text Input",
    icon: <RiInputField size={25} />,
    id: nanoid(),
  },
  { label: "Heading", icon: <RiHeading2 size={25} />, id: nanoid() },
  { label: "Paragraph", icon: <RiParagraph size={25} />, id: nanoid() },
];

const DraggableElement = ({ icon, label, id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      className="flex gap-5 items-center cursor-grab text-white bg-slate-500 border-b border-gray-400"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      tabIndex={1}
    >
      <div className="bg-slate-900 p-4">{icon}</div>
      <div className="font-semibold">{label}</div>
    </div>
  );
};
export const FormElements = () => {
  return (
    <aside
      className="flex-[30%] border-2 border-gray-50 bg-slate-200"
      style={{ border: "3px solid red" }}
    >
      <h1 className="text-2xl font-bold">Form Components</h1>
      <div className="bg-slate-700 text-center py-2">
        <h1 className="text-lg text-white">Basic Elements</h1>
      </div>
      <div className="divide-y" />
      <div>
        {basicElements.map((element, i) => (
          <DraggableElement
            key={i}
            icon={element.icon}
            id={element.id}
            label={element.label}
          />
        ))}
      </div>
    </aside>
  );
};
