
import styled from 'styled-components';

export const ImgWrapper = styled.div`
    max-with: 555px;
    height: 100%
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

`;

export const FlexImgPosition = styled.div`
    display: flex;
    margin-top: 100px;
    transform: translateX(-30px);
    
    @media screen and (max-width: 720px) {
        margin-top: 0px;
        margin-left: 40px;
    }
`;