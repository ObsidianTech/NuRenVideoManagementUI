<template>
    <div class="commentWrapper">
        <div class="names">
            <h4>{{ comment.firstName }} {{ comment.lastName }}</h4>
        </div>
        <div>
            <h5>{{ comment.email }}</h5>
            <p style="overflow-wrap: normal;">{{ comment.comments }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comment',
    props: {
        comment: {
            type: Object,
            default: {},
        },
    },
};
</script>

<style lang="scss" scoped>
.commentWrapper {
    display: block;
    margin: 0 auto;
    width: 45%;
    border: 1px solid black;
    border-left: none;
    border-right: none;
    border-top: none;
}
</style>