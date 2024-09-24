import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { FormConfiguration } from "./components/form-configuration.component";
import { FormElements } from "./components/form-elements.component";
import { FormMain } from "./components/form-main.component";
import { useState } from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

export const FormBuilder = () => {
  const [toggleIcon, setToggleIcon] = useState({
    formElement: false,
    formConfiguration: false,
  });
  return (
    <main className="container flex justify-between h-screen">
      {!toggleIcon.formElement ? (
        <ChevronDoubleRightIcon
          className="h-7 w-7"
          tabIndex={0}
          onClick={() => setToggleIcon({ ...toggleIcon, formElement: true })}
        />
      ) : (
        <ChevronDoubleLeftIcon
          className="h-7 w-7"
          tabIndex={0}
          onClick={() => setToggleIcon({ ...toggleIcon, formElement: false })}
        />
      )}
      {toggleIcon.formElement && <FormElements />}
      <FormMain />
      <FormConfiguration />
    </main>
  );
};
