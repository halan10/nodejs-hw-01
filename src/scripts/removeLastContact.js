import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.splice(contacts.length - 1, contacts.length);
      await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
    } else {
      console.log(
        'Sorry, it is not possible to delete the last contact because the array is empty'
      );
    }
  } catch (error) {
    console.error('Error: ', error);
  }
};

removeLastContact();
