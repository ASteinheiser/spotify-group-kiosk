const https = require('https')

function messageHandler(msg) {
  process.stdout.write(`${Date.now()}: ${msg}\n`)
}

const { PATCHBAY_PUBSUB_KEY } = process.env;

https
  .get(
    `https://patchbay.pub/pubsub/${PATCHBAY_PUBSUB_KEY}?persist=true`,
    (res) => {
      res.on('data', (d) => {
        messageHandler(d.toString())
      })
    },
  )
  .on('error', (e) => {
    console.error(e)
    process.exit(1)
  })
