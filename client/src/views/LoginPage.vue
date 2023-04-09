<template>
  <section class="logIn">
    <div class="logIn__text">
      <h2 class="logIn__title"><router-link class="goHome" to="/">Добро пожаловать на Pulse</router-link></h2>
      <p class="logIn__desc">Музыка всегда с тобой</p>
    </div>
    <form class="login" @submit.prevent="login">
      <h3 class="form__title">Войти</h3>
      <input type="email" placeholder="Email" v-model="login_form.email" />
      <input
        :type="show === true ? 'text' : 'password'"
        placeholder="Пароль"
        v-model="login_form.password"
      />
      <i
        class="fa-regular fa-eye show-icon_log"
        v-if="show"
        @click="show = !show"
      ></i>
      <i
        class="fas fa-eye-slash hide-icon_log"
        v-else
        @click="show = !show"
      ></i>
      <div class="forget">
        <input type="checkbox" id="remember" name="rememb" value="remember" />
        <p class="rem_and_forget">
          Запомнить меня |
          <router-link to="/reset" class="resetPass"
            >Забыли пароль?</router-link
          >
        </p>
      </div>
      <input class="btn__logIn" type="submit" value="Войти" />
      <div class="GoReg">
        <router-link to="/register">Создать аккаунт</router-link>
      </div>
    </form>
  </section>
</template>

<style></style>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    return {
      login_form,
      login,
    };
  },
  data: () => {
    return {
      password: "",
      show: false,
    };
  },
};
</script>
