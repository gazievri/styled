import styled from 'styled-components';
import Flex from './Flex';
import { useState } from 'react';
import Line from './Line';

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background-color: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${props => props.color || props.theme.colors.primary};
  
  &:focus {
    outline: none;
  }

  @media ${props => props.theme.media.phone} {
    border: 1px solid red;
  }

  @media ${props => props.theme.media.tablet} {
    border: 1px solid green;
  }
  
`;

function Console(props) {
  const [lines, setLines] = useState(['C/user/GRINRUS>']);

  const onKeyPress = e => {
    if (e.charCode == 13) {
        setLines(['C/user/GRINRUS>', ...lines])
    }
  }

  return (
    <Flex>
      <Flex direction={'column'} margin="0 10px">
        {lines.map((line) => (
          <Line>{line}</Line>
        ))}
      </Flex>
      <StyledConsole onKeyDown={onKeyPress} {...props} />
    </Flex>
  );
}

export default Console;
