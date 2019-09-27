<template>
    <div>
        <img :src="thumbnail" />
    </div>
</template>

<script>
export default {
    name: 'ThumbnailSelector',
    props: {
        thumbnail: {
            type: String,
            required: true,
        }
    },
}
</script>

<style scoped>
</style>
