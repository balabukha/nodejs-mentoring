import LoginDAL from './LoginDAL';

export default {
    async findAndComparePasswords({ login, password }) {
        if (login && password) {
            const user = await LoginDAL.findUserByLogin({ login });
            if (user && user.password && user.password === password) {
                return Promise.resolve();
            }
        }

        return Promise.reject();
    }
};
