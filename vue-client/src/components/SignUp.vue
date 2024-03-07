<template>
    <div class="p-grid">
      <div class="p-col-12">
        <TabView>
          <TabPanel header="Sign Up">
            <div class="p-grid">
              <div class="p-field p-col-12">
                <label for="username">Username</label>
                <InputText id="username" v-model="signupData.username" type="text" required />
              </div>
              <div class="p-field p-col-12">
                <label for="email">Email</label>
                <InputText id="email" v-model="signupData.email" type="email" required />
              </div>
              <div class="p-field p-col-12">
                <label for="password">Password</label>
                <Password id="password" v-model="signupData.password" type="password" required toggleMask/>
              </div>
              <div class="p-col-12">
                <Button label="Sign Up" @click="handleSignUp" />
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Sign In">
            <div class="p-grid">
              <div class="p-field p-col-12">
                <label for="log-email">Email</label>
                <InputText id="log-email" v-model="signInData.email" type="email" required />
              </div>
              <div class="p-field p-col-12">
                <label for="log-password">Password</label>
                <Password id="log-password" v-model="signInData.password" :feedback="false" type="password" required toggleMask/>
              </div>
              <div>
                
                <Checkbox id="remember-me" :binary="true" v-model="signInData.remember"/><label for="remember-me">Remember Me</label>
                <!-- <router-link>Forgot Password(TO DO)</router-link> -->
                <small>Forgot Password(To do)</small>
              </div>
              <div class="p-col-12">
                <Button label="Sign In" @click="handleSignIn" />
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { AuthService } from '@/services/backend.services';
  import router from '@/router/index';
  import store from '../store/index'


  // import { Message } from 'primevue/message';

  const signupData = ref({
    username: '',
    email: '',
    password: '',
  });
  
  const signInData = ref({
    email: '',
    password: '',
    remember:false,
  });
  
  async function handleSignUp  ()  {
  try {
    console.log(signupData.value)
    const response = await AuthService.signUp(signupData.value);

  } catch (error) {
    console.error('Sign up failed', error);
  }
};
  
async function handleSignIn() {
    try {
      const response = await AuthService.signIn(signInData.value);
      const token = response.token;
        
      try {
        await store.dispatch('auth/signIn', signInData.value);
      } catch (error) {
        console.error('Error dispatching action:', error);
      }
        console.log('Routing to User page')
        await router.push('/user');
        console.log('Done')


      console.log('Sign in successful', response);
    } catch (error) {
      console.error('Sign in failed', error);
    }
  };
  </script>
  
  <style scoped>
  .p-grid .p-field {
    margin-bottom: 1rem;
  }
  </style>
  