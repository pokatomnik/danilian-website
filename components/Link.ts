import styled from 'styled-components';
import { Colors } from '../constants';

export const Link = styled.a`
  color: ${Colors.LINK};
  text-decoration-style: dotted;
  &::visited {
    color: ${Colors.LINK};
  }
  &::active {
    color: ${Colors.LINK};
  }
`;
