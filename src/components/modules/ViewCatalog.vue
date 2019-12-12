<template>
    <div class="container">
        <div class="container-header">
            <h1 class="page-header">View Catalog</h1>
        </div>
        <div class="container-body">
            <h3>
                This is the page to view the entire catalog that has been uploaded to backend storage.
                You can check to see what the file names of the videos are, preview a video,  
                and check whether or not they have been incorperated into a project.
            </h3>
            <div class="table-container">
                <table>
                   <tr v-for="item in this.keys" v-bind:key="item.id">
                       <td>
                           <p>
                               {{ item.key }}
                           </p>
                       </td>
                       <td>
                           <button class="viewButton" @click="pushUrlToPreview(item.key)">View</button>
                       </td>
                   </tr>
                </table>
            </div>
            <HomeButton />
        </div>
    </div>
</template>

<script>
import HomeButton from '../atoms/HomeButton';
import config from '../../../config';
export default {
    components: {
        HomeButton,
    },
    computed: {
        keys() {
            return this.$store.state.keys;
        },
    },
    async mounted() {
        await this.$store.dispatch('getVideoKeys');
    },
    methods: {
        pushUrlToPreview(val) {
            const url = this.createUrl(val)
            this.$router.push({
                name: 'preview',
                params: {
                    videoUrl: url,
                },
            });
        },
        createUrl(key) {
            return "https://" + config.currentEnvVideoStream() + "stream/" + key;
        },
    },
};
</script>

<style scoped>
.container{
    width: 70%;
    height: auto;
    margin: auto;
    padding: 15px;
}

.page-header{
    width: 88%;
    height: auto;
    margin: auto;
}

.container-body{
    width: 90%;
    height: auto;
    margin: auto;
    word-wrap: normal;
}

.table-container{
    width: auto;
    height: auto;
    margin: auto;
    padding-bottom: 35px;
}

table{
    margin: auto;
}

.viewButton{
    border: 1px solid maroon;
    color: white;
    background-color: maroon;
    transition: 300ms ease;
    margin: 0 6px;
    border-radius: 15px;
    outline: none;
}

.viewButton:hover{
    color: maroon;
    background-color: white;
}
</style>
