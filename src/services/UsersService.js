import Api from '@/services/Api'

export default {

  devs (){
    return Api().get('users')
  },
  allusers (){
    return Api().get('allusers')
  },
  currentuser (user_id,auth) {
    return Api().get(`getprofile/${user_id} `,auth)
  },
  talentuser (id) {
    return Api().get(`gettalent/${id} `)
  },
  experience (id) {
    return Api().get(`getexperience/${id} `)
  },
  portfolio (id) {
    return Api().get(`getportofolio/${id} `)
  },
  update (user_id,currentUserProfile,auth) {
    return Api().put(`updater/${user_id} `,currentUserProfile,auth)
  }
}
