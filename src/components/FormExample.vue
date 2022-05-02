<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import "@/locales/validators/validator";

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const { values } = useForm({
  validationSchema: schema,
});

const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

const submit = () => {
  console.log(values);
};
</script>

<template>
  <div>
    <a href="#" @click="$i18n.locale = 'pt'">PT</a> |
    <a href="#" @click="$i18n.locale = 'en'">EN</a>
  </div>

  <h1>Form</h1>

  <form @submit.prevent="submit">
    <div>
      <input name="email" v-model="email" />
      <br />
      <span v-if="emailError">{{ $t(emailError) }}</span>
    </div>

    <div>
      <input name="password" v-model="password" type="password" />
      <br />
      <span v-if="passwordError">{{ $t(passwordError) }}</span>
      <br />
      <span v-if="passwordError">{{ $t(passwordError, { min: 8 }) }}</span>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>
