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
            <span v-for="nail in thumbnails" v-bind:key="nail.id">
                <component :is="thumbnailComponent" :thumbnail="nail" />
            </span>
        </div>
        <HomeButton />
    </div>
</template>

<script>
import config from '../../../config.js';
import HomeButton from '../atoms/HomeButton';
import axios from 'axios';
import ThumbnailSelector from '../atoms/ThumbnailSelector.vue';
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
            _video: null,
            thumbnails: null,
            thumbnailComponent: ThumbnailSelector,
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
            return "http://" + config.currentEnvVideoStream() + "stream/" + key;
        },
        meta() {
            this.$nextTick(() => {
                console.log(this.$refs.videoPane);
                this._video = this.$refs.videoPane;
            })
        },
        async generateThumbnails() {
            let nails = await axios.get(this.createUrl(this.selected) + '/thumbnails');
            this.thumbnails = nails.data;
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
</style>