<template>
  <section class="reset">
    <h2 class="reset__title">Сброс пароля</h2>
    <form class="forgot" @submit.prevent="forgotPassword">
      <input type="email" placeholder="Email" v-model="reset_form.email" />
      <input class="btn__reset" type="submit" value="Сбросить пароль" />
      <div class="GoLog">
        <router-link to="/register">Назад</router-link>
      </div>
    </form>
  </section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";


export default {
  setup() {
    const reset_form = ref({});
    const store = useStore();

    const reset = () => {
      store.dispatch("forget", reset_form.value);
    };

    return {
      reset_form,
      reset,
    };
  },
};
</script>
