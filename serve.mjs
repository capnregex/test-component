import ctx from './context.mjs'

await ctx.watch()

let { host, port } = await ctx.serve({
  servedir: 'www',
})
