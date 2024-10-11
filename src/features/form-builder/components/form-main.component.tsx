import { useDroppable } from "@dnd-kit/core";
import { nanoid } from "nanoid";

export const FormMain = () => {
  const { setNodeRef } = useDroppable({
    id: nanoid(),
  });
  return (
    <div ref={setNodeRef} className="border flex-[70%]" style={{border:"3px solid"}}>
      Form
    </div>
  );
};
