import { useState } from 'react';

const useForm = (form, { file, middleware } = { file: false, middleware: false }) => {
  const dataForm = {};
  form.forEach(({ name, value }) => dataForm[name] = value);

  const [data, setData] = useState(dataForm);
  const handleChange = async (e) => {

    if (e.target.type === 'file' && file) {      
      setData({
        ...data,
        [e.target.name]: await file(e.target.files),
      });
    }

    const newData = {
      ...data,
      [e.target.name]: e.target.value
    };

    if (middleware) {
      setData(
        middleware(newData, e.target.name)
      );
    } else {
      setData(newData);
    }
  }

  return { data, handleChange };
};

export default useForm;
