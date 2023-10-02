import { defineStore, acceptHMRUpdate } from 'pinia'
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore'
import { db } from '@/js/firebase'

export const useStoreEvents = defineStore({
  id: 'events',
  state: () => {
    return {
      loading: false,
      events: [],
      singleEvent: {}
    }
  },
  actions: {
    getEvents() {
      // This method runs forever, so we need to unsubscribe later on...
      onSnapshot(collection(db, 'events'), (querySnapshot) => {
        let events = []
        querySnapshot.forEach((doc) => {
          let event = {
            id: doc.id,
            content: doc.data().content
          }
          events.push(event)
        })
        this.events = events
      })
    },
    async getEventById(id) {
      this.loading = true
      const docRef = doc(db, 'events', id)
      try {
        const docSnap = await getDoc(docRef)
        this.singleEvent = docSnap.data().content
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
  // getters: {

  // },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreEvents, import.meta.hot))
}
