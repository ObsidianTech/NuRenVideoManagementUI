<template>
    <div>
        {{ videoKey }}
        <video controls>
            <source :src="'http://' + config.currentEnvVideoStream() + 'stream/' + this.videoKey" type="video/mp4">
        </video>
    </div>
</template>

<script>
import config from '../../../config';
export default {
    name: 'Preview',
    props: {
        videoKey: {
            type: String,
        },
    },
    data() {
        return {
            videoUrl: null,
        };
    },
    mounted() {
        this.videoUrl = "http://" + config.currentEnvVideoStream() + "stream/" + this.videoKey;
    }
}
</script>

<style scoped>
    
</style>