 import { React, { PropTypes } from 'react'
 import { Router } from 'dva/router'
 import App from './routes/app'
 const cached = {}
 const registerModel = (app, model) => {
     if (!cached[model.namespace]) {
         app.model(model)
         cached[model.namespace] = 1
     }
 }
 const Routers = function({ history, app }) {
     const routes = [{
         path: '/',
         component: App,
         getIndexRoute(nextState, cb) {
             require.ensure([], require => {
                     registerModel(app, require('./models/users'))
                     cb(null, { component: require('./routes/users') })
                 }, 'users') //users 是chunkName,可不传入
         },
         childRoutes: [{
             path: 'users',
             name: 'users',
             getComponent(nextState, cb) {
                 require.ensure([], require => {
                     registerModel(app, require('./models/users'))
                     cb(null, require('./routes/users'))
                 }, 'users')
             },
         },{
             path: 'icon',
             name: 'icon',
             getComponent(nextState, cb) {
                 require.ensure([], require => {
                     cb(null, require('./routes/icon'))
                 }, 'icon')
             },
         },{
             path: 'button',
             name: 'button',
             getComponent(nextState, cb) {
                 require.ensure([], require => {
                     cb(null, require('./routes/button'))
                 }, 'button')
             },
         }],
     }, ]
     return <Router history={history} routes={routes} />
 }
 Routers.propTypes = {
     history: PropTypes.object,
     app: PropTypes.object,
 }
 export default Routers
