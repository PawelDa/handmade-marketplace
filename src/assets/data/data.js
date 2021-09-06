const SHOP_DATA = {
  candles: {
    id: 1,
    title: 'Candles',
    routeName: 'candles',
    items: [
      {
        id: 1,
        name: 'Red Candle',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/08/10/22/34/candles-2628473_960_720.jpg',
        price: 9
      },
      {
        id: 2,
        name: 'Three Wick Candle',
        imageUrl: 'https://images.pexels.com/photos/3654619/pexels-photo-3654619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 11
      },
      {
        id: 3,
        name: 'Round Glass Candle',
        imageUrl: 'https://images.pexels.com/photos/6162849/pexels-photo-6162849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 8
      },
      {
        id: 4,
        name: 'White Candle',
        imageUrl: 'https://images.pexels.com/photos/6311832/pexels-photo-6311832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 12
      },
      {
        id: 5,
        name: 'Happy Candle',
        imageUrl: 'https://images.pexels.com/photos/5377435/pexels-photo-5377435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 7
      },
      {
        id: 6,
        name: 'Scented Candle',
        imageUrl: 'https://images.pexels.com/photos/714898/pexels-photo-714898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 13
      },
      {
        id: 7,
        name: 'Star Candle',
        imageUrl: 'https://images.pexels.com/photos/7445088/pexels-photo-7445088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 12
      },
      {
        id: 8,
        name: 'Grey Candle',
        imageUrl: 'https://images.pexels.com/photos/1071285/pexels-photo-1071285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 10
      },
      {
        id: 9,
        name: 'Blue Candle',
        imageUrl: 'https://images.unsplash.com/photo-1532595891845-74d041c17ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
        price: 13
      }
    ]
  },
  bookmarks: {
    id: 2,
    title: 'Bookmarks',
    routeName: 'bookmarks',
    items: [
      {
        id: 10,
        name: 'Simple Paper',
        imageUrl: 'https://images.unsplash.com/photo-1561865406-62a037159577?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        price: 5
      },
      {
        id: 11,
        name: 'Metal Leaf',
        imageUrl: 'https://images.unsplash.com/photo-1532139677426-43f0bedd6c1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 11
      },
      {
        id: 12,
        name: 'Spiritual',
        imageUrl: 'https://images.unsplash.com/photo-1614985489518-edb16bf9b480?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 9
      },
      {
        id: 13,
        name: 'Metal Flower',
        imageUrl: 'https://images.unsplash.com/photo-1532308805823-0c85813d7a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        price: 10
      },
      {
        id: 14,
        name: 'Red Leaf',
        imageUrl: 'https://images.pexels.com/photos/3755022/pexels-photo-3755022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 8
      },
      {
        id: 15,
        name: 'Heart',
        imageUrl: 'https://images.pexels.com/photos/186447/pexels-photo-186447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        price: 9
      },
      {
        id: 16,
        name: 'Gold Rose',
        imageUrl: 'https://images.pexels.com/photos/8715442/pexels-photo-8715442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        price: 12
      },
      {
        id: 17,
        name: 'Paper Purple',
        imageUrl: 'https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80',
        price: 8
      }
    ]
  },
  clothes: {
    id: 3,
    title: 'Clothes',
    routeName: 'clothes',
    items: [
      {
        id: 18,
        name: 'Scarf',
        imageUrl: 'https://images.unsplash.com/photo-1457545195570-67f207084966?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1069&q=80',
        price: 20
      },
      {
        id: 19,
        name: 'Socks',
        imageUrl: 'https://images.unsplash.com/photo-1615486364462-ef6363adbc18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 15
      },
      {
        id: 20,
        name: 'Dress',
        imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
        price: 30
      },
      {
        id: 21,
        name: 'Hat',
        imageUrl: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 20
      },
      {
        id: 22,
        name: 'Jumper',
        imageUrl: 'https://images.pexels.com/photos/6995880/pexels-photo-6995880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 30
      }
    ]
  },
  jewellery: {
    id: 4,
    title: 'Jewellery',
    routeName: 'jewellery',
    items: [
      {
        id: 23,
        name: 'Earrings',
        imageUrl: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 17
      },
      {
        id: 24,
        name: 'Necklace',
        imageUrl: 'https://images.unsplash.com/photo-1609245340409-cad2474ab1d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
        price: 20
      },
      {
        id: 25,
        name: 'Wooden Necklace',
        imageUrl: 'https://images.unsplash.com/photo-1523251691580-613e117a75e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 17
      },
      {
        id: 26,
        name: 'Bracelet',
        imageUrl: 'https://images.pexels.com/photos/3634366/pexels-photo-3634366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 26
      },
      {
        id: 27,
        name: 'Yellow Earrings',
        imageUrl: 'https://images.unsplash.com/photo-1623133343364-04d1d1a26fcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 30
      },
      {
        id: 28,
        name: 'Green Bracelet',
        imageUrl: 'https://images.unsplash.com/photo-1611235115922-72aece5cf686?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJyYWNlbGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 19
      },
      {
        id: 29,
        name: 'Blue Earrings',
        imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 20
      }
    ]
  },
  cosmetics: {
    id: 5,
    title: 'Cosmetics',
    routeName: 'cosmetics',
    items: [
      {
        id: 30,
        name: 'Soap',
        imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 10
      },
      {
        id: 31,
        name: 'Lipbalm',
        imageUrl: 'https://images.unsplash.com/photo-1612539395498-f7f359fb3c55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80',
        price: 20
      },
      {
        id: 32,
        name: 'Face Oil',
        imageUrl: 'https://images.unsplash.com/photo-1600428853876-fb5a850b444f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 16
      },
      {
        id: 33,
        name: 'Shampoo',
        imageUrl: 'https://images.unsplash.com/photo-1609195064085-c65e6aebda17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 25
      },
      {
        id: 34,
        name: 'Conditioner',
        imageUrl: 'https://images.unsplash.com/photo-1604333913939-9d664b44cd81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 40
      },
      {
        id:35,
        name: 'Body Lotion',
        imageUrl: 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
