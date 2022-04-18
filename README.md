# Expo Typescript Megatemplate
Fastest and easiest way to create Expo applications.

Expanded and updated base from [here](https://github.com/ReactNativeSchool/expo-typescript-template)



<br>
<hr>
<p align="center">
If you find this useful, please give this repo a 🌟</a>.
</p>
<hr>
<br>

## Features

- All TypeScript
- Expo dev-client ready.
- Flipper integrated for debbuging
- Typed theming system
- i18n Internationalization
- React Navigation v6 @native
- Reanimated 2 & Moti for animations
- Styled-components preinstalled
- Typescript with Eslint & Prettier configured
- Testing Configured with Testing Library and Jest
- Simple project structure
- Small component library to get started with

It's easy to create a project, strip out the few components included, and still have the architecture in place to quickly start building an app.


## Branches

- ### [`main`](https://github.com/net-runner/expo-typescript-megatemplate)

  The basic stack with [Expo](https://github.com/expo/expo), [React Navigation](https://github.com/react-navigation/react-navigation), [Reanimated 2](https://github.com/software-mansion/react-native-reanimated), [styled-components](https://github.com/styled-components/styled-components), [Testing Library](https://github.com/callstack/react-native-testing-library) and [Storybook](https://github.com/storybookjs/storybook). + i18n internationalization  and theming

  - ### [`mobx-mmkv`](https://github.com/net-runner/expo-typescript-megatemplate/tree/mobx-mmkv) <sup><sub>([compare](https://github.com/net-runner/expo-typescript-megatemplate/compare/main...mobx-mmkv?diff=split#files_bucket))</sub></sup>

    Master plus [mobx](https://github.com/mobxjs/mobxx), [mobx-persist-store](https://github.com/reduxjs/redux-toolkit) for store and persistance.

  - ### [`redux-realm`](https://github.com/net-runner/expo-typescript-megatemplate/tree/redux-realm) <sup><sub>([compare](https://github.com/net-runner/expo-typescript-megatemplate/compare/main...redux-realm?diff=split#files_bucket))</sub></sup>

    Master plus [redux](https://github.com/reactjs/redux), [redux-toolkit](https://github.com/reduxjs/redux-toolkit) and [realm-db](https://github.com/erikras/redux-form) as a persistant store and a crud example.

  - ### [`three-fiber`](https://github.com/net-runner/expo-typescript-megatemplate/tree/three-fiber) <sup><sub>([compare](https://github.com/net-runner/expo-typescript-megatemplate/compare/main...three-fiber?diff=split#files_bucket))</sub></sup>

    Master plus [react-three-fiber](https://github.com/pmndrs/react-three-fiber), [@react-three/cannon](https://github.com/pmndrs/use-cannon), [@react-three/drei](https://github.com/pmndrs/drei) and [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) for 3D native developement

## Usage

> Be sure to have the [Expo CLI](https://docs.expo.io/workflow/expo-cli/) installed.

> Build your own Expo Development Client (needed for Reanimated and other modules with native code)
> see [Expo Dev Client](https://docs.expo.dev/development/getting-started/)

```bash
expo prebuild && npm run android
```
or use [Expo Application Services](https://docs.expo.dev/eas/)


## Npm scripts

- Run dev server: `npm start`
- Run on Android: `npm run android`
- Run on iOS: `npm run ios`
- Run on Web: `npm run web`
- Run Tests: `npm run test` or `npm run test:watch`
- Open Storybook `npm run storybook`
- Lint Code: `npm run lint`
- Format Code: `npm run format`

