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

const currentEnvSecurity = () => {
    return currentEnv() === 'prod' ? 'https://' : 'http://';
}

export default {
    currentEnv,
    currentEnvAPI,
    currentEnvVideoStream,
    currentEnvSecurity,
}