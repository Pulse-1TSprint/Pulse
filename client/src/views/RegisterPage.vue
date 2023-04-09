<template>
   <section class="registration">
    <div class="registration__text">
      <h2 class="registration__title"><router-link class="goHome" to="/">Добро пожаловать на Pulse</router-link></h2>
      <p class="registration__desc">Музыка всегда с тобой</p>
    </div>
    <form class="reg-form" @submit.prevent="register">
      <h3 class="form__title">Регистрация</h3>
      <input type="email" placeholder="Email" v-model="register_form.email" />
      <input
        :type="show === true ? 'text' : 'password'"
        placeholder="Пароль"
        v-model="register_form.password"
      />
      <i
        class="fa-regular fa-eye show-icon_rep"
        v-if="show"
        @click="show = !show"
      ></i>
      <i
        class="fas fa-eye-slash hide-icon_rep"
        v-else
        @click="show = !show"
      ></i>
      <input
        :type="show === true ? 'text' : 'password'"
        placeholder="Повторите пароль" v-model="confirmPassword" required
      />
      <i
        class="fa-regular fa-eye show-icon"
        v-if="show"
        @click="show = !show"
      ></i>
      <i class="fas fa-eye-slash hide-icon" v-else @click="show = !show"></i>
      <div class="policy">
        <input type="checkbox" id="policy" name="policy" value="policy" required />
        <p class="policy__text">
          Создавая аккаунт, вы принимаете пользовательское соглашение и политику
          конфиденциальности
        </p>
      </div>
      <input class="btn__reg" type="submit" value="Зарегистрироваться" />

      <div class="GoLogin">
        <p class="log">
          У вас уже есть акканут?<router-link to="/login">Войти</router-link>
        </p>
      </div>
    </form>
  </section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch("register", register_form.value);
    };
    return {
      register_form,
      register,
    };
  },
  data: () => {
    return {
      password: "",
      show: false,
    };
  },
}
</script>