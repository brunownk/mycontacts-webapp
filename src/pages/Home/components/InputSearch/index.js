import PropTypes from 'prop-types';

import { Container } from './styles';

export default function InputSearch({ value, onChange }) {
  return (
    <Container>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Pesquisar contato"
      />
    </Container>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
