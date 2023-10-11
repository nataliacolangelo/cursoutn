import '../styles/components/Contacto.css';
const ContactoPage = (props) =>{
    return (
        <main className="holder contacto ">
            <div>
                <h2>Contacto rápido</h2>
                <form action="" method="" class="Formulario">
                    <p>
                        <label for="Nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="Email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="Telefono">Telefono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="Mensaje">Mensaje</label>
                        <textarea name="" ></textarea>
                    </p>
                    <p class="acciones"><input type="submit"
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