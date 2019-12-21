const addProjectsToStore = (state, projects) => {
    state.projects = projects;
};

const setCurrentEdit = (state, project) => {
    state.editProject = project;
};

const addCommentsToStore = (state, comments) => {
    state.comments = comments.reverse();
};

const setVideoList = (state, list) => {
    state.videoList = list;
};

export default {
    addProjectsToStore,
    setCurrentEdit,
    addCommentsToStore,
    setVideoList,
};