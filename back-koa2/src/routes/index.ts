
import login from './login'
import users from './users'

export default function initRouter(_app:any){
  _app.use(login.routes(), login.allowedMethods())
  _app.use(users.routes(), users.allowedMethods())
}

