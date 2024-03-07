
<template>
    <div v-if="isAuthenticated" class="card flex justify-content-center">
        <Menu :model="items" class="w-full md:w-15rem">
            <template #start>
                <button v-ripple class="relative overflow-hidden w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
                    <span class="inline-flex flex-column">
                        <span class="font-bold">{{ user.username }}</span>
                        <span class="text-sm">About</span>
                    </span>
                </button>
            </template>
            <template #submenuheader="{ item }">
                <span class="text-primary font-bold">{{ item.label }}</span>
            </template>
            <template #item="{ item, props }">
                <a v-ripple class="flex align-items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                </a>
            </template>
            <template #end>
     
            </template>
        </Menu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        separator: true
    },
    {
        label: 'Groups',
        items: [
            {
                label: 'Create',
                icon: 'pi pi-plus',
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
            },
            
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'My Groups',
                icon: 'pi pi-inbox',
                badge:'2'
            },
            {
                label: 'Settings',
                icon: 'pi pi-cog',
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
            }
        ]
    },
    {
        separator: true
    }
]);

import { useStore } from 'vuex';

const store = useStore();
const isAuthenticated = store.getters['auth/isAuthenticated'];
const user = store.getters['auth/getUser'];
</script>
