import mainLayout from '@/layouts/MainLayout.vue'
import EventsView from '@/views/EventsView.vue'
import AddEventView from '@/views/AddEvent.vue'
import EventDetailView from '@/views/EventDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: mainLayout,
    children: [
      {
        path: '/events',
        name: 'events',
        component: EventsView
      },
      {
        path: '/addNewEvent',
        name: 'addNewEvent',
        component: AddEventView
      },
      {
        path: '/eventDetail/:id',
        name: 'eventDetail',
        component: EventDetailView
      }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/ErrorNotFound.vue')
  }
]

export default routes
