import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Global CSS

// We created a _app.js file in our pages folder
// In there we import our global styles
// Then we return a component that takes pageProps in

// After restarting the server, we added some styles in the styles/global.css file to add global styles (they were already there as default).