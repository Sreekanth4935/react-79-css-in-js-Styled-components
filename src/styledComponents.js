import styled from 'styled-components'

export const Heading = styled.h1`
  color: red;
  font-family: 'roboto';
`
export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.outline ? '#ffffff' : '#007c51')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outline ? '#007c51' : '#ffffff')};
`
