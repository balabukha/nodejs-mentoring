const exceptionHandler = () => {
    process.on('uncaughtException', (er) => {
        console.error(er.stack);
        process.exit(1);
    });

    process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise, 'reason:', reason);
        process.exit(1);
    });
};

export default exceptionHandler;
