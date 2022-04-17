import msgAlert from './msgAlertStore';
import cartStatus from './cartStore';

function useStore() {
  return { msgAlert, cartStatus };
}

export default useStore;
