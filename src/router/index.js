// import Loadable from 'react-loadable'
// import Loading from './my-loading-component';

// const LoadableComponent = Loadable({
//   loader: () => import('./my-component'),
//   loading: Loading,
// });

// 路由配置
// const server = Loadable(() => import('../page/server')) //路由
// const Home = loadable(() => import('路径')) 
// const Login = loadable(() => import('路径')) 
import { server, tools } from '../page'
const routes = [
    {
        path: '/webServer',
        name: 'WebServer',
        component: server
    },
    {
        name: '工具',
        children:[{
            path: '/tools',
            name:'xxxx',
            component: tools
        }]
    }
]
export default routes