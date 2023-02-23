<script setup lang="ts">
import { ref } from 'vue'
const isLoginPage = ref(false)
</script>

<template>
    <LoginLayout v-if="isLoginPage" />
    <AppLayout v-else>
        <template #header>
            <MyLogo />
        </template>
        <template #aside>
            asd<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />asd
        </template>
        <template #main>
            <RouterView />
        </template>
        <template #footer>footer</template>
    </AppLayout>
</template>

<style scoped></style>
