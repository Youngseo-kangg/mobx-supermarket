import CartItem from '../components/cart/cartItem';
import useStore from '../store/useStore';

function Cart() {
  const { cartStatus } = useStore();
  return (
    <div>
      {cartStatus.cartItems.length === 0 ? (
        <div>아직 담긴 아이템이 없습니다.</div>
      ) : (
        cartStatus.cartItems.map((el, idx) => {
          return <CartItem key={`${el}_${idx}`} item={el} />;
        })
      )}
    </div>
  );
}

export default Cart;
