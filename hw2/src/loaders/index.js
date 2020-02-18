import expressLoader from './express';
import Users from './userModel';

export default async ({ expressApp }) => {
    await expressLoader({ app: expressApp });
    console.log('Express Intialized');
    await new Users();
};
