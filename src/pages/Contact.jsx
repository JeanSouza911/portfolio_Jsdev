import React from 'react';
import { Container, ContactInfo, ContactItem, Link } from '../styles/ContactStyles';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container>
      <h1>Entre em contato comigo para discutir oportunidades de colaboração ou apenas para dizer oi!</h1>
      <ContactInfo>
        <ContactItem> 
          <Link href='mailto:shadowjean911@gmail.com'><SiGmail style={{ color: `#d44638`}}/></Link>
          <p>Me mande um e-mail!</p>
        </ContactItem>
        
        <ContactItem> 
          <Link href="https://www.linkedin.com/in/jean-souza-79b491160/"><FaLinkedin style={{ color: `#0077b5`}} /></Link>
          <p>Visite meu perfil no LinkedIn!</p>
        </ContactItem>
        
        <ContactItem> 
          <Link href="https://wa.me/5516997062310"><FaWhatsapp style={{ color: `#25d366`}} /></Link>
          <p>Me chame no Whatsapp!</p>
        </ContactItem>
        <></>
      </ContactInfo>
    </Container>
  );
}

export default Contact;
