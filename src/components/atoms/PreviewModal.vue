<template>
    <div>
        <button @click="showPreview">
            <p> Preview </p>
        </button>
        <div v-show="playPreview">
            <div class="video-modal-background">
                <div class="video-modal">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Preview",
    props: {
        videoKey: {
            type: String,
            default: null,
        }
    },
    data() {
        return {
            playPreview: false,
        };
    },
    methods: {
        showPreview() {
            this.playPreview =! this.playPreview;
        }
    }
};
</script>

<style scoped>
.video-modal-background{
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .45;
    top: 0;
    left: 0;
}

.video-modal{
    background-color: #fefefe;
    margin-top: 50px;
    opacity: 1;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}
</style>
