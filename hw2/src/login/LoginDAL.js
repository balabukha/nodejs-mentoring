import models from '../loaders/models';

export default {
    findUserByLogin({ login }) {
        return models.Users.findOne({
            where: {
                login
            },
            raw: true
        });
    }
};
