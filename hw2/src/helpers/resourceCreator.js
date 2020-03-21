
export default {
    createRegularUser: () => {
        return {
            login: 'regularUser',
            password: 'regularPassword',
            age: 22,
            isDeleted: false,
            id: '12345'
        };
    },
    createRegularUserToUpdate: () => {
        return {
            login: 'regularUser2',
            password: 'regularPassword2',
            age: 33,
            isDeleted: false,
            id: '12345'
        };
    },
    createEmptyUserField: () => {
        return {
            login: '',
            password: '',
            age: '',
            isDeleted: '',
            id: '12345'
        };
    },
    createEmptyLoginField: () => {
        return {
            login: '',
            password: 'notAnEmptyPassword',
            age: 22,
            isDeleted: false,
            id: '12345'
        };
    },
    createEmptyPasswordField: () => {
        return {
            login: 'notAnEmptyUsername',
            password: '',
            age: 22,
            isDeleted: false,
            id: '12345'
        };
    },
    createWithNoLogin: () => {
        return {
            password: 'passwordWithNoUsername',
            age: 22,
            isDeleted: false,
            id: '12345'
        };
    },
    createWithNoPassword: () => {
        return {
            login: 'loginWithNoPassword',
            age: 22,
            isDeleted: false,
            id: '12345'
        };
    },
    userWithInvalidUsername: () => {
        return {
            login: '123thomas',
            password: 'invalidUsername',
            age: 22,
            isDeleted: false,
            id: '12345'
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
            isDeleted: false,
            id: '12345'
        };
    },
    userWithInvalidEmail: () => {
        return {
            login: 'invalidUserEmail',
            password: 'invalidEmailPassword',
            age: 22,
            isDeleted: false,
            id: '12345'
        };
    },
    userWithInvalidPassword: () => {
        return {
            login: 'invalidPasswordUsername',
            password: '',
            age: 22,
            isDeleted: false,
            id: '12345'
        };
    }
};
