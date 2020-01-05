<template>
    <div>
        <h5>Select a video from list.</h5>
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option v-for="item in videoList" v-bind:key="item.id">{{ item }}</option>
        </select>
        <h5>Select a point in the video that you want to use.</h5>
        <span v-if="selected">
            <div class="picker">
                <div class="column">
                    <video controls @loadedmetadata="onLoadedMetadataListener($event.target.duration)" :src="videoStream"></video>
                </div>
                <div class="column">
                    <img :src="thumbnail" class="thumbnail">
                    <input @mouseup="setCurrent($event.target.value)" type="range" min="1" :max="15" value="1">
                </div>
            </div>
            <div class="buttons">
                <button class="homeButton" @click="back()">Back</button>
                <button class="saveButton" @click="saveProject()">
                    <span v-if="saving">Saving...</span>
                    <span v-else>Save New Project!</span>
                </button>
            </div>
        </span>
        <button v-else class="homeButton" @click="back()">Back</button>
    </div>
</template>

<script>
import HomeButton from '../atoms/Comment.vue';
import config from '../../../config.js';
import axios from 'axios';

export default {
    name: 'Thumbnail',
    components: { HomeButton },
    async mounted() {
       await this.$store.dispatch('getVideoList');
    },
    data() {
        return {
            selected: null,
            current: 1,
            totalDuration: 0,
            saving: false,
        };
    },
    computed: {
        videoList() {
            return this.$store.state.videoList;
        },
        videoStream() {
            if(this.selected) {
                return config.currentEnvSecurity() + config.currentEnvVideoStream() + 'stream/' + this.selected;
            }
        },
        thumbnail() {
            return this.$store.state.currentThumbnail;
        },
    },
    methods: {
        onLoadedMetadataListener(time) {
            this.totalDuration = time;
        },
        setCurrent(currentTime) {
            this.current = currentTime;
        },
        back() {
            this.$router.push("/projects");
        },
        async saveProject() {
            if (this.thumbnail) {
                this.saving = true;
                const data = this.$store.state.editProject
                await axios.post(this.createUrlToManagement(), {
                    id: data._id,
                    thumbnail: this.thumbnail,
                });
                this.$router.push('/projects');
                this.saving = false;
            }
        },
        createUrlToManagement() {
            return config.currentEnvSecurity() + config.currentEnvAPI() + 'update/thumbnail';
        },
    },
    watch: {
        selected(newVal) {
            if(this.selected) {
                let params = { key: this.selected, time: this.current };
                this.$store.dispatch('getCurrentThumbnail', params);
            }
        },
        current(newVal) {
            if(this.selected) {
                let params = { key: this.selected, time: this.current };
                this.$store.dispatch('getCurrentThumbnail', params);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.picker {
    display: flex;
}

.column {
    flex: 50%;
}

video {
    display: block;
    margin: 0 auto;
    width: 75%;
    height: auto;
    padding: 55px;
    outline: none;
}

img {
    display: block;
    margin: 0 auto;
    width: 75%;
    height: auto;
    padding: 55px;
    outline: none;
}

.saveButton {
    padding: 20px 50px;
    color: white;
    background-color: maroon;
    border: 1px solid maroon;
    box-shadow: none;
    transition: 300ms ease;
    outline: none;
}

.saveButton:hover {
    color: maroon;
    background-color: white;
}

.homeButton{
    margin: 20px;
    padding: 20px 50px;
    color: lightgray;
    background-color: black;
    border: 1px solid black;
    box-shadow: none;
    transition: 300ms ease;
    outline: none;
}

.homeButton:hover{
    color: black;
    background-color: white;
}
</style>