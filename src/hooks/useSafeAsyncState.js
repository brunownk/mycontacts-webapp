import {
  useEffect, useRef, useState, useCallback,
} from 'react';

export default function useSafeAsyncState(initialState) {
  const [state, setState] = useState(initialState);

  const isMouted = useRef(false);

  useEffect(() => {
    isMouted.current = true;

    return () => {
      isMouted.current = false;
    };
  }, []);

  const setSafeAsyncState = useCallback((data) => {
    if (isMouted.current) {
      setState(data);
    }
  }, []);

  return [state, setSafeAsyncState];
}
