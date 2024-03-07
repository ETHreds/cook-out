<template>
    <div class="acc-container">
        <v-container>
            <v-row>
                <v-col cols="3"> <ProfileOptions/> </v-col>
                <v-col cols="8">
                    <HomeView/>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script setup>

import ProfileOptions from '@/components/ProfileOptions.vue';
import { fetchMealsByClientLocation } from '@/services/backend.services';
import HomeView from './HomeView.vue';


</script>

<style scoped>

</style>