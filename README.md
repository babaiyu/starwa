## React Native TypeScript + Redux
A Star War Collections Movie that you wanted before.
this project is using [SWAPI.CO](https://swapi.co/){:target="_blank"} API

### Project Structure

```bash
├── __tests_
├── android
├── ios
├── src
│   ├── assets
│   │   ├── fonts
│   ├── components
│   │   ├── Card
│   │   │   ├── index.tsx
│   │   │   ├── styles.tsx
│   │   ├── HOC
│   │   │   ├── index.tsx
│   │   │   ├── styles.tsx
│   │   ├── Modal
│   │   │   ├── index.tsx
│   │   │   ├── styles.tsx
│   │   ├── StatusBar
│   │   │   ├── index.tsx
│   │   │   ├── styles.tsx
│   │   ├── Tabs
│   │   │   ├── index.tsx
│   │   │   ├── styles.tsx
│   ├── config
│   │   ├── constant.tsx
│   ├── redux
│   │   ├── your-state
│   │   │   ├── action.ts
│   │   │   ├── reducer.ts
│   │   │   ├── types.ts
│   │   ├── reducers.ts
│   │   ├── store.ts
│   ├── routes
│   │   ├── index.ts
│   ├── screens
│   │   ├── your-screen
│   │   │   │   ├── components
│   │   │   │   │   ├── // Only local component for the screens
│   │   │   ├── YourScreen.tsx
│   │   │   ├── index.ts
│   │   │   ├── styles.ts
│   │   │   ├── types.ts
│   ├── services
│   │   ├── api.ts
│   ├── utils
│   │   ├── ScaleUtils.tsx
├── App.tsx
├── index.js
├── package.json
```

### Run the Project

```
git clone https://github.com/babaiyu/rn-typescript.git swmovie
cd swmovie && npm install
```

for Android

```
react-native run-android
```

for IOS
```
react-native run-ios
```
