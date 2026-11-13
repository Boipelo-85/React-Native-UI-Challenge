# React Native UI Challenge

A cross-platform currency exchange interface built with Expo, React Native, and TypeScript. The app lets you choose currencies, enter a send amount, review an estimated quote and fees, and open a swap preview.


## Features

- Choose a currency to send and receive, or swap the selected pair.
- Enter an amount and view an estimated receive amount.
- Review estimated spread and network fees.
- See validation messages for insufficient sample balances and amounts that do not cover fees.
- Preview a sample swap before closing the dialog.
- Support for ETH, BTC, USDT, SOL, USD, EUR, GBP, and ZAR.

## Tech stack

- Expo SDK 58
- React Native 0.88
- TypeScript
- `react-native-safe-area-context`

## Getting started

### Requirements

- Node.js and npm
- Expo Go on a device, or an Android/iOS simulator for native development

### Install and run

```bash
npm install
npm start
```

When Expo starts, use the terminal shortcuts or scan the QR code with Expo Go. You can also start a specific target with:

```bash
npm run android
npm run ios
npm run web
```

## Useful commands

```bash
npm run lint
npx tsc --noEmit
```

## Project structure

```text
.
├── App.tsx                         # App entry point
├── app.json                        # Expo app configuration
├── eas.json                        # EAS Build profiles
├── package.json                    # Dependencies and npm scripts
├── package-lock.json               # npm dependency lockfile
├── tsconfig.json                   # TypeScript configuration and aliases
├── eslint.config.js                # ESLint configuration
├── src/
│   ├── assets/
│   │   ├── fonts/                  # Font assets (currently empty)
│   │   ├── icons/                  # App icon source assets
│   │   └── images/                 # App, splash, and web images
│   ├── components/
│   │   ├── Button/                 # Reusable action button
│   │   ├── CurrencyCard/           # Send/receive amount and currency card
│   │   ├── CurrencyIcon/           # Currency icon rendering
│   │   ├── CurrencyPicker/         # Currency selection modal
│   │   ├── FeeDetails/             # Quote and fee breakdown
│   │   ├── Header/                 # Screen header
│   │   └── SwapButton/             # Swap selected currencies control
│   ├── constants/
│   │   ├── colors.ts               # Color palette
│   │   ├── currencies.ts           # Sample currencies, balances, and rates
│   │   ├── spacing.ts              # Spacing values
│   │   └── typography.ts           # Text styles and type scale
│   ├── screens/
│   │   └── ExchangeScreen/         # Main exchange screen and styles
│   ├── types/
│   │   └── index.ts                # Shared TypeScript types
│   └── utils/
│       └── swapQuote.ts            # Sample quote, fee, and amount formatting logic
└── README.md
```

## Notes

- The main screen is `src/screens/ExchangeScreen/ExchangeScreen.tsx`; `App.tsx` provides the safe-area context and renders it.
- The `@/` import alias points to `src/`.
- Exchange data and quote calculations are for UI demonstration only and should not be used for financial decisions.

## Author

- **Name:** Boipelo Harry Motileng
- **GitHub:** [github.com/boipelo](https://github.com/Boipelo-85)
- **LinkedIn:** [linkedin.com/in/boipelo](https://www.linkedin.com/in/boipelo-motileng)