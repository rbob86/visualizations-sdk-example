import express, { Request, Response } from 'express'
import sdk from '../sdk'

const router = express.Router()

router.get('/token', async (req: Request, res: Response) => {
    try {
        const user = await sdk.ok(
            sdk.user_for_credential('email', 'user@example.com')
        )
        const accessToken = await sdk.ok(sdk.login_user(user.id!))
        res.json(accessToken)
    } catch {
        res.status(404).send('User not found.')
    }
})

export default router
