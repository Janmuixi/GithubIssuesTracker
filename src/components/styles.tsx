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
  background: rgba(255, 255, 255, 0.1);
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
`;
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;
export const IssuesListContainer = styled.ul`
  min-height: 400px;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;
`;
export const IssuesListItemContainer = styled.li`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
  .arrow {
    width: 40px;
    height: 40px;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const LoadMoreButtonStyled = styled.button`
  width: 60%;
  max-width: 800px;
  height: 60px;
  border-radius: 10px;
  font-size: 20px;
  border: 1px solid #b554d7;
  color: #b554d7;
  background-color: rgb(var(--background-rgb));
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    color: rgb(var(--background-rgb));
    background-color: #b554d7;
  }
`;
export const LoaderContainerStyled = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LoaderStyled = styled.div`
  /* HTML: <div class="loader"></div> */
.loader {
  display: inline-flex;
  gap: 5px;
  animation: l3-0 1s infinite;
  transform-origin: 50% calc(100% + 2.5px);
}
.loader:before,
.loader:after {
  content: "";
  width: 25px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
}
.loader:after {
  transform-origin: -2.5px calc(100% + 2.5px);
  animation: l3-1 1s infinite;
}
@keyframes l3-1 {
  50%,
  100% {transform:rotate(180deg)}
}
@keyframes l3-0 {
  0%,
  50%  {transform:rotate(0deg)}
  100% {transform:rotate(90deg)}
}
`;
