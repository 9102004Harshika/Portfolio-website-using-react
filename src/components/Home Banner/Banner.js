import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

import headerImg from '../assets/img/header-img.svg'
import { useEffect,useState } from 'react'
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Harshika"," a Student","a Web Developer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }  
  return (
   <section className='banner' id='home'>
    <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6}xl={7}>
            <h1>{`Hi I'm ${text}`}</h1>
            
            <span className='tagline'><a href='/'>WELCOME TO MY PORTFOLIO</a></span> 
            <p>Believe in learning by doing.</p><br></br>
            
            </Col>
            <Col xs={12} md={6}xl={5}>
                <img src={headerImg} alt="header img"></img>
            </Col>
        </Row>
    </Container>
   </section>
  )
}
export default Banner
