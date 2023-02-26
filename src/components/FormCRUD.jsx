import React, { useState, useEffect } from "react";

const initialForm = {
  nameAnimal: "",
  typeAnimal: "",
  id: null,
};

const FormCRUD = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nameAnimal || !form.typeAnimal) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (

    <div className="mt-4">
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="mt-3 p-1"
          type="text"
          name="nameAnimal"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nameAnimal}
        />
        <input
          className="mt-3 p-1"
          type="text"
          name="typeAnimal"
          placeholder="Tipo"
          onChange={handleChange}
          value={form.typeAnimal}
        />
        <div>
          <input className="mt-3 btn btn-dark" type="submit" value="Enviar" />
        </div>
          <input className="mt-3 btn btn-dark" type="reset" value="Limpiar" onClick={handleReset} />

      </form>
    </div>

  );
};

export default FormCRUD;