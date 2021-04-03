import Vue from 'vue'
import VueRouter from 'vue-router'
// eslint-disable-next-line
import qk from '../../../dist'

Vue.use(VueRouter)

// A route component can also contain <router-view> to render
// nested children route components
const main = {
  template: `
    <div class="main">
      <h2>main</h2>
      <router-view class="child"></router-view>
    </div>
  `
}

const Default = { template: '<div>default</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const Wrapper = {
  template: `
    <div id="nested-sub">
    </div>
  `,
  mounted: function() {
    console.log(22222)
    qk.loadMicroApp({ name: 'app1', entry: '//localhost:8081/#/', container: "#nested-sub"},)
  }
}

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', redirect: '/main' },
    {
      path: '/main',
      component: main,
      children: [
        // an empty path will be treated as the default, e.g.
        // components rendered at /main: Root -> main -> Default
        { path: '', component: Default },

        // components rendered at /main/foo: Root -> main -> Foo
        { path: 'foo', component: Foo },

        // components rendered at /main/bar: Root -> main -> Bar
        { path: 'bar', component: Bar },

        { name: 'mfsf', path: 'subfoo', component: Wrapper },
        { name: 'mfsb', path: 'subbar', component: Wrapper },
      ]
    }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <h1>Nested Routes</h1>
      <ul>
        <li><router-link to="/main">/main</router-link></li>
        <li><router-link to="/main/foo">/main/foo</router-link></li>
        <li><router-link to="/main/bar">/main/bar</router-link></li>

        <li><router-link to="/main/subfoo">main/subfoo</router-link></li>
        <li><router-link to="/main/subbar">main/subbar</router-link></li>
        
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')