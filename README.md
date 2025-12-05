<p align="center">
  <img src="screenshots/splash.png" width="30%"/>
  <img src="screenshots/home.png" width="30%"/>
  <img src="screenshots/details.png" width="30%"/>
</p>


# Pokémon Explorer App

An easy, fun way to explore Pokémon with Expo, React Native, TypeScript, Expo Router, Lottie React Native, and the PokeAPI.

## Purpose of This Project
- Learn the basics of Expo and React Native.
- Practice TypeScript, animations, and API calls.
- Have fun building a simple but polished Pokémon experience.

## Features
- Pikachu animated splash screen using Lottie.
- Animated Pokémon cards on the home screen.
- Fetches live Pokémon data from the PokeAPI.
- Pokémon details screen with power level, animated energy bar, and floating Pokémon image.
- Type-based color themes.
- Smooth navigation handled by Expo Router.

## Technologies Used
- Expo + React Native
- TypeScript
- Expo Router
- Lottie React Native
- PokeAPI

## Project Folder Structure
```
pokemon-expo-app/
├── app/
│   ├── _layout.tsx          # Navigation layout and splash logic
│   ├── index.tsx            # Home screen with Pokémon cards
│   └── poke_details.tsx     # Pokémon details screen with animations
├── assets/
│   ├── pikachu.json         # Lottie animation for the splash screen
│   └── images/
├── node_modules/
├── app.json                 # Expo app configuration
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── eslint.config.js         # ESLint configuration
├── expo-env.d.ts            # Expo environment types
├── README.md                # This file
└── .gitignore
```

## How to Run This Project
Follow these commands in order:
1. `npx create-expo-app@latest pokemon-expo-app`
2. `git clone https://github.com/YOUR_USERNAME/pokemon-expo-app.git`
3. `cd pokemon-expo-app`
4. `npm install`
5. `npx expo install lottie-react-native`
6. `npm run reset-project`
7. `npx expo start`

## How To Add Screenshots To GitHub
1. Create a folder named `screenshots/` in the project root.
2. Add your images: `screenshots/splash.png`, `screenshots/home.png`, `screenshots/details.png`.
3. Example markdown to show an image:
   ```markdown
   ![Splash](screenshots/splash.png)
   ```
4. Commit and push the screenshots:
   - `git add screenshots`
   - `git commit -m "Add app screenshots"`
   - `git push`

## Future Improvements
- Add search and filters for Pokémon types.
- Cache API results for offline viewing.
- Add sound effects and haptics.
- Support more detailed stats and moves.

## Disclaimer
- Pokémon is a trademark of Nintendo/Creatures Inc./GAME FREAK inc.
- This app uses the public PokeAPI for learning and fun; it is not official and not for commercial use.

## Author
- Your Name Here# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
