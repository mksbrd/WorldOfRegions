import { useEffect, useState } from 'react';

/**
 * useLockBodyScroll hook.
 * Locks body scroll.
 *
 * @returns {{setLocked: React.Dispatch<React.SetStateAction<boolean>>}}
 */

const useLockBodyScroll = () => {
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [locked]);

  return { setLocked };
};

export default useLockBodyScroll;
