import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue' 
import MoviesView from '../views/MoviesView.vue'
import SeriesView from '../views/SeriesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
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
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView, 
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView, 
    },
    {
      path: '/series',
      name: 'series',
      component: SeriesView,
    }

  ],
})

export default router
