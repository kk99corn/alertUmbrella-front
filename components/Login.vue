<template>
  <main class="px-3">
    <div class="modal-content rounded-5 shadow" style="margin-top: 50px;">
      <div class="modal-header p-5 pb-4 border-bottom-0">
      </div>

      <div class="modal-body p-5 pt-0 umb-input-text-color">
        <div class="form-floating mb-3">
          <input
            id="memberId"
            ref="memberId"
            v-model="form.id"
            type="text"
            class="form-control rounded-4"
            placeholder="ID"
          >
          <label for="memberId">ID</label>
        </div>
        <div class="form-floating mb-3">
          <input
            id="memberPassword"
            ref="memberPass"
            v-model="form.pass"
            type="password"
            class="form-control rounded-4"
            placeholder="Password"
          >
          <label for="memberPassword">Password</label>
        </div>
        <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary umb-text-bold" @click="doLogin()">로그인</button>
        <small class="text-muted">Login AlertUmbrella.</small>
      </div>
    </div>
  </main>
</template>

<script>
import {loginCheck} from "../api";

export default {
  name: 'Login',
  data() {
    return {
      form: {
        id: '',
        pass: '',
      }
    }
  },
  methods: {
    async doLogin() {
      const formId = this.form.id.trim()
      const formPass = this.form.pass.trim()

      if (formId.length === 0) {
        this.$refs.memberId.focus()
        return false
      }
      if (formPass.length === 0) {
        this.$refs.memberPass.focus()
        return false
      }

      // id check
      const memberIdCheck = await loginCheck(formId, formPass)
      if (memberIdCheck.data.status === 200 || memberIdCheck.data.data.name != null) {
        alert(memberIdCheck.data.data.name + " login suc")
      } else {
        alert("login failed")
      }
    }
  }
}
</script>
