import { FormConfiguration } from "./components/form-configuration.component";
import { FormElements } from "./components/form-elements.component";
import { FormMain } from "./components/form-main.component";

export const FormBuilder = () => {
  return (
    <main className="container flex justify-between h-screen gap-1">
      <FormElements />
      <FormMain />
      <FormConfiguration />
    </main>
  );
};
