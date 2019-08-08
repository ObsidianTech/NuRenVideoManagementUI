<template>
    <div>
        <h2>Event Log</h2>
        <table>
            <tr v-for="event in this.events" v-bind:key="event.id">
                <td>
                    <p>
                        The video "{{ event.video }}" was uploaded to the bucket successfully, {{ event.eventTime }}.
                    </p>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Events',
    computed: {
        events() {
            return this.$store.state.events;
        },
    },
    async mounted() {
        await this.$store.dispatch('getUploadEvents');
    }, 
}
</script>

<style scoped>
table {
    width: 75%;
    margin: auto;
}

tr, td {
    padding-bottom: 3px;
    border: 1px solid black;
}


</style>
