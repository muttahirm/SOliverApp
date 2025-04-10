# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
npm start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
npm run android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
npm run ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Start the Json server (MUST)

Open a new Terminal and run the following command to start the JSON server.

`npm run serve-json`

## Step 4: tests and coverage report

Open a new Terminal and run the following command to start tests

`npm run test`

`npm run coverage`

# Acceptance Creteria

1. Picture of the Article ✅
2. Name of the Aritcle ✅
3. Available colors of the Article ✅
4. Retail of the Article ✅
5. Filter by Price ✅
6. Filter by Color ✅
7. Product Image lazy loading ✅
8. React Native and Typescript used ✅
9. Common code standards and architecture implemented ✅
10. Click of a different color changes the image ✅
11. Unit test coverage ✅
12. Only slider library used ✅

# Additional Functionalities

1. React navigation
2. Bottom tab navigation to show Extra screens
3. Zustand for state management and data persistence
4. Sorting based on new product, ascending and descending prices
5. Use of axios
6. Use of react-query
7. Use of mmkv for local async storage
