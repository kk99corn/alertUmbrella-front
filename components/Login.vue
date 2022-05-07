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
            @keyup.enter="doLogin"
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

      await this.$store.dispatch('login', {
        id: formId,
        pass: formPass
      }).then((res) => {
        //
        this.$router.push('/')
      }).catch((error) => {
        //
        alert("계정이나 패스워드를 확인해주세요.")
      })
    }
  }
}
</script>
