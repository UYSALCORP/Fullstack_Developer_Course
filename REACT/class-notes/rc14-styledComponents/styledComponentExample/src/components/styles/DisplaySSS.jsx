import styled from 'styled-components';

const DisplaySSS = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //! Responsive
    @media screen and (max-width:${({theme})=>theme.responsive}) {
        flex-direction: column;
        img{
            width: 100%;
            margin-bottom: 15px;
        }
    }
`;

export default DisplaySSS;
