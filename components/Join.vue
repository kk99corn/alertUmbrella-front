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
            id="memberName"
            ref="memberName"
            v-model="form.name"
            type="text"
            class="form-control rounded-4"
            placeholder="name"
          >
          <label for="memberName">Name</label>
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
        <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary umb-text-bold" @click="joinMemberRequest()">
          가입하기
        </button>
        <small class="text-muted">Join AlertUmbrella.</small>
      </div>
    </div>
  </main>
</template>

<script>
import {getMemberById, joinMember} from "../api";

export default {
  name: 'Join',
  data() {
    return {
      form: {
        id: '',
        name: '',
        pass: '',
      }
    }
  },
  methods: {
    async joinMemberRequest() {
      const formId = this.form.id.trim()
      const formName = this.form.name.trim()
      const formPass = this.form.pass.trim()

      if (formId.length === 0) {
        this.$refs.memberId.focus()
        return false
      }
      if (formName.length === 0) {
        this.$refs.memberName.focus()
        return false
      }
      if (formPass.length === 0) {
        this.$refs.memberPass.focus()
        return false
      }

      // id check
      const memberIdCheck = await getMemberById(formId)
      if (memberIdCheck.data.data != null) {
        alert('id duplicated!')
        this.$refs.memberId.focus()
      } else {
        const joinMemberResult = await joinMember(formId, formName, formPass)
        if (joinMemberResult.data.status === 200) {
          alert("Join Success")
          await this.$router.push('/')
        } else {
          alert("join Failed")
        }
      }
    }
  }
}
</script>
