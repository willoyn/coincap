# Coincap

### React Native app for tracking cryptocurrencies and forming your own portfolio. The project is an implementation of technical requirements listed in [./task.md](https://github.com/willoyn/coincap/blob/master/task.md)

To run the project, you need to have [the following setup](https://reactnative.dev/docs/environment-setup).

If it's already configured, run:

- `npm i`
- `npm start`
- for Android: `npm run android`
- for iOS: `cd ios && pod install && cd ../ && npm run ios`

The app uses a proxy server that is running on localhost:4000. You can clone it from [here.](https://github.com/willoyn/coincap-api)
Run `adb reverse tcp:4000 tcp:4000` to configure Android emulator to use the localhost server.
