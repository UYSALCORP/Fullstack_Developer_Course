import styled from "styled-components";

const KartSSS = styled.div`
  background-color: bisque;
  border-radius: 15px;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 60px;
  display: flex;
  flex-direction: ${({celal})=> celal };
  box-shadow: ${({theme})=>theme.shadow};

  @media screen and (max-width:${({theme})=>theme.responsive}) {
        flex-direction: column;
        background-color: pink;
        img{
            width: 100%;
        }
    }
`;

export default KartSSS;
