const addUploadEventsToStore = (state, events) => {
    state.events = events;
};

const addVideoKeysToStore = (state, keys) => {
    state.keys = keys;
};

export default {
    addUploadEventsToStore,
    addVideoKeysToStore,
};