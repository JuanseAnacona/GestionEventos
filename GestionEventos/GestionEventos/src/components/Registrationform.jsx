import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nombre_completo: '',
    email: '',
    telefono: '',
    rol: '',
    talleres: '',
    titulo_presentacion: '',
    nombre_stand: '',
    disponibilidad_horaria: '',
    funcion_especifica: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showSummary) {
      axios.post('http://localhost:8000/registro/inscripciones/', formData)
        .then((response) => {
          setSubmitted(true);
          setErrors({});
          console.log('Registro exitoso:', response.data);
        })
        .catch((error) => {
          setSubmitted(false);
          if (error.response && error.response.data) {
            setErrors(error.response.data);
          }
        });
    } else {
      setShowSummary(true);
    }
  };

  const handleEdit = () => {
    setShowSummary(false);
  };

  const renderRoleSpecificFields = () => {
    switch (formData.rol) {
      case 'Asistente':
        return (
          <div>
            <label htmlFor="talleres">Talleres</label>
            <input
              type="text"
              name="talleres"
              value={formData.talleres}
              onChange={handleChange}
            />
            {errors.talleres && <span>{errors.talleres[0]}</span>}
          </div>
        );
      case 'Ponente':
        return (
          <div>
            <label htmlFor="titulo_presentacion">Título de la Presentación</label>
            <input
              type="text"
              name="titulo_presentacion"
              value={formData.titulo_presentacion}
              onChange={handleChange}
            />
            {errors.titulo_presentacion && <span>{errors.titulo_presentacion[0]}</span>}
          </div>
        );
      case 'Expositor':
        return (
          <div>
            <label htmlFor="nombre_stand">Nombre del Stand o Empresa</label>
            <input
              type="text"
              name="nombre_stand"
              value={formData.nombre_stand}
              onChange={handleChange}
            />
            {errors.nombre_stand && <span>{errors.nombre_stand[0]}</span>}
          </div>
        );
      case 'Voluntario':
        return (
          <div>
            <label htmlFor="disponibilidad_horaria">Disponibilidad Horaria</label>
            <input
              type="text"
              name="disponibilidad_horaria"
              value={formData.disponibilidad_horaria}
              onChange={handleChange}
            />
            {errors.disponibilidad_horaria && <span>{errors.disponibilidad_horaria[0]}</span>}
          </div>
        );
      case 'Organizador':
        return (
          <div>
            <label htmlFor="funcion_especifica">Función Específica</label>
            <input
              type="text"
              name="funcion_especifica"
              value={formData.funcion_especifica}
              onChange={handleChange}
            />
            {errors.funcion_especifica && <span>{errors.funcion_especifica[0]}</span>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {submitted ? (
        <h2>¡Registro exitoso!</h2>
      ) : showSummary ? (
        <div>
          <h2>Resumen del Registro</h2>
          <p><strong>Nombre Completo:</strong> {formData.nombre_completo}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Teléfono:</strong> {formData.telefono}</p>
          <p><strong>Rol:</strong> {formData.rol}</p>
          {formData.rol === 'Asistente' && <p><strong>Talleres:</strong> {formData.talleres}</p>}
          {formData.rol === 'Ponente' && <p><strong>Título de la Presentación:</strong> {formData.titulo_presentacion}</p>}
          {formData.rol === 'Expositor' && <p><strong>Nombre del Stand o Empresa:</strong> {formData.nombre_stand}</p>}
          {formData.rol === 'Voluntario' && <p><strong>Disponibilidad Horaria:</strong> {formData.disponibilidad_horaria}</p>}
          {formData.rol === 'Organizador' && <p><strong>Función Específica:</strong> {formData.funcion_especifica}</p>}

          <button onClick={handleEdit} className="bg-blue-500 px-3 py-2 rounded-lg text-white">Editar</button>
          <button onClick={handleSubmit} className="bg-indigo-500 px-3 py-2 rounded-lg text-white ml-4">Confirmar Registro</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Formulario de Registro</h1>
          <div>
            <label htmlFor="nombre_completo">Nombre Completo</label>
            <input
              type="text"
              name="nombre_completo"
              value={formData.nombre_completo}
              onChange={handleChange}
              required
            />
            {errors.nombre_completo && <span>{errors.nombre_completo[0]}</span>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span>{errors.email[0]}</span>}
          </div>

          <div>
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
            {errors.telefono && <span>{errors.telefono[0]}</span>}
          </div>

          <div>
            <label htmlFor="rol">Rol</label>
            <select name="rol" value={formData.rol} onChange={handleChange} required>
              <option value="">Seleccione un rol</option>
              <option value="Asistente">Asistente</option>
              <option value="Ponente">Ponente</option>
              <option value="Expositor">Expositor</option>
              <option value="Voluntario">Voluntario</option>
              <option value="Organizador">Organizador</option>
            </select>
            {errors.rol && <span>{errors.rol[0]}</span>}
          </div>

          {renderRoleSpecificFields()}

          <button type="submit" className="bg-indigo-500 px-3 py-2 rounded-lg text-white">Vista Previa</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
