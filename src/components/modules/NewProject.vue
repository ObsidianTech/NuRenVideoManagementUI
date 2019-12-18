<template>
    <div>
        <div class="container">
            <h1 class="page-header">New Project</h1>
            <h3>
                This is the page to create a new project. Select one of the files from the drop down.
                Give it a title, a discription, and choose a cover art for it. 
            </h3>
            <h4>File</h4>
            <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option v-for="item in keys" v-bind:key="item.id">{{ item.key }}</option>
            </select>
            <h4>Project Title</h4>
            <input v-model="projectName" />
            <h4>Project Description</h4>
            <textarea v-model="projectDesc"/>
            <h4>Video Thumbnail</h4>
            <h5>Choose one of the thumbnails from below.</h5>
            <span v-if="load">
                <h6>Generating...</h6>
                <div class="loading"></div>
            </span>
            <span class="thumbnail-pane" >
                <button class="thumbnail" 
                    v-for="nail in thumbnails" 
                    v-bind:key="nail.id"
                    @click="setThumbnail(nail)"
                >
                    <img :src="nail">
                </button>
            </span>
            <button class="saveButton" @click="saveProject()">
                <span v-if="saving">Saving...</span>
                <span v-else>Save New Project!</span>
            </button>
        </div>
        <HomeButton />
    </div>
</template>

<script>
import config from '../../../config.js';
import HomeButton from '../atoms/HomeButton';
import axios from 'axios';
export default {
    components: {
        HomeButton,
    },
    data() {
        return {
            selected: null,
            projectName: '',
            projectDesc: '',
            load: false,
            thumbnails: null,
            selectedThumbnail: '',
            saving: false,
        };
    },
    computed: {
        keys() {
            return this.$store.state.keys;
        },
    },
    watch: {
        selected(newVal, oldVal){
            if(newVal){
                this.load = true;
                this.generateThumbnails();
            } else {
                this.load = false;
            }
        },
    },
    methods: {
        createUrl(key) {
            return config.currentEnvSecurity() + config.currentEnvVideoStream() + "stream/" + key;
        },
        createUrlToManagement() {
            return config.currentEnvSecurity() + config.currentEnvAPI() + 'project';
        },
        async generateThumbnails() {
            let nails =  await axios.get(this.createUrl(this.selected) + '/thumbnails');
            this.thumbnails = nails.data;
            this.load = false;
        },
        setThumbnail(img) {
            this.selectedThumbnail = img;
        },
        async saveProject(){
            if (this.projectDesc 
                && this.projectName 
                && this.selected 
                && this.selectedThumbnail) {
                this.saving = true;
                await axios.post(this.createUrlToManagement(), {
                    name: this.projectName,
                    description: this.projectDesc,
                    video: this.selected,
                    thumbnail: this.selectedThumbnail, 
                });
                this.$router.push("/");
            }
        },
    },
}
</script>

<style scoped>
.page-header {
    width: 88%;
    height: auto;
    margin: auto;
}

.container{
    width: 70%;
    height: auto;
    margin: auto;
    padding: 15px;
}

.container-body{
    width: 90%;
    height: auto;
    margin: auto;
    word-wrap: normal;
}

video{
    outline: none;
    width: 400px;
    height: auto;
}

.thumbnail-pane{
    display: flex;
}

.thumbnail{
    flex: 33.33%;
    border: none;
    margin: 10px;
    padding: 0;
}

.thumbnail:focus{
    outline: 2px solid red;
}

.thumbnail > img{
    width: 100%;
}

.loading{
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #000;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    margin: 15px;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}

.saveButton{
    margin: 15px;
    padding: 20px 50px;
    color: white;
    background-color: maroon;
    border: 1px solid maroon;
    box-shadow: none;
    transition: 300ms ease;
    outline: none;
}

.saveButton:hover{
    color: maroon;
    background-color: white;
}
</style>