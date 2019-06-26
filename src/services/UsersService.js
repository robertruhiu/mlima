import Api from '@/services/Api'

export default {

  devs (){
    return Api().get('users')
  },
  currentuser (user_id,auth) {
    return Api().get(`getprofile/${user_id} `,auth)
  },
  update (user_id,currentUserProfile,auth) {
    return Api().put(`updater/${user_id} `,currentUserProfile,auth)
  }
}
