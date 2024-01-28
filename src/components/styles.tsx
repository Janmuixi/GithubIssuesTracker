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
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;
export const SwitchButton = styled.button`
    border-radius: 40px;
    border: 2px solid #fefbff;
    color: #fff;
    font-weight: 600;
    background: rgb(0, 150, 32);
    width: 80px;
    height: 40px;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    &.closed {
        background: rgb(255, 40, 0);
    }
`
export const SearchBarContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    width: 100%;
`;
export const IssuesListContainer = styled.div`
    min-height: 400px;
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
`
export const IssuesListItemContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    cursor: pointer;
    padding: 10px 5px;
    transition: all 0.2s ease;
    .title {
        width: 100%;
    }
    .left-content {
        width: 75%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
    }
    .author {
        font-weight: 700;
        color: #b554d7;
    }
    .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .avatar {
        border-radius: 40px;
    }
    .arrow {
        width: 40px;
        height: 40px;
        transition: all 0.2s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.10);
    }
`