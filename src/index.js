import qiankun from './export_qiankun'

/**
 * Do something
 */
let fakeWindow = window;
let proxyFakeWindow = new Proxy(fakeWindow, {

});


/**
 * 在主应用中，设置用于子应用的前缀路由路径
 */
function set_Sub_Base_Path (key, value) {
  proxyFakeWindow[key] = value;
}

/**
 * 在子应用中，获取主应用中设置的前缀路由路径
 */
function get_Main_Base_Path () {

}

/**
 * 重写qiankun loadMicroApp
 * @param {*} app 
 * @param {*} configuration 
 */
function loadMicroApp (app, configuration) {
  qiankun.loadMicroApp({
    ...app,
    props: {
      ...app.props,
      mainBasePath: app.mainBasePath || ''
    }
  }, configuration);
}

/**
 * 重写qiankun registerMicroApps
 * @param {*} apps 
 * @param {*} lifeCycles 
 */
function registerMicroApps (apps, lifeCycles) {
  qiankun.registerMicroApps(apps.map(app => ({
    ...app,
    props: {
      ...app.props,
      mainBasePath: app.mainBasePath || ''
    }
  })), lifeCycles);
}

export default { ...qiankun, set_Sub_Base_Path, get_Main_Base_Path, loadMicroApp, registerMicroApps }
