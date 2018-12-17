import { Application, Context } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('*', async (context: Context) => {
    context.log({ event: context.event, action: context.payload.action })
  })
}
