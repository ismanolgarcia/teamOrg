import styled from 'styled-components';
import { InputTextStyled } from '../../StyledComponents/InputTextStyled';
import { Label } from '../../StyledComponents/Label';

const Container = styled.div`
  margin: 24px 0;
`;

const InputText = ({ title, placeholder, required, valor, updateValue }) => {
  const handleChange = (event) => {
    updateValue(event.target.value);
  };

  return (
    <Container>
      <Label>{title}</Label>
      <InputTextStyled
        type="text"
        placeholder={placeholder}
        value={valor}
        required={required}
        onChange={handleChange}
      />
    </Container>
  );
};

export default InputText;
