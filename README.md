# Spotify Group Kiosk

A simple React app that shows a QR code for joining a Spotify Group Session. The idea here is to have this app running fullscreen on a Raspberry Pi connected to a monitor. Then, use [patchbay](https://patchbay.pub/docs/index.html) to update the url being encoded in the QR.

<img src="./public/spotify-spin.gif" style="height: 200px" />

Realistically, the only thing that makes this specific to Spotify is the design of the app. You could easily use this project to show any QR code you like, and utilize [patchbay](https://patchbay.pub/docs/index.html) to update it.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Setup
Before you get started, make sure you have a `.env`:
```
PATCHBAY_PUBSUB_KEY=<some_random_string>
```

Then, you can install the dependencies and source `.env`:
```
yarn
source .env
```

# Usage
Run the kiosk with:
```
yarn start
```

Send a message to the kiosk:
```
curl "https://patchbay.pub/pubsub/<PATCHBAY_PUBSUB_KEY>" -d '{"title":"Spotify Group Session","body":"Scan the code to join!","url":"www.spotify.com/groups/some-id"}'
```