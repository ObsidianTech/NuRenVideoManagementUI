const addProjectsToStore = (state, projects) => {
    state.projects = projects;
};

const setCurrentEdit = (state, project) => {
    state.editProject = project;
};

const addCommentsToStore = (state, comments) => {
    state.comments = comments.reverse();
};

export default {
    addProjectsToStore,
    setCurrentEdit,
    addCommentsToStore,
};