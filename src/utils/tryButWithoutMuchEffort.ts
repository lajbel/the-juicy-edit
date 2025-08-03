export const tryButWithoutMuchEffort = (call: () => any) => {
    try {
        call();
    } catch (e) {
        // No problem boy, we're not perfect!
    }
};
