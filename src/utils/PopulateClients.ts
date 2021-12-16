import { Subsidiary } from '../model/Subsidiary';
import { Phone } from '../model/Phone';
import { Client } from '../model/Client';

export const populateClients = (subsidiary: Subsidiary) => {
  const clients = subsidiary.getClients;

  clientsMock.forEach(clientMock => {
    let gender, name, birthday, cpf, pseudonym;
    let phones: Phone[] = [];

    if (clientMock.pseudonym != undefined) {
      gender = clientMock.gender;
      name = clientMock.name;
      birthday = clientMock.birthday;
      cpf = clientMock.cpf;
      pseudonym = clientMock.pseudonym;

      clientMock.phones.forEach(phone => {
        phones.push(new Phone(phone.ddd, phone.number));
      });

      const newClient = new Client(
        gender,
        name,
        birthday,
        cpf,
        phones,
        pseudonym
      );

      clients.push(newClient);
    } else {
      gender = clientMock.gender;
      name = clientMock.name;
      birthday = clientMock.birthday;
      cpf = clientMock.cpf;

      clientMock.phones.forEach(phone => {
        phones.push(new Phone(phone.ddd, phone.number));
      });

      const newClient = new Client(
        gender,
        name,
        birthday,
        cpf,
        phones,
        'não há'
      );

      clients.push(newClient);
    }
  });

  subsidiary.setClients(clients);
};

const clientsMock = [
  {
    gender: 'feminino',
    name: 'Maria',
    birthday: new Date(),
    cpf: 123,
    phones: [
      { ddd: 12, number: 111111111 },
      { ddd: 12, number: 222222222 },
    ],
    pseudonym: 'Maby',
  },
  {
    gender: 'feminino',
    name: 'Gabriela',
    birthday: new Date(),
    cpf: 1234,
    phones: [{ ddd: 12, number: 333333333 }],
    pseudonym: 'Gabi',
  },
  {
    gender: 'masculino',
    name: 'Gabriel',
    birthday: new Date(),
    cpf: 12345,
    phones: [{ ddd: 12, number: 44444444 }],
  },
  {
    gender: 'masculino',
    name: 'Renato',
    birthday: new Date(),
    cpf: 123456,
    phones: [{ ddd: 12, number: 555555555 }],
  },
];
