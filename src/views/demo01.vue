<style scoped>

</style>
<template>
    <div>
        <h1>我是标题一</h1>
        <div id="msg">{{ message }}</div>
        <Button @click="showToast">通知</Button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: 'Hello Vue!'
            }
        },
        mounted () {

        },
        methods: {
            showToast() {
                alert(this.message)
            }
        }
    }
</script>