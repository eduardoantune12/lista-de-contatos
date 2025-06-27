import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 600px; /* valor ajustável para desktop */
`;

export const Item = styled.li`
    background: #fff;
    margin-bottom: 10px;
    padding: 10px 16px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    gap: 16px;
    flex-wrap: wrap;
    max-width: 100%;

    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        max-width: 100%;
        padding: 8px;
        gap: 8px;
        align-items: flex-start;
    }
`;

export const ContactInfo = styled.span`
    flex: 1 1 0;
    min-width: 0;
    white-space: normal;
    word-break: break-word;
    font-size: 1rem;

    @media (max-width: 600px) {
        display: block;
        font-size: 0.92rem;
        margin-bottom: 4px;
        width: 100%;
    }
`;

export const ButtonGroup = styled.span `
    display: flex;
    flex-shrink: 0;
    gap: 8px;
    align-items: center;
`;

export const Button = styled.button `
    padding: 8px 16px;
    background: ${({ variant }) =>
        variant === "edit" ? "#007bff" :
        variant === "remove" ? "#dc3545" : "#007bff"};
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        background: ${({ variant }) =>
            variant === "edit" ? "#0056b3" :
            variant === "remove" ? "#c82333" : "#0056b3"};
    }
`;