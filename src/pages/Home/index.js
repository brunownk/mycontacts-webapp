import { Link } from 'react-router-dom';

import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

const mockList = [
  {
    _id: '2132314',
    name: 'Bruno Neckel',
    email: 'neckel.bw@gmail.com',
    phone: '(45) 99999-9999',
    category: {
      _id: '2132314',
      name: 'instagram',
    },
  },
  {
    _id: '2132314',
    name: 'Bruno Neckel',
    email: 'neckel.bw@gmail.com',
    phone: '(45) 99999-9999',
    category: {
      _id: '2132313',
      name: 'instagram',
    },
  },
  {
    _id: '2132314',
    name: 'Bruno Neckel',
    email: 'neckel.bw@gmail.com',
    phone: '(45) 99999-9999',
    category: {
      _id: '2132312',
      name: 'instagram',
    },
  },
];

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow " />
          </button>
        </header>

        {mockList.map((contact) => (
          <Card key={contact._id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                <small>{contact.category.name}</small>
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact._id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        ))}
      </ListContainer>
    </Container>
  );
}
