import Config from './config.json';

const currentEnv = () =>{
    if(process.env.VUE_APP_ENVIRONMENT) {
        return process.env.VUE_APP_ENVIRONMENT;
    } else {
        return 'dev';
    }
};

const currentEnvAPI = () => {
    return Config.ManagementAPI[currentEnv()];
};

const currentEnvVideoStream = () => {
    return Config.VideoAPI[currentEnv()];
};

export default {
    currentEnv,
    currentEnvAPI,
    currentEnvVideoStream,
}