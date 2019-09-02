<template>
    <div>
        <div class="container">
            <h1 class="page-header">New Project</h1>
            <h3>
                This is the page to create a new project. Select one of the files from the drop down.
                Give it a title, a discription, and choose a cover art for it. 
            </h3>
            <h4>File</h4>
            <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option v-for="item in keys" v-bind:key="item.id">{{ item.key }}</option>
            </select>
            <h4>Project Title</h4>
            <input v-model="projectName" />
            <h4>Project Description</h4>
            <textarea v-model="projectDesc" />
        </div>
        <HomeButton />
    </div>
</template>

<script>
import HomeButton from '../atoms/HomeButton';
export default {
    components: {
        HomeButton,
    },
    data() {
        return {
            selected: null,
            projectName: '',
            projectDesc: '',
        };
    },
    computed: {
        keys() {
            return this.$store.state.keys;
        },
    },
    beforeDestroy() {

    },
}
</script>

<style scoped>
.page-header {
    width: 88%;
    height: auto;
    margin: auto;
}

.container{
    width: 70%;
    height: auto;
    margin: auto;
    padding: 15px;
}

.container-body{
    width: 90%;
    height: auto;
    margin: auto;
    word-wrap: normal;
}
</style>