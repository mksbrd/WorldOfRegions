import { useEffect, useState } from 'react';
import { isEqual } from 'lodash-es';

const useWindowSizeSelector = <T>(
  selector:({ width, height }:{width:number, height:number})=>T,
  deps:any[] = [],
  enabled:boolean = true,
):T => {
  const [state, setState] = useState(selector({ width: window.innerWidth, height: window.innerHeight }));
  useEffect(() => {
    if (!enabled) {
      return () => {};
    }
    const handleResize = (): void => {
      const newState = selector({ width: window.innerWidth, height: window.innerHeight });
      setState((state) => (!isEqual(state, newState) ? newState : state));
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [state, enabled, ...deps]);

  return state;
};

export default useWindowSizeSelector;
