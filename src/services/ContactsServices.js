import HttpClient from './utils/HttpClient';

class ContactsServices {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:4000');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/?orderBy=${orderBy}`);
  }

  async creactContact(contact) {
    return this.httpClient.post('/contacts', {
      body: contact,
    });
  }
}

export default new ContactsServices();
