import axios from 'axios';
import config from '../../config.js';

const apiUrl = config.currentEnvSecurity() + config.currentEnvAPI();

const projectsRoute = "project/";
const commentsRoute = "comment/";
const listRoute = "list/";

const getProjects = async ({commit}) => {
    const projects = await axios.get(apiUrl + projectsRoute);
    commit('addProjectsToStore', projects.data);
};

const getComments = async ({commit}) => {
    const comments = await axios.get(apiUrl + commentsRoute);
    commit('addCommentsToStore', comments.data);
};

const editProject = ({commit}, project) => {
    commit('setCurrentEdit', project);
}

const getVideoList = async ({commit}) => {
    const list = await axios.get(apiUrl + listRoute);
    commit('setVideoList', list.data);
}

export default {
    getProjects,
    editProject,
    getComments,
    getVideoList,
};
