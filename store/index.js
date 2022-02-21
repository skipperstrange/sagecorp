const state = ()=>({
    menu: [],
    properties: [],
    user: null,
})
const actions = {

  async  onAuthStateChangedAction (state, { authUser }) {
    if (!authUser) {
      // claims = null
      // perform logout operations
      state.commit(SET_USER, null)
        this.$router.push({
        path: 'admin/auth/login'
        })
    } else {
      // Do something with the authUser and the claims object...
      const {uid, user} = authUser
      state.commit(SET_USER, {
          uid, user
      })
    }
  }
}

const getters = {
    getUser(state) {
      return state.user
    },
  }
  

const mutations = {
    SET_USER(state, user){
        state.user = user
    }
}
