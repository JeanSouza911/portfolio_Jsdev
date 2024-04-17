import { Container, Heading, Paragraph, Footer, Badges,Span, BadgeItem } from '../styles/AboutStyles';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGit } from 'react-icons/fa';

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
        <Badges>
          <BadgeItem>
            <FaHtml5 style={{ color: '#E44D26' }} /> {/* Cor original do HTML5 */}
            <p>Html5</p>
          </BadgeItem>
          
          <BadgeItem>
            <FaCss3 style={{ color: '#264DE4' }} /> {/* Cor original do CSS3 */}
            <p>CSS3</p>
          </BadgeItem>

          <BadgeItem>
            <FaJs style={{ color: '#F0DB4F' }} /> {/* Cor original do JavaScript */}
            <p>JS</p>
          </BadgeItem>

          <BadgeItem>
            <FaReact style={{ color: '#61DAFB' }} /> {/* Cor original do React */}
            <p>React</p>
          </BadgeItem>
          
          <BadgeItem>
            <FaGit style={{ color: '#F05032' }} /> {/* Cor original do Git */}
            <p>Git</p>
          </BadgeItem>
        </Badges>
      </Footer>
    </>
  )
}

export default About;
