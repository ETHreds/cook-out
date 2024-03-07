<template>
    <div class="auth-container">
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <p>Welcome to Dishi</p>
        </template>
        <template #title>Sign in with google</template>
        <!-- <template #subtitle>Card subtitle</template> -->
        <template #content>
            <SignUp/>
        </template>
        <template #footer>
        </template>
    </Card>
</div>
</template>

<script setup>
import SignUp from '../components/SignUp.vue'

</script>

<style scoped>

</style>