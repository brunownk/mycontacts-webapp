import { useRef } from 'react';

import ContactsServices from '../../services/ContactsServices';
import toast from '../../utils/toast';

export default function useNewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      await ContactsServices.creactContact(contact);

      contactFormRef.current.resetField();
      toast({
        type: 'success',
        text: 'Contato cadatrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }

  return { contactFormRef, handleSubmit };
}
