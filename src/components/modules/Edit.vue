<template>
    <div>
        <h3>Edit project title and description.</h3>
        <div class="editPane">
            <input v-model="name"/>
            <input v-model="description"/>
            <input v-model="video"/>
        </div>
        <div class="editButtons">
            <button @click="saveChanges()">Save Changes</button>
            <button @click="cancel()">Cancel</button>
        </div>
        <HomeButton />
    </div>
</template>

<script>
import axios from 'axios';
import HomeButton from '../atoms/HomeButton';
import config from '../../../config.js';
export default {
    components: {
        HomeButton,
    },
    data() {
        return {
            id: this.$store.state.editProject._id,
            name: this.$store.state.editProject.name,
            description: this.$store.state.editProject.description,
            video: this.$store.state.editProject.video,
        }
    },
    methods: {
        cancel() {
            this.$router.push('/projects');
        },
        createUrlToManagement() {
            return config.currentEnvSecurity() + config.currentEnvAPI() + 'update';
        },
        async saveChanges() {
            await axios.post(this.createUrlToManagement(), {
                id: this.id,
                name: this.name,
                description: this.description,
                video: this.video,
            });
            this.$router.push('/projects');
        },
    }
}
</script>

<style scoped>
.editPane {
    display: inline-block;
}

.editPane > input {
    width: 100%;
    padding: 14px;
    margin: 8px;
    border: none;
    font-size: 18px;
    border-bottom: 1px solid black;
    outline: none;
}

.editButtons > button {
    padding: 15px;
    margin: 5px;
    box-shadow: none;
    color: lightgrey;
    background-color: black;
    border: 1px solid black;
    transition: 300ms ease;
    outline: none;
}

.editButtons > button:hover {
    background-color: white;
    color: black;
}
</style>