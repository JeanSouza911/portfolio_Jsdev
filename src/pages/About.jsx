import React from 'react';
import { Container, Heading, Paragraph, Footer  } from '../styles/AboutStyles';
import { Span } from '../styles/AboutStyles';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGit} from 'react-icons/fa';

const About = () => {
 
  return (
    <>
    <Container>
      <Heading>Um pouco sobre <Span>Jean Souza</Span></Heading>
      <Paragraph>Olá! Sou um Desenvolvedor front-end com foco e experiência em React, conhecimentos em Vue e Angular. Estou sempre disposto a aprender e atuar com qualquer tecnologia. Comecei minha jornada na área de desenvolvimento com um ano e meio de estudos em análise e desenvolvimento de sistemas. Além da minha formação acadêmica, busquei aprimorar minhas habilidades por meio de cursos online em plataformas digitais, o que me rendeu diversos certificados. Essa experiência enriqueceu meu conhecimento e me permitiu adquirir habilidades técnicas essenciais para atuar como Desenvolvedor front-end.
        Atualmente, estou em busca de novas oportunidades para aplicar meus conhecimentos e contribuir de forma significativa em projetos desafiadores.
      </Paragraph>
    </Container>
      <Footer>
        <h2>Skills:</h2>
      <Span>
        <FaHtml5 />
        <FaCss3 />
        <FaJs />
        <FaReact />
        <FaGit />
      </Span>
      </Footer>
    </>
    
  )
}

export default About;