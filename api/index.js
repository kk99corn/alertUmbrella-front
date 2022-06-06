import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
})

function loginCheck(id, pass) {
  return instance.get('/member', {
    params: {
      memberId: id,
      memberPassword: pass
    }
  })
}

function getMemberById(id) {
  return instance.get('/member', {
    params: {
      memberId: id
    }
  })
}

function getAreaDetail(areaSeq) {
  return instance.get('/areaDetail', {
    params: {
      areaSeq: areaSeq
    }
  })
}

// post FormData
function joinMember(id, name, pass) {
  let form = new FormData()
  form.append('id', id)
  form.append('name', name)
  form.append('password', pass)

  return instance.post('/member', form)
}

export {
  loginCheck,
  getMemberById,
  joinMember,
  getAreaDetail
}
