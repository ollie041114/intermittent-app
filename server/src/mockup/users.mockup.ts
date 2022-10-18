import { UserDTO } from '../dto/userDTO';

export const MOCKUP_USERS: UserDTO[] = Array.from({ length: 5 }, (_, idx) => {
  const numStr = idx.toString(10);
  return {
    email: `workerEmail${numStr.padStart(2, '0')}@google.com`,
    name: `name${numStr.padStart(2, '0')}`,
    password: `password${numStr.padStart(2, '0')}`,
  };
}).slice(1);
