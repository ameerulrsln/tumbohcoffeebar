export type Item = {
  name: string;
  note: string;
  price: string;
  credit?: string;
};

export type Group = { label: string; items: Item[] };

/* ============ BAR ============ */

export const espresso: Item[] = [
  { name: "Espresso", note: "Single or double. Where it all begins.", price: "7" },
  { name: "Cortado", note: "Espresso cut with warm milk.", price: "10" },
  { name: "Flat White", note: "Velvet microfoam, bold base.", price: "12" },
  { name: "Cappuccino", note: "Equal parts brew, milk, foam.", price: "12" },
];

export const slow: Item[] = [
  { name: "Tuang-Lalu", note: "Our pour-over. Bright, clean, patient.", price: "14" },
  { name: "Cold Brew", note: "Steeped slow, poured over ice.", price: "13" },
  { name: "Iced Latte", note: "Espresso, cold milk, no rush.", price: "12" },
];

export const beyond: Item[] = [
  { name: "Matcha Latte", note: "Stone-ground green, gentle sweetness.", price: "13" },
  { name: "Signature Chocolate", note: "Deep, dark, comforting.", price: "12" },
  { name: "Citrus Soda", note: "House soda, bright and fizzy.", price: "10" },
];

/* ============ CURATE ============ */

export const curate: Item[] = [
  {
    name: "KellyKellog",
    note: "It's Mont Blanc! A smooth layer of creamy orange crème over cold brew — a refreshing twist with a citrus finish.",
    price: "17",
  },
  {
    name: "Coco Jade",
    note: "A silky blend of matcha and cream floating above pure coconut water for a refreshing, earthy, creamy sip.",
    price: "16",
  },
  {
    name: "Shine On You",
    note: "A refreshing tea mocktail infused with lavender, pineapple and a splash of lemon for a bright floral-citrus finish.",
    price: "14",
    credit: "Ritma Slowbar's creation",
  },
  {
    name: "Syasya's Temple",
    note: "A classic non-alcoholic mocktail made with lemon-lime soda, grenadine and a sweet berry finish.",
    price: "12",
    credit: "Kitchen's favourite pick",
  },
  {
    name: "Sinful Solero",
    note: "A creamy citrus lemonade with a rotating fruity syrup — a unique flavour in every cup.",
    price: "12",
  },
  {
    name: "Slap & Pop!",
    note: "A refreshing 0% proof mocktail blending pomegranate, orange, lime and pineapple with a fizzy soda finish.",
    price: "16",
    credit: "Bassist in Alley's creation",
  },
  {
    name: "Barley Whisper",
    note: "A calming barley tea base layered with creamy oat milk, finished with light pomegranate foam and a subtle savoury undertone.",
    price: "15",
    credit: "Essential Room's creation",
  },
];

export const tea: Item[] = [
  { name: "Boh · Pu Er · Oolong · Earl Grey", note: "", price: "6" },
  { name: "London Fog", note: "", price: "9" },
  { name: "Honey Lemon", note: "", price: "9" },
  { name: "Carbonized", note: "", price: "9" },
  {
    name: "Fruit / Floral",
    note: "Chrysanthemum, rose, lavender, gojiberry, mulberry, jasmine, roselle.",
    price: "9",
  },
];

/* ============ KITCHEN — DAILY, FROM 1:00PM ============ */

export const kitchenDaily: Group[] = [
  {
    label: "Mains",
    items: [
      {
        name: "Steak & Frites",
        note: "Grilled steak served with crispy fries, green beans, savoury gravy and our style chimichurri sauce. Our steak selection changes based on availability — price varies with the cut selected.",
        price: "45–60",
      },
      {
        name: "Grilled Chicken",
        note: "Grilled boneless chicken leg served with mashed potato, coleslaw and mushroom gravy.",
        price: "20",
      },
      {
        name: "Barramundi Fish and Chips",
        note: "Golden crispy barramundi fillet served with chips, creamy garlic mushy peas, Tumboh style tartar sauce and fresh lemon.",
        price: "35",
      },
      {
        name: "Tumboh's Shakshuka",
        note: "A hearty Middle Eastern favourite featuring eggs poached in a robust spiced tomato and pepper sauce, finished with Parmesan and served with garlic toast and chicken sausage bites.",
        price: "16",
      },
    ],
  },
  {
    label: "Light & Bites",
    items: [
      {
        name: "Creamy Mash Potato",
        note: "Creamy mashed potato topped with rich mushroom gravy.",
        price: "7",
      },
      {
        name: "Keropok Lekor",
        note: "Local Terengganu snack, an all-time favourite served with local condiments; air lada.",
        price: "7",
      },
      {
        name: "Bucket of Fries",
        note: "Crispy golden french fries served with creamy garlic aioli dip.",
        price: "9",
      },
      {
        name: "Original Poppers",
        note: "Deep fried chicken popcorn served with french fries and homemade cajun mayo dip.",
        price: "15",
      },
      {
        name: "Buffalo Poppers",
        note: "Deep fried chicken popcorn coated with spicy buffalo sauce, with french fries and creamy garlic aioli dip.",
        price: "17",
      },
      {
        name: "Crispy Catch Bites",
        note: "Lightly battered calamari and prawns fried until golden, with fries, tartar sauce, cajun mayo and a lime wedge.",
        price: "23",
      },
    ],
  },
  {
    label: "Toast & Buns",
    items: [
      {
        name: "Cheese and Eggs",
        note: "Two slices of toast topped with fluffy scrambled eggs, cheddar cheese and sprinkles of parmesan cheese.",
        price: "12",
      },
      {
        name: "Sloppy Joe's",
        note: "Like a burger! Savoury minced beef with mushrooms on a burger bun, served with chips and pickles on the side.",
        price: "18",
      },
    ],
  },
  {
    label: "Cozy Warm Bowls",
    items: [
      {
        name: "Creamy Tomato Soup with Grilled Cheese",
        note: "Creamy tomato soup slow simmered with basil, served with grilled cheese.",
        price: "16",
      },
      {
        name: "Mushroom Soup with Garlic Toast",
        note: "Creamy mushroom simmered together with fresh thyme & parsley and chicken broth, comes with garlic toast.",
        price: "16",
      },
    ],
  },
];

/* ============ FRIDAY BREAKFAST — 8:00 TO 12:00 ============ */

export const fridayBreakfast: Item[] = [
  {
    name: "Breakfast Riot",
    note: "Tumboh's version of an English breakfast — a hearty plate to start your day. Eggs (scrambled or sunny side up), sausages, streaky beef stir fry, mushrooms and spinach, grilled tomatoes, seasoned baked beans and all the good stuff in between.",
    price: "25",
  },
  {
    name: "Cloud and Smoked",
    note: "Your morning just got fancy — smoked salmon, scrambled egg and spreadable herb cream cheese on crispy toast.",
    price: "18",
  },
  {
    name: "Tumboh's Shakshuka",
    note: "Eggs poached in a robust spiced tomato and pepper sauce, finished with Parmesan and served with garlic toast and chicken sausage bites.",
    price: "16",
  },
  {
    name: "Morning Eggs and Mushrooms",
    note: "A pair of open toasts featuring soft, fluffy scrambled eggs and rich, creamy sautéed mushrooms.",
    price: "15",
  },
  {
    name: "Creamy Tomato Soup with Grilled Cheese",
    note: "Creamy tomato soup slow simmered with basil, served with grilled cheese.",
    price: "16",
  },
  {
    name: "Mushroom Soup with Garlic Toast",
    note: "Creamy mushroom simmered with fresh thyme & parsley and chicken broth, comes with garlic toast.",
    price: "16",
  },
  {
    name: "Keropok Lekor",
    note: "Local Terengganu snack, an all-time favourite served with local condiments; air lada.",
    price: "7",
  },
];
