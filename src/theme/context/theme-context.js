import { createTheme } from '@material-ui/core';
import getDesignTokens from 'theme';
const { createContext, useState, useMemo, memo } = require('react');

export const ColorModeContext = createContext({ toggleColorMode: (f) => f });

ColorModeContext.displayName = 'ColorModeContext';

const ProviderColorMode = memo(({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  window['theme'] = theme;

  return <ColorModeContext.Provider value={{ colorMode, theme, mode}}>{children}</ColorModeContext.Provider>;
});

export default ProviderColorMode;
