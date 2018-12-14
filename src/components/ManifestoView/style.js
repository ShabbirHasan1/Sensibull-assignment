import styled from 'styled-components';
//Navbar
export const Wrapper = styled.div`
  top: 0;
  position:fixed;
  height: 50px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 1px 0 0 #e9e9e9;
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`
export const Logo = styled.div`
  justify-content: flex-start;
  width: 20%;
  padding: 6px 0 10px 14px;

  &:hover{
    cursor: pointer;
  }
`

export const FLexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
export const FLexContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const El = styled.div`
  padding: 16px 16px;
  font-family: IBMPlexSans;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #444444;
  box-sizing: border-box;
  text-decoration: none;

  &:hover{
    cursor: pointer;
  }
`
export const ProfilePic = styled.div`
  border-radius: 50%;
  background: gray;
  height: 28px;
  width: 28px;

  &:hover{
    cursor: pointer;
  }
`
//Header Background
export const HeaderBackground = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 428px;
  width: 100%;
  top: 50px;
  position: absolute;
  z-index: -10000;
`;
//Grey Section background
export const SectionBackground = styled.section`
  height: 600px;
  top: 478px;
  position: absolute;
  width: 100%;
  justify-content: center;
  background-color: #f9f9f9;
  z-index: -8000;
`
//Manifesto Center Piece
export const MainLayout = styled.section`
  margin: 222px auto 0;
  padding: 38px 60px;
  width: 100%;
  height: 853px;
  border-radius: 4px;
  background-color: #ffffff;
  z-index: 1000;
  box-sizing: border-box;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    margin: 222px auto 0;
    padding: 0px;

  }

  @media (min-width: 1024px) {
    width: 940px;
  }
`
export const Description = styled.div`
  height: 231px;


  @media (max-width: 767px){
    overflow: hidden;
    background-color: #f9f9f9;
  }
`
export const MainTitle = styled.h1`
  width: 138px;
  height: 32px;
  font-family: IBMPlexSans;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #444444;
  margin: 0px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    text-align: center;
    font-family: IBMPlexSans;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444444;
    padding-top: 57px;
    width: 100%;
  }

`
export const MainParagraph = styled.p`
  height: 174px;
  margin: 30px auto 31px;
  font-family: IBMPlexSans;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.61;
  letter-spacing: normal;
  color: #444444;
  box-sizing: border-box;

  @media (max-width: 767px){
    width: 308px;
    height: 82px;
    font-family: IBMPlexSans;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #444444;
    margin: 30px auto 10px auto;
    background-image: linear-gradient(to bottom, rgba(238, 238, 238, 0), #f9f9f9);
    overflow: hidden;
  }
`

export const ReadMore = styled.button`
  width: 104px;
  height: 24px;
  border-radius: 11.5px;
  background-color: #444444;
  z-index: 9000;
  position: relative;

  /* text inside */
  font-family: IBMPlexSans;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  @media (min-width: 768px){
    display: none;
  }
`
