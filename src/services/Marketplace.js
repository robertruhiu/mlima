import Api from '@/services/Api'

export default {

  pickdev (user_id,dev,auth) {
    return Api().put(`marketplace/devrequest/${user_id}/${dev} `,auth)
  },
  mydevs (user_id,auth) {
    return Api().get(`marketplace/alldevrequests/${user_id}`,auth)
  },
}
