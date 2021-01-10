import { useState } from "react";
export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (name, value) => {
      setValues({
        ...values,
        [name]: value
      });
    }
  ];
};
