import { Container, Project, Title, Description, Link } from '../styles/ProjectStyles';
import { Span } from '../styles/HomeStyles';

const Projects = () => {
  return (
    <>
      <Container>
          <Project>
            <Link href="https://decoract.vercel.app/" target="_self" rel="noopener noreferrer">
              <img src="./img/decoract.png" alt="Decoract"/>
            </Link>
            <Title><Span>Decoract</Span></Title>
            <Description>Landing page desenvolvida com HTML5, CSS3 e JavaScript.</Description>
          </Project>
        
          <Project>
            <Link href="https://moviesquery.vercel.app/" target="_self" rel="noopener noreferrer">
              <img src="./img/Mq.png" alt="MoviesQuery"/>
            </Link>
            <Title><Span>MoviesQuery</Span></Title>
            <Description>S.P.A em React que traz informações relevantes sobre filmes através da API do TMDB.</Description>
          </Project>
          
          <Project>
            <Link href="#" target="_self" rel="noopener noreferrer">
              <img src="./img/comingSoon.jpg" alt="Future Projects"/>
            </Link>
            <Title><Span>Por enquanto é só...</Span></Title>
            <Description>Em breve mais projetos por aqui!</Description>
          </Project>
          <h1>Para mais detalhes sobre estes e outros projetos, acesse meu <Link href='https://github.com/JeanSouza911'>github!</Link></h1>
      </Container>
    </>
  );
} 

export default Projects;
