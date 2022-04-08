import { NextFunction, Request, Response } from 'express'
import { bodyValidator, controller, get, post, use } from './decorators/'

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log('Middleware function')
  console.log(req.body)
  next()
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    `)
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    console.log(req.body)
    const { email, password } = req.body
    if (email && password && email === 'test@test.com' && password === 'tester') {
      req.session = { isLoggedIn: true }
      res.redirect('/')
      return
    }

    res.send('Invalid Credentials!')
  }

  @get('/logout')
  logout(req: Request, res: Response) {
    if (req.session && req.session.isLoggedIn) {
      req.session = null
      res.redirect('/auth/login')
      return
    }
    res.send(`
    <div>
      <div>Login first</div>
      <a href="/auth/login">Login</a>
    </div>
    `)
  }
}
