import { Request, Response } from 'express'
import { controller, get, use } from './decorators'
import { logger } from './LoginController'

@controller('')
class RootController {
  @get('/')
  @use(logger)
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.isLoggedIn) {
      res.send(`
      <div>
        <div>You're logged in </div>
        <a href="/auth/logout">Logout</a>
      </div>
      `)
      return
    }
    res.send(`
    <div>
      <div>You are not logged in</div>
      <a href="/auth/login">Login</a>
    </div>
    `)
  }
}
