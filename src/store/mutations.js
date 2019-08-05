const addUploadEventsToStore = (state, events) => {
    state.events.add(events);
};

const addVideoKeysToStore = (state, keys) => {
    state.events.add(keys);

};

export default {
    addUploadEventsToStore,
    addVideoKeysToStore,
};