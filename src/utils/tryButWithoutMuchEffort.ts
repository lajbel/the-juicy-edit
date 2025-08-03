const tryButWithoutMuchEffort = (call: () => any) => {
    try {
        call();
    } catch {
        // No problem boy, we're not perfect!
    }
};
