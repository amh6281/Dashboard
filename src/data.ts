export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Home",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "홍길동",
    email: "hong@gmail.com",
    amount: "59,000",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "김철수",
    email: "kim@gmail.com",
    amount: "54,000",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "이순",
    email: "lee@gmail.com",
    amount: "45,000",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "박길",
    email: "park@gmail.com",
    amount: "44,300",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "최수",
    email: "choi@gmail.com",
    amount: "39,000",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "라길",
    email: "la@gmail.com",
    amount: "28,000",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "김박",
    email: "kkim@gmail.com",
    amount: "19,000",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "총 사용자",
  number: "3,550",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "총 상품",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "총 수익",
  number: "564,320₩",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "총 비율",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxVisit = {
  title: "총 방문",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    { name: "Sun", visit: 4000 },
    { name: "Mon", visit: 3000 },
    { name: "Tue", visit: 2000 },
    { name: "Wed", visit: 2780 },
    { name: "Thu", visit: 1890 },
    { name: "Fri", visit: 2390 },
    { name: "Sat", visit: 3490 },
  ],
};

export const barChartBoxRevenue = {
  title: "순 이익",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    { name: "Sun", profit: 4000 },
    { name: "Mon", profit: 3000 },
    { name: "Tue", profit: 2000 },
    { name: "Wed", profit: 2780 },
    { name: "Thu", profit: 1890 },
    { name: "Fri", profit: 2390 },
    { name: "Sat", profit: 3490 },
  ],
};

export const pieChartBoxDevice = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

export const bigChartBoxCategory = [
  { name: "Sun", books: 4000, clothes: 2400, electronic: 2400 },
  { name: "Mon", books: 3000, clothes: 1398, electronic: 2210 },
  { name: "Tue", books: 2000, clothes: 9800, electronic: 2290 },
  { name: "Wed", books: 2780, clothes: 3908, electronic: 2000 },
  { name: "Thu", books: 1890, clothes: 4800, electronic: 2181 },
  { name: "Fri", books: 2390, clothes: 3800, electronic: 2500 },
  { name: "Sat", books: 3490, clothes: 4300, electronic: 2100 },
];

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    name: "홍길동",
    email: "hong@gmail.com",
    phone: "010-0000-0000",
    createdAt: "2023.01.23",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "김철수",
    email: "ki,@gmail.com",
    phone: "010-0001-0001",
    createdAt: "2023.01.02",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "이순",
    email: "lee@hottmail.com",
    phone: "010-0002-0002",
    createdAt: "2023.01.01",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "박길",
    email: "park@gmail.com",
    phone: "010-0003-0003",
    createdAt: "2023.02.01",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "최수",
    email: "choi@gamil.com",
    phone: "010-0004-0004",
    createdAt: "2023.02.05",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "라길",
    email: "la@mail.com",
    phone: "010-0005-0005",
    createdAt: "2023.02.06",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "김박",
    email: "kki,@gmail.com",
    phone: "010-0006-0006",
    createdAt: "2023.02.25",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "민수",
    email: "min@mail.com",
    phone: "010-0007-0007",
    createdAt: "2023.03.02",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "수철",
    email: "soo@gmail.com",
    phone: "010-0008-0008",
    createdAt: "2023.03.15",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "이국",
    email: "llee@gmail.com",
    phone: "010-0009-0009",
    createdAt: "2023.03.21",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "황수",
    email: "hs@gmail.com",
    phone: "010-0010-0010",
    createdAt: "2023.03.25",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "박철",
    email: "ppark@hotmail.com",
    phone: "010-0011-0011",
    createdAt: "2023.03.29",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "민박",
    email: "ceuc@gmail.com",
    phone: "010-0012-0012",
    createdAt: "2023.04.01",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "오길",
    email: "o@gmail.com",
    phone: "010-0013-0013",
    createdAt: "2023.04.05",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    name: "우최",
    email: "ubi@gmail.com",
    phone: "010-0014-0014",
    createdAt: "2023.04.07",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "플레이스테이션 5 디지털 에디션",
    color: "white",
    producer: "Sony",
    price: "250,000",
    createdAt: "2023.01.02",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "델 데스크탑 KR211822",
    color: "black",
    producer: "Dell",
    price: "499,000",
    createdAt: "2023.01.05",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "삼성 스마트TV 4K",
    color: "gray",
    producer: "Samsung",
    price: "999,000",
    createdAt: "2023.01.25",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "아이폰 14 Pro",
    color: "white",
    producer: "Apple",
    price: "$890,000",
    createdAt: "2023.02.12",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "39,000",
    createdAt: "2023.02.02",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "59,000",
    createdAt: "2023.02.26",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "2023.03.01",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "899,000",
    createdAt: "2023.03.12",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "970,000",
    createdAt: "2023.04.11",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop",
    color: "black",
    producer: "Acer",
    price: "599,990",
    createdAt: "2023.04.12",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "홍길동",
  img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    name: "홍길동",
    email: "hong@gmail.com",
    phone: "010-0000-0000",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "홍길동 사용자가 플레이스테이션 5 디지털 에디션을 구매하였습니다.",
      time: "3일 전",
    },
    {
      text: "홍길동 사용자가 삼성 스마트TV 4K를 구매하였습니다.",
      time: "1주일 전",
    },
    {
      text: "홍길동 사용자가 델 데스크탑 KR211822를 구매하였습니다.",
      time: "2주일 전",
    },
    {
      text: "홍길동 사용자가 아이폰 14 Pro를 구매하였습니다.",
      time: "한달 전",
    },
    {
      text: "홍길동 사용자가 Logitech MX Master 3를 구매하였습니다.",
      time: "한달 전",
    },
  ],
};

export const singleProduct = {
  id: 1,
  title: "플레이스테이션 5 디지털 에디션",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "250,000",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "홍길동 사용자가 플레이스테이션 5 디지털 에디션을 구매하였습니다.",
      time: "3일 전",
    },
    {
      text: "홍길동 사용자가 플레이스테이션 5 디지털 에디션을 위시리스트에 담았습니다.",
      time: "1주일 전",
    },
    {
      text: "김철수 사용자가 플레이스테이션 5 디지털 에디션을 구매하였습니다.",
      time: "2주일 전",
    },
    {
      text: "김순 사용자가 상품을 수령하였습니다..",
      time: "한달 전",
    },
    {
      text: "박길 사용자가 플레이스테이션 5 디지털 에디션을 위시리스트에 담았습니다.",
      time: "한달 전",
    },
    {
      text: "최수 사용자가 상품을 수령하였습니다.",
      time: "두달 전",
    },
  ],
};
