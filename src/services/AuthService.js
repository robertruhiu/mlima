import Api from '@/services/Api'

export default {
  register (credentials){
    return Api().post('rest-auth/registration/',credentials)
  },
  login (credentials){
    return Api().post('rest-auth/login/',credentials)
  }
}
