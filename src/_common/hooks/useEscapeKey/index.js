import { useCallback, useEffect } from 'react';

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keydown';

export default function useEscapeKey(isOpen, handleClose) {
  /* . To prevent an infinite loop, useCallback hook caches our handleEscKey function so that it doesn’t 
continually become a new function at each render. */

  const handleEscKey = useCallback(
    (event) => {
      if (event.key === KEY_NAME_ESC && isOpen) {
        handleClose();
      }
    },
    [handleClose, isOpen]
  );

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey);
    return () => document.removeEventListener(KEY_EVENT_TYPE, handleEscKey);
  }, [handleEscKey]);

  return [handleEscKey];
}
