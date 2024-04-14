import { Container, Heading, Paragraph, DownloadButton, TextContainer, Wrapper, Span } from '../styles/HomeStyles';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import Profile from '../components/Profile';

const Home = () => {

  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Paixão...', 'em desenvolver', 'Prazer...', 'em entregar...', 'Soluções']; 
  const animationDuration = 4000;
  const initialTextDisplayDuration = 500;

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: animationDuration},
    reset: true,
    reverse: textIndex % 1 === 1, 
    onRest: () => {
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); 
      }, textIndex === 0 ? initialTextDisplayDuration :0); 
    },
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, initialTextDisplayDuration);

    return () => clearTimeout(timeoutId);
  },[texts.length]);


  return (
    <Wrapper>
     <Container>
      <Heading> <Span>J</Span>ean<Span>S</Span>ouza </Heading>
      <Paragraph>Front-end <Span>Dev</Span>eloper</Paragraph>
    
     <TextContainer>
      <animated.div style={props}>
        <p>{texts[textIndex]}</p>
      </animated.div>
      <DownloadButton style={{textDecorationLine: 'none'}} 
      href='https://drive.google.com/uc?export=download&id=1pkThIxwHixNdzG-5D-2cwLp1GHw5-Ap7' 
      download>
          Download CV
      </DownloadButton>
    </TextContainer>
    </Container>
      <Profile />
    </Wrapper>
  );
}

export default Home;


