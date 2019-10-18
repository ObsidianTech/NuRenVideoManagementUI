<template>
    <div>
        <h1 class="page-header">View Projects</h1>
        <div class="pageContainer">
            <div v-for="project in projects" v-bind:key="project.id" class="project">
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
                <img class="thumbnail" :src="project.thumbnail" />
                <div class="buttonPane">
                    <button @click="editProject(project)">Edit</button>
                    <button @click="deleteProject(project)">Delete</button>
                </div>
            </div>
        </div>
        <HomeButton />
    </div>
</template>

<script>
import axios from 'axios';
import config from '../../../config.js';
import HomeButton from '../atoms/HomeButton';
export default {
    components: {
        HomeButton,
    },
    data() {
        return {
            id: null,
            newName: '',
            newDesc: '',
        }
    },
    computed: {
        projects() {
            return this.$store.state.projects;
        },
    },
    async mounted() {
        await this.$store.dispatch('getProjects');
    },
    methods: {
        createUrlToManagement() {
            return "http://" + config.currentEnvAPI() + 'delete';
        },
        editProject(project) {
            this.$store.dispatch('editProject', project);
            this.$router.push('/edit');
        },
        async deleteProject(project) {
            if(confirm("Are you sure you want to delete " + project.name + "?")) {
                await axios.post(this.createUrlToManagement(),{ id: project._id });
                this.$router.push('/projects'); 
            }           
        }
    }
}
</script>

<style scoped>
.page-header {
    width: 88%;
    height: auto;
    margin: auto;
}

.thumbnail {
    width: 500px;
    height: auto;
}

.buttonPane {
    margin: 25px;
}

.buttonPane > button {
    padding: 15px;
    margin: 5px 15px;
    background-color: maroon;
    color: white;
    border: 1px solid maroon;
    transition: 350ms ease;
    outline: none;
}

.buttonPane > button:hover {
    background-color: white;
    color: maroon;
}
</style>