<template>
    <div>
        <h2>Event Log</h2>
        {{ this.$store.state.events }}
    </div>
</template>

<script>
export default {
    name: 'Events',
    async mounted() {
        await this.$store.dispatch('getUploadEvents');
    }, 
}
</script>

<style scoped>

</style>
