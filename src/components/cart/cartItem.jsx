function CartItem({ item }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.count}개</p>
      <img src={item.imageSrc} alt={`${item.name} 제품사진`} />
    </div>
  );
}

export default CartItem;
