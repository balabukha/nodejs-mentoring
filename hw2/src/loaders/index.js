import expressLoader from './express';
import Users from '../model/user';

export default async ({ expressApp }) => {
  const ExpressConnection = await expressLoader({ app: expressApp });
  console.log('Express Intialized');
  const UsersConnection = await new Users();
}
