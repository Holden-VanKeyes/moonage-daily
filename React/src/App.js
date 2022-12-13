import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import GameArea from './components/GameArea'
import AppLayout from './module/AppLayout'

function App() {
  return (
    // <ColorSchemeProvider
    //   colorScheme={colorScheme}
    //   toggleColorScheme={toggleColorScheme}
    // >
    //   <MantineProvider
    //     withGlobalStyles
    //     withNormalizeCSS
    //     theme={{ ...theme, colorScheme }}
    //   >
    //     <AppLayout>

    //     </AppLayout>
    //   </MantineProvider>
    // </ColorSchemeProvider>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppLayout></AppLayout>
    </MantineProvider>
  )
}

export default App
