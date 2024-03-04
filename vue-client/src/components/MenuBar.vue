
<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <h1>Dishi</h1>
            </template>

            <template #center>
                <IconField iconPosition="left">
                    <InputIcon>
                        <!-- <i class="pi pi-search" /> -->
                    </InputIcon>
                    <InputText placeholder="Search" />
                </IconField>
            </template>

            <template #end> <SplitButton label="Profile" :model="items"></SplitButton></template>
        </Toolbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const items = ref([
    {
        label: 'Sign In',
        icon: 'pi pi-sign-in',
        to: '/auth'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    }
])
</script>
