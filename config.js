import Config from './config.json';

const currentEnv = () =>{
    if(process.env.VUE_APP_ENV) {
        return process.env.VUE_APP_ENV;
    } else {
        return 'dev';
    }
} 
const currentEnvAPI = () => {
    return Config.ManagementAPI[currentEnv()];
}
export default {
    currentEnv,
    currentEnvAPI,

}