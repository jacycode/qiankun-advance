import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Default = { template: '<div>default</div>' }
const Foo = { template: '<div>subfoo</div>' }
const Bar = { template: '<div>subbar</div>' }

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    // an empty path will be treated as the default, e.g.
    // components rendered at /sub: Root -> sub -> Default
    { path: '', component: Default },

    // components rendered at /sub/foo: Root -> sub -> Foo
    { path: '/subfoo', component: Foo },

    // components rendered at /sub/bar: Root -> sub -> Bar
    { path: '/subbar', component: Bar },

  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <h1>Nested Routes</h1>
      <ul>
        <li><router-link to="/subfoo">/subfoo</router-link></li>
        <li><router-link to="/subbar">/subbar</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')