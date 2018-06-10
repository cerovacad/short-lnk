import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router'
import { Tracker } from 'meteor/tracker'
import createBrowserHistory from 'history/createBrowserHistory';
//-----------------------
import Signup from '../imports/ui/Signup'
import Login from '../imports/ui/Login'
import Link from '../imports/ui/Link'
import NotFound from '../imports/ui/NotFound'

const browserHistory = createBrowserHistory();
const publicPages = ['/', '/signup']
const privatePages = ['/link']

const router = (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/" component={Login} exact/>
      <Route path="/signup" component={Signup}/>
      <Route path="/link" component={Link}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
);

Tracker.autorun(() => {
  const isAuth = !!Meteor.userId()
  const path = browserHistory.location.pathname
  const isPublicPage = publicPages.includes(path)
  const isPrivatePage = privatePages.includes(path)

  if(isPublicPage && isAuth){
    browserHistory.replace('/link')
  }else if(isPrivatePage && !isAuth){
    browserHistory.replace('/')
  }
})

Meteor.startup(() => {
  render(router, document.getElementById('root'));
})