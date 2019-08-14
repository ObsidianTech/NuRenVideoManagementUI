<template>
    <div>
        <h1>View Catalog</h1>
        <h3>This is the page where you view the entire catalog that has been uploaded to the backend storage.
             You can check to see what the file names of the videos are, 
             and whether or not they have been incorperated into a project.
        </h3>
        <HomeButton />
    </div>
</template>

<script>
import HomeButton from '../atoms/HomeButton';
export default {
    components: {
        HomeButton,
    },
}
</script>
