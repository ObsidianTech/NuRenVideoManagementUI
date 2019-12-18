<template>
    <div>
        <span>
            <div
             v-for="comment in comments"
             v-bind:key="comment.id"
             class="commentGrid"
            >
                <comment :comment="comment" />
            </div>
        </span>
        <home-button />
    </div>
</template>

<script>
import homeButton from '../atoms/HomeButton.vue';
import comment from '../atoms/Comment.vue';
export default {
    components: { homeButton, comment },
    computed: {
        comments() {
            return this.$store.state.comments;
        }
    }
};
</script>

<style lang="scss" scoped>
.commentGrid {
    display: block;
    margin: 0 auto;
}
</style>