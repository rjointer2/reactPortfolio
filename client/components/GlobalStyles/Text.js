
import styled from 'styled-components';


export const TextWrapper = styled.div`
    max-width: 540px;
    padding: 0;
    padding-bottom: 60px;
`;

export const Title = styled.div`
    color: #010191;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.div`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => ( lightText ? 'black' : 'white' )}
`;
