import styled from 'styled-components';

const handleWidth = (size: string) => {
  switch (size) {
    case '5x5':
      return '630px';
    case '4x4':
      return '490px';
    default:
      return '370px';
  }
};

export const StyledInput = styled.input`
  margin: 5px;
  font-size: 20px;
  border: #000088;
  font-family: monospace;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  width: 100%;
  padding: 10px;
  font-family: monospace;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 400px;
  height: 250px;
  background-color: #e1eedd;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  width: 93%;
  margin-left: 15px;
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.55);
  font-family: monospace;
  font-size: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  background-color: #f9cd0b;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: none;
  }
`;

export const StyledCenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const StyledFloorDiv = styled.div<{ size: string }>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ size = '3x3' }) => handleWidth(size)};
  height: ${({ size = '3x3' }) => handleWidth(size)};
`;

export const StyledP = styled.p`
  padding: 10px;
  margin: 0;
`;

export const StyledEnterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 400px;
  height: 150px;
  background-color: #e1eedd;
  border-radius: 4px;
`;
