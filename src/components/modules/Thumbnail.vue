<template>
    <div>
        <h5>Select a video from list.</h5>
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option v-for="item in videoList" v-bind:key="item.id">{{ item }}</option>            
        </select>
        <span v-if="selected">
            <h5>Select a point in the video that you want to use.</h5>
        </span>
    </div>
</template>

<script>
import HomeButton from '../atoms/Comment.vue';

export default {
    name: 'Thumbnail',
    components: { HomeButton },
    async mounted() {
       await this.$store.dispatch('getVideoList');
    },
    data() {
        return {
            selected: null,
        };
    },
    computed: {
        videoList() {
            return this.$store.state.videoList;
        },
    },
};
</script>

<style lang="scss" scoped>

</style>