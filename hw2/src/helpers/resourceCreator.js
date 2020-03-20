
export default {
    createRegularUser: () => {
        return {
            login: 'regularUser',
            password: 'regularPassword',
            age: 22,
            isDeleted: false
        };
    },
    createEmptyUserField: () => {
        return {
            login: '',
            password: '',
            age: '',
            isDeleted: ''
        };
    },
    createEmptyLoginField: () => {
        return {
            login: '',
            password: 'notAnEmptyPassword',
            age: 22,
            isDeleted: false
        };
    },
    createEmptyPasswordField: () => {
        return {
            login: 'notAnEmptyUsername',
            password: '',
            age: 22,
            isDeleted: false
        };
    },
    createWithNoLogin: () => {
        return {
            password: 'passwordWithNoUsername',
            age: 22,
            isDeleted: false
        };
    },
    createWithNoPassword: () => {
        return {
            login: 'loginWithNoPassword',
            age: 22,
            isDeleted: false
        };
    },
    userWithInvalidUsername: () => {
        return {
            login: '123thomas',
            password: 'invalidUsername',
            age: 22,
            isDeleted: false
        };
    },
    userWithOnlyNumsForUsername: () => {
        return {
            login: '34',
            password: 'invalidUsername',
            age: 22,
            isDeleted: false
        };
    },
    userWithOneCharUsername: () => {
        return {
            login: 'a',
            password: 'invalidUsername',
            age: 22,
            isDeleted: false
        };
    },
    userWithInvalidEmail: () => {
        return {
            login: 'invalidUserEmail',
            password: 'invalidEmailPassword',
            age: 22,
            isDeleted: false
        };
    },
    userWithInvalidPassword: () => {
        return {
            login: 'invalidPasswordUsername',
            password: '',
            age: 22,
            isDeleted: false
        };
    }
};
