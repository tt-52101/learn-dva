 import React, { PropTypes } from 'react'
 import { Router } from 'dva/router'
 import App from './routes/App'
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
                     cb(null, { component: require('./routes/Users') })
                 }, 'users') //dashboard 是chunkName
         },
         childRoutes: [{
             path: 'users',
             name: 'users',
             getComponent(nextState, cb) {
                 require.ensure([], require => {
                     registerModel(app, require('./models/users'))
                     cb(null, require('./routes/Users'))
                 }, 'users')
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
