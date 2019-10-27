import Config from './config.json';

const currentEnv = () =>{
    if(process.env.PROJECTENV) {
        return process.env.PROJECTENV;
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