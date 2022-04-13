import { ItemComponent } from '../../styles/itemlist';

function Item({ itemInfo }) {
  return (
    <ItemComponent>
      <h2>{itemInfo.name}</h2>
      <p>{itemInfo.price}원</p>
      <img src={itemInfo.imageSrc} alt={`${itemInfo.name} 제품사진`} />
    </ItemComponent>
  );
}

export default Item;
