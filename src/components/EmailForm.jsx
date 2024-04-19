import React from 'react'
import emailjs from '@emailjs/browser';

const MeContacter = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const serviceId = 'service_ylfw1io';
        const templateId = 'template_s7uj06k';
        const publicKey = 'Mu4KpgbcdIf9q5ggE';
    
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Emma',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully',response);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.log(error.text);
        });
    }

    return (
    <div>
      <form onSubmit={handleSubmit} className='emailForm'>
      <label>Name</label>
      <input 
        type="text"
        placeholder="Your name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <label>Email</label>
      <input 
        type="email" 
        placeholder="Your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <label>Message</label>
      <textarea
        cols = "30"
        rows = "10" 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        /> 
      <button type="submit">Envoyer le message</button>
    </form>
    </div>
  )
}

export default MeContacter
