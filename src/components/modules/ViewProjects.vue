<template>
    <div>
        <h1 class="page-header">View Projects</h1>
        <div class="pageContainer">
            <div v-for="item in content" v-bind:key="item.id" class="project">
                <h3>{{ item.displayName }}</h3>
                <p>{{ item.description }}</p>
                <img class="thumbnail" :src="createUrlToManagement() + 'content/' + item.thumbnail" alt="" />
                <div class="buttonPane">
                    <button @click="editProject(item)">Edit</button>
                    <button @click="deleteProject(item)">Delete</button>
                    <button @click="thumbnail(item)" v-if="!item.thumbnail">Select Thumbnail</button>
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
        content() {
            return this.$store.state.content;
        },
    },
    methods: {
        async getThumbnail(key) {
            return await axios.get(this.createUrlToManagement()
                + 'content/'
                + key);
        },
        thumbnail(project) {
            this.$store.dispatch('editProject', project);
            this.$router.push('/thumbnail');
        },
        createUrlToManagement() {
            return config.currentEnvSecurity() + config.currentEnvAPI();
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