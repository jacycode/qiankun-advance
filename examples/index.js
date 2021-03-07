import { loadMicroApp } from '../dist/index.js'

loadMicroApp({
  name: "hotel-fe-mfs-member-management",
  entry: "http://local.sankuai.com:3000/spapage",
  container: "#container",
  mainBasePath: '/ticket/poi-member/member-manage'
})