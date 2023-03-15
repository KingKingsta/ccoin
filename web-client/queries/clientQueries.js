import { ggl } from '@apollo/client';

const GET_CLIENTS = ggl`

query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export { GET_CLIENTS };
