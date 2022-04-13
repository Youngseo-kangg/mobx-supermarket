import Item from '../components/itemlist/item';
import { ItemlistComponent } from '../styles/itemlist';
import { v4 as uuidv4 } from 'uuid';

function ItemList() {
  const items = [
    { _id: 0, name: '2020 달력', imageSrc: 'images/2020.jpg', price: 14000 },
    { _id: 1, name: '보도블럭', imageSrc: 'images/block.jpg', price: 4000 },
    { _id: 2, name: '치킨백', imageSrc: 'images/chickenBag.png', price: 5000 },
    {
      _id: 3,
      name: '컬러링북',
      imageSrc: 'images/coloringbook.png',
      price: 8000,
    },
    {
      _id: 4,
      name: '웰시코기 엉덩이 쿠션',
      imageSrc: 'images/corgiCushion.png',
      price: 11000,
    },
    {
      _id: 5,
      name: '노른자 분리기',
      imageSrc: 'images/egg.png',
      price: 7000,
    },
    {
      _id: 6,
      name: '개구리 안대',
      imageSrc: 'images/frog.jpg',
      price: 3000,
    },
    {
      _id: 5,
      name: '장갑 집게',
      imageSrc: 'images/tong.png',
      price: 2000,
    },
    {
      _id: 6,
      name: '유니콘 통조림',
      imageSrc: 'images/unicornMeat.png',
      price: 18000,
    },
  ];
  return (
    <ItemlistComponent>
      {items.map((item) => {
        return <Item itemInfo={item} key={uuidv4()} />;
      })}
    </ItemlistComponent>
  );
}

export default ItemList;
