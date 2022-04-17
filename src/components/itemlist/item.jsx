import { ItemComponent } from '../../styles/itemlist';
import useStore from '../../store/useStore';
import { observer } from 'mobx-react';
import { useState } from 'react';

function Item({ itemInfo }) {
  const { msgAlert, cartStatus } = useStore();
  const [count, setCount] = useState(1);
  // TODO : 카트에 물건을 추가하는 addToCart를 작성하세요.
  const addToCart = (item) => {
    // * cartStatus에 아이템을 추가하고, msgAlert에 'XX이 추가되었습니다'라는 문구가 보여야 합니다.
    cartStatus.addCart({
      _id: item._id,
      name: item.name,
      imageSrc: item.imageSrc,
      count: 1,
    });
    msgAlert.openMsgAlert(`${item.name}이 추가되었습니다.`);
  };

  // TODO : 아이템의 갯수를 관리할 상태를 변경할 updateCount를 작성하세요.
  const updateCount = () => {};

  return (
    <ItemComponent>
      <div className='itemImageWrapper'>
        <img src={itemInfo.imageSrc} alt={`${itemInfo.name} 제품사진`} />
      </div>
      <div className='itemStatusWrapper'>
        <h2>{itemInfo.name}</h2>
        <p>{itemInfo.price}원</p>
        <div className='itemCountWrapper'>
          <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button onClick={() => addToCart(itemInfo)}>담기</button>
        </div>
      </div>
    </ItemComponent>
  );
}

export default observer(Item);
