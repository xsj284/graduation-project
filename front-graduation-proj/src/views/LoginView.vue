<script setup lang="ts">
import axios from 'axios'
function myLogin() {
    axios
        .get('/api/testGet')
        //.get('/api/userInfo')
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
}
</script>

<template>
    <h1>Login Page</h1>
    <ElButton @click="myLogin">Test</ElButton>
</template>

<style scoped></style>
