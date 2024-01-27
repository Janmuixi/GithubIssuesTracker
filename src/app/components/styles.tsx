import styled from "styled-components";

export const Input = styled.input`
    border-radius: 40px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
    height: 40px;
    width: 600px;
    min-width: 200px;
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    padding: 10px 12px;
`;

export const SearchButton = styled.button`
    border-radius: 40px;
    border: 2px solid #b554d7;
    background: #b554d7;
    width: 40px;
    height: 40px;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;
export const CloseButton = styled.button`
    border-radius: 40px;
    border: 2px solid #b554d7;
    background: rgba(255, 255, 255, 0.10);
    width: 40px;
    height: 40px;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;
export const SearchBarContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    flex: 1 0 0;
    width: 100%;
`;
