<template>
    <div>
        <div class="container">
            <h1 class="page-header">New Project</h1>
            <h3>
                This is the page to create a new project.
                Give it a title, a discription, submit the embed code, and upload a thumbnail.
            </h3>
            <h4>Video</h4>
            <select v-model="videoKey">
                <option disabled value="">Please select one</option>
                <option
                    v-for="item in videoList"
                    v-bind:key="item.id"
                    v-if="!isThumbnailLink(item)"
                >
                    {{ item }}
                </option>
            </select>
            <h4>Project Title</h4>
            <input v-model="projectName" />
            <h4>Project Description</h4>
            <textarea v-model="projectDesc"/>
            <h4>Embed Code</h4>
            <textarea v-model="embedCode"/>
            <h4>Video TimeStamp</h4>
            <h6 v-if="!this.timestamp > 0" class="zero">This timestamp must be greater than 0.</h6>
            <div v-if="embedCode">
                <input v-model="timestamp" />
                <div class="class" v-html="embedCode">
                    {{ embedCode }}
                </div>
            </div>
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
    computed: {
        videoList() {
            return this.$store.state.videoList;
        },
    },
    data() {
        return {
            projectName: '',
            projectDesc: '',
            embedCode: '',
            saving: false,
            videoKey: '',
            timestamp: '',
        };
    },
    async mounted(){
       await this.$store.dispatch('getVideoList');
    },
    methods: {
        createUrlToManagement() {
            return config.currentEnvSecurity() + config.currentEnvAPI() + 'project/new';
        },
        async saveProject(){
            if (this.projectDesc
                && this.projectName
                && this.embedCode
                && this.videoKey
                && this.timestamp
                && this.timestamp > 0) {
                this.saving = true;
                await axios.post(this.createUrlToManagement(), {
                    displayName: this.projectName,
                    description: this.projectDesc,
                    vimeoLink: this.embedCode,
                    timestamp: this.timestamp,
                    s3VideoKey: this.videoKey,
                });
                this.$router.push("/");
            }
        },
        isThumbnailLink(key) {
            return key.includes('thumbnails');
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
    display: block;
    margin: 0 auto;
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

.zero {
    color: red;
}
</style>