<template>
    <div>
        {{ videoKey }}
    </div>
</template>

<script>
export default {
    name: 'Preview',
    props: {
        videoKey: {
            type: String,
        },
    },
}
</script>

<style scoped>
    
</style>