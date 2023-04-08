import React from 'react'
import Form from '../Components/Form'

const Contacto = () => {
    return (
        <div style={{ height:'80vh'}}>
          <div className="contact">
            <h2>¿Quieres saber más?</h2>
            <p>
              Envíanos tus preguntas y nos <br></br>
              pondremos en contacto contigo
            </p>
          </div>
          <Form />
        </div>
      );
}

export default Contacto