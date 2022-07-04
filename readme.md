# Coincap

### React Native app for tracking cryptocurrencies and forming your own portfolio. The project is an implementation of technical requirements listed in [./task.md](https://github.com/willoyn/coincap/blob/master/task.md)

The app uses a proxy server that is running on localhost:4000. You can clone it from [here.](https://github.com/willoyn/coincap-api)
Run `adb reverse tcp:4000 tcp:4000` to configure Android emulator to use the localhost server.

- In case you're trying to run **a bare React Native version** of this project

> To run the project, you need to have [the following setup](https://reactnative.dev/docs/environment-setup).

> If it's already configured, run:
>
> - `npm i`
> - `npm start`
> - for Android: `npm run android`
> - for iOS: `cd ios && pod install && cd ../ && npm run ios`

- In case you're trying to run this project via **Expo Go**, etc.
  **Pay attention: use direct USB connection to a device with a running [local backend server](https://github.com/willoyn/coincap-api). Do not forget to run `adb reverse tcp:4000 tcp:4000` after device is connected via USB.**

> - `expo install`
> - `expo start`
