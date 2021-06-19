
import styled from 'styled-components';

const primary = "#d45d83" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white


export const FooterContainer = styled.div`
    background-color: ${primary};
`;

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: ${white};

    @media screen and (max-width) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled.a`
    color: ${white};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: ${secondary};
        transition: 0.3s ease-out;
    }
`;

export const FooterTextSmall = styled.p`
    font-size: 8px;
    color: ${white};
    text-align: center;
`;
