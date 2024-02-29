import { Container, Heading, Paragraph, Footer  } from '../styles/AboutStyles';
import { Span } from '../styles/HomeStyles';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGit} from 'react-icons/fa';

const About = () => {
 
  return (
    <>
    <Container>
      <Heading>Um pouco sobre <Span>Jean Souza</Span></Heading>
      <Paragraph>Olá! Sou um Desenvolvedor front-end apaixonado por tecnologia, com uma trajetória profissional diversificada. Iniciei minha carreira na área de vendas, onde trabalhei por 13 anos. Durante esse tempo, descobri minha paixão pela tecnologia e decidi fazer uma transição de carreira.
        Comecei minha jornada na área de desenvolvimento com um ano de estudos em análise e desenvolvimento de sistemas. Embora tenha trancado o curso, pretendo retomá-lo em breve, pois acredito na importância da educação contínua.
        Além da minha formação acadêmica, busquei aprimorar minhas habilidades por meio de cursos online em plataformas digitais, o que me rendeu diversos certificados. Essa experiência enriqueceu meu conhecimento e me permitiu adquirir habilidades técnicas essenciais para atuar como Desenvolvedor front-end.
        Atualmente, estou em busca de novas oportunidades para aplicar meus conhecimentos e contribuir de forma significativa em projetos desafiadores. Estou entusiasmado com as possibilidades que a tecnologia oferece e motivado a continuar aprendendo e crescendo como profissional.
      </Paragraph>
    </Container>
      <Footer>
        <h1>Skills:</h1>
        <Span>
        <FaHtml5 size={80} />
        <FaCss3 size={80} />
        <FaJs size={80} />
        <FaReact size={80} />
        <FaGit size={80} />
        </Span>
      </Footer>
    </>
    
  )
}

export default About;