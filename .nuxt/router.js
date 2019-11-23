import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61c1b4c1 = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _7afd9bf4 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _178f4a26 = () => interopDefault(import('../pages/posts/data.vue' /* webpackChunkName: "pages/posts/data" */))
const _2d036480 = () => interopDefault(import('../pages/posts/klor.vue' /* webpackChunkName: "pages/posts/klor" */))
const _30fe8fec = () => interopDefault(import('../pages/posts/klorauka.vue' /* webpackChunkName: "pages/posts/klorauka" */))
const _332d72f4 = () => interopDefault(import('../pages/posts/lenda.vue' /* webpackChunkName: "pages/posts/lenda" */))
const _510bb1e0 = () => interopDefault(import('../pages/posts/lendaauka.vue' /* webpackChunkName: "pages/posts/lendaauka" */))
const _2074d85d = () => interopDefault(import('../pages/posts/profile.vue' /* webpackChunkName: "pages/posts/profile" */))
const _7c1c6702 = () => interopDefault(import('../pages/posts/table.vue' /* webpackChunkName: "pages/posts/table" */))
const _51d93e8a = () => interopDefault(import('../pages/users/register.vue' /* webpackChunkName: "pages/users/register" */))
const _6e55606e = () => interopDefault(import('../pages/users/signin.vue' /* webpackChunkName: "pages/users/signin" */))
const _8ac00424 = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _27e05f42 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category",
    component: _61c1b4c1,
    name: "category"
  }, {
    path: "/posts",
    component: _7afd9bf4,
    name: "posts"
  }, {
    path: "/posts/data",
    component: _178f4a26,
    name: "posts-data"
  }, {
    path: "/posts/klor",
    component: _2d036480,
    name: "posts-klor"
  }, {
    path: "/posts/klorauka",
    component: _30fe8fec,
    name: "posts-klorauka"
  }, {
    path: "/posts/lenda",
    component: _332d72f4,
    name: "posts-lenda"
  }, {
    path: "/posts/lendaauka",
    component: _510bb1e0,
    name: "posts-lendaauka"
  }, {
    path: "/posts/profile",
    component: _2074d85d,
    name: "posts-profile"
  }, {
    path: "/posts/table",
    component: _7c1c6702,
    name: "posts-table"
  }, {
    path: "/users/register",
    component: _51d93e8a,
    name: "users-register"
  }, {
    path: "/users/signin",
    component: _6e55606e,
    name: "users-signin"
  }, {
    path: "/posts/:id",
    component: _8ac00424,
    name: "posts-id"
  }, {
    path: "/",
    component: _27e05f42,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
