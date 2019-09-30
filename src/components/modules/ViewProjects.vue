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
                    <button>Delete</button>
                </div>
                <div class="editPane" v-show="id === project.id ? true : false ">
                    <input v-model="newName" />
                    <input v-model="newDesc"/>
                    <button>Save Changes</button>
                    <button>Cancel</button>
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
        editProject(project) {
            this.newName = project.name;
            this.newDesc = project.description;
            this.id = project._id;
        },
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

.editPane {
    margin: 25px;
    display: inline-block;
}

.editPane > input {
    width: 100%;
    padding: 8px;
    margin: 15px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 18px;
}
</style>