import styled from 'styled-components';

export const Form = styled.form `
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
    width: 100vw;
    max-width: 50vw;
    box-sizing: border-box;
`;

export const Input = styled.input `
    flex: 1 1 200px;
    min-width: 150px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
`;

export const Button = styled.button `
    padding: 8px 16px;
    background: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        background: #218838;
    }
`;