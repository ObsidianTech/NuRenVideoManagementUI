import axios from 'axios';
import config from '../../config.js';

const apiUrl = 'http://' + config.currentEnvAPI();

const eventRoute = "events/";
const keysRoute = "keys/";

const getUploadEvents = async ({commit}) => {
    const events = await axios.get(apiUrl + eventRoute);
    commit('addUploadEventsToStore', events.data);
};

const getVideoKeys = async ({commit}) => {
    const keys = await axios.get(apiUrl + keysRoute);
    commit('addVideoKeysToStore', keys.data);
};

export default {
    getUploadEvents,
    getVideoKeys,
}