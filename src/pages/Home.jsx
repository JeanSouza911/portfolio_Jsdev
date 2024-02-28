import { Container, Heading, Paragraph, DownloadButton, TextContainer, Wrapper, Span } from '../styles/HomeStyles';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import Profile from '../components/Profile';

const Home = () => {

  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Paixão em desenvolver', 'Prazer em entregar soluções']; // Adicione quantos textos quiser
  const animationDuration = 4000; // Duração da animação em milissegundos
  const initialTextDisplayDuration = 500; // Tempo de exibição inicial do primeiro texto em milissegundos

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: animationDuration},
    reset: true,
    reverse: textIndex % 1 === 1, // Inverte a animação a cada novo texto
    onRest: () => {
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Avança para o próximo texto
      }, textIndex === 0 ? initialTextDisplayDuration :0); // Tempo de espera antes de mudar para o próximo texto
    },
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Avança para o próximo texto após o tempo inicial
    }, initialTextDisplayDuration);

    return () => clearTimeout(timeoutId);
  },[texts.length]); // Executa apenas uma vez no início


  return (
    <Wrapper>
     <Container>
      <Heading> <Span>J</Span>ean<Span>S</Span>ouza </Heading>
      <Paragraph>Front-end <Span>Dev</Span>eloper</Paragraph>
    
    <TextContainer>
      <animated.div style={props}>
        <p>{texts[textIndex]}</p>
      </animated.div>
      <DownloadButton style={{textDecorationLine: 'none'}} href='https://drive.google.com/uc?export=download&id=1pkThIxwHixNdzG-5D-2cwLp1GHw5-Ap7'>
          Download CV
    </DownloadButton>
    </TextContainer>
    
    
      </Container>
      <Profile />
    </Wrapper>
  );
}

export default Home;


