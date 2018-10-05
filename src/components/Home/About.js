import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const large = css => breakpoint('large', css)
const medium = css => breakpoint('medium', css)
import tick from './assets/tick.svg'

const About = () => (
  <AboutBox>
    <OuterContainer>
      <h2>Build great decentralized user experiences</h2>
      <Subtitle>
        Lorikeet is a design system with React components, UI/UX guidelines and
        motion tools for building pleasant and performant interfaces. While the
        UI components can be used on any React app, we are focused on improving
        the UX challenges of the decentralized web.
      </Subtitle>
      <Container>
        <Box>
          <TitleContainer>
            <img src={tick}/>
            <h3>Modular component library</h3>
          </TitleContainer>
          <p>Pick what you want to use without bloating your codebase</p>
        </Box>
        <Box>
          <TitleContainer>
            <img src={tick}/>
            <h3>Decentralized UX patterns</h3>
          </TitleContainer>
          <p>Establishing user-centric UX patterns for decentralized apps</p>
        </Box>
        <Box>
          <TitleContainer>
            <img src={tick}/>
            <h3>Performant react components</h3>
          </TitleContainer>
          <p>Hand optimized performance, high code quality React components</p>
        </Box>
        <Box>
          <TitleContainer>
            <img src={tick}/>
            <h3>Smooth motion & animations</h3>
          </TitleContainer>
          <p>Best practices motion design for interactions and transitions</p>
        </Box>
        <Box>
          <TitleContainer>
            <img src={tick}/>
            <h3>Easily extensible</h3>
          </TitleContainer>
          <p>Build your own components to extend functionality</p>
        </Box>
        <Box>
          <TitleContainer>
            <img src={tick}/>
            <h3>Clean UI design</h3>
          </TitleContainer>
          <p>Clean UI design that is easily themable for your app and brand</p>
        </Box>
      </Container>
    </OuterContainer>
  </AboutBox>
)

const OuterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    padding-right: 7px;
    margin-bottom: 10px;
  }
`

const AboutBox = styled.div`
  width: 100vw;
  height: auto;
  padding: 0 20% calc(100px + 6vh) 20%;
`

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 22px;
  color: #424770;
  letter-spacing: 0;
  text-align: center;
  line-height: 36px;
  margin: 20px 0 50px 0;
`

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -35px;
`
const Box = styled.div`
  width: 100%;
  ${medium('width: 50%;')};
  ${large('width: 33%;')};
  padding: 20px;
  cursor: default;
  h3 {
    font-weight: 700;
    font-size: 15px;
    color: #32325d;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  p {
    font-size: 15px;
    color: #535f80;
    line-height: 28px;
    padding-left: 35px;
  }
  &:hover {
    p, h3 {
      color: #5E8FBF;
    }
  }
`

export default About
