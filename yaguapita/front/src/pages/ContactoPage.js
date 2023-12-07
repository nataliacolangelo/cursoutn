import '../styles/components/Contacto.css';
import React, { useState } from 'react';
import axios from 'axios'; 

const ContactoPage = (props) =>{

     const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
     }

     const [sending, setSending] = useState(false);
     const [msg, setMsg] = useState('');
     const [formData, setFormData] = useState(initialForm);

     const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ( {
            ...oldData,
            [name]: value
        }));
     }
    
     const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
     }
     

    return (
        <main className="holder contacto ">
            <div>
                <h2>Contacto rápido</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="Formulario">
                    <p>
                        <label for="Nombre">Nombre</label>
                        <input type="text" name="nombre"  value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="Email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="Telefono">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="Mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className="acciones"><input type="submit"
                         value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="Datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 2475-411911</li>
                    <li>Instagram: yaguapitarc</li>
                    <li>Facebook: yaguapitarc</li>
                    <li>Twitter: @PitaYagua</li>
                </ul>
                    

            </div>
            
        </main>
    );
}

export default ContactoPage; 