import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    // mozliwe ze ja zajme sie routingiem wiec chill jak cos to mozecie sprawdzic na stronie jak wyglada wasza podstrona -- Oskar
    // jak kliknicie to V na dole strony i tam trzecie od gory jest routes i mozecie tam zmienic swoja strone na ta co teraz robicie zeby zobaczyc wyglad 


    //Tutaj jak cos dodajecie routes (tez tu se cos pododwam wiec jak cos to no nie usuwajcie tego komentarza zeby kazdy wiedzial lol)
    //przyklad dodania route'a:
    // {
    //   path: '/example',
    //   name: 'example',
    //   component: ExampleView,
    // }
    //I tyle 
  ],
})

export default router
