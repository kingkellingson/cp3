const Chance = require('chance');
const chance = new Chance();

let animalData =  [
  {
    name: 'Cheetah',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['orange', 'brown', 'black'],
    id: 1,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://cdn.britannica.com/s:300x300/01/152301-120-9ABF227D.jpg'
  },
  {
    name: 'Brown Bear',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['brown'],
    id: 2,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg'
  },
  {
    name: 'Beluga Whale',
    type: 'Mammal',
    living: true, legs: 0,
    colors: ['grey', 'blue'],
    id: 3,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.pinimg.com/236x/58/0c/d9/580cd9bbb76ee46897bb6b99b86b5ad0--dugong-beluga.jpg'
  },
  {
    name: 'Dolphin',
    type: 'Mammal',
    living: true, legs: 0,
    colors: ['grey', 'blue'],
    id: 4,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://assets3.thrillist.com/v1/image/2781802/size/tmg-article_default_mobile.jpg'
  },
  {
    name: 'Giraffe',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['orange', 'brown', 'black'],
    id: 5,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://cdn.britannica.com/s:400x400/55/75855-004-7CB8C9F0.jpg'
  },
  {
    name: 'Lion',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['orange', 'brown', 'yellow'],
    id: 6,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg'
  },
  {
    name: 'Otter',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['brown', 'black', 'white'],
    id: 7,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg'
  },
  {
    name: 'Siberian Tiger',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['orange', 'black', 'white'],
    id: 8,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://images3.alphacoders.com/237/thumb-350-237719.jpg'
  },
  {
    name: 'Wolf',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['grey', 'black', 'white', 'brown'],
    id: 9,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.natgeofe.com/k/093c14b4-978e-41f7-b1aa-3aff5d1c608a/gray-wolf-closeup_2x3.jpg'
  },
  {
    name: 'Polar Bear',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['white'],
    id: 10,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://secure.i.telegraph.co.uk/multimedia/archive/01964/BBX8JM_1964794c.jpg'
  },
  {
    name: 'Gazelle',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['brown'],
    id: 11,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/2009-thom-gazelle.jpg/220px-2009-thom-gazelle.jpg'
  },
  {
    name: 'Hedgehog',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['brown', 'black'],
    id: 12,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://vetmed.illinois.edu/wp-content/uploads/2017/12/pc-keller-hedgehog.jpg'
  },
  {
    name: 'Beaver',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['brown'],
    id: 13,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.pinimg.com/originals/ba/c5/ac/bac5accca8d640bfc57e14b8558d075d.jpg'
  },
  {
    name: 'Python',
    type: 'Reptile',
    living: true, legs: 0,
    colors: ['green'],
    id: 14,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.natgeofe.com/n/7fef9761-077c-45d0-9cca-78a984b9d614/burmese-python_thumb.jpg'
  },
  {
    name: 'Tortoise',
    type: 'Reptile',
    living: true, legs: 4,
    colors: ['green', 'brown'],
    id: 15,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/913efLFAXIL._SL1500_.jpg'
  },
  {
    name: 'Crocodile',
    type: 'Reptile',
    living: true, legs: 4,
    colors: ['green'],
    id: 16,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Bazoule_sacred_crocodiles_MS_6709cropped.JPG'
  },
  {
    name: 'Gila Monster',
    type: 'Reptile',
    living: true, legs: 4,
    colors: ['green'],
    id: 17,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'http://gallery.kingsnake.com/data/115447outsidegilas_013-med.jpg'
  },
  {
    name: 'Iguana',
    type: 'Reptile',
    living: true, legs: 4,
    colors: ['green'],
    id: 18,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Portrait_of_an_Iguana.jpg'
  },
  {
    name: 'Chameleon',
    type: 'Reptile',
    living: true, legs: 4,
    colors: ['green', 'red', 'yellow', 'orange', 'blue', 'purple', 'pink'],
    id: 19,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.natgeofe.com/k/54be71b2-c63a-4020-af84-885d02a7031e/chameleon-colors_4x3.jpg'
  },
  {
    name: 'Painted Turtle',
    type: 'Reptile',
    living: true, legs: 4,
    colors: ['green', 'orange', 'brown', 'yellow'],
    id: 20,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://www.earthrangers.com/public/content/wildwire/bigstock-Midland-Painted-Turtle-Basking-35339966.jpg'
  },
  {
    name: 'King Cobra',
    type: 'Reptile',
    living: true, legs: 0,
    colors: ['green', 'black', 'yellow'],
    id: 21,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.ytimg.com/vi/Rn1Aqa2eG3A/maxresdefault.jpg'
  },
  {
    name: 'Gecko',
    type: 'Reptile',
    living: true, legs: 4,
    colors: ['green', 'yellow', 'orange'],
    id: 22,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Gecko.jpg'
  },

  {
    name: 'Viper',
    type: 'Reptile',
    living: true, legs: 0,
    colors: ['green', 'yellow', 'brown'],
    id: 23,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Bamboo_pit_viper_-_head_profile.jpg'
  },
  {
    name: 'Macaw',
    type: 'Bird',
    living: true, legs: 2,
    colors: ['green', 'yellow', 'red', 'orange'],
    id: 24,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Blue-and-Gold-Macaw-300x300.jpg'

  },
  {
    name: 'Great Blue Heron',
    type: 'Bird',
    living: true, legs: 2,
    colors: ['white', 'blue'],
    id: 25,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/GBHfish5.jpg'
  },
  {
    name: 'Flamingo',
    type: 'Bird',
    living: true, legs: 2,
    colors: ['pink', 'white'],
    id: 26,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.natgeofe.com/k/40a56f75-39ec-40d7-9b8e-da7fa289c066/flamingo-standing_3x4.jpg'
  },
  {
    name: 'Egret',
    type: 'Bird',
    living: true, legs: 2,
    colors: ['white'],
    id: 27,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ardea_modesta.jpg/220px-Ardea_modesta.jpg'
  },
  {
    name: 'Puffin',
    type: 'Bird',
    living: true, legs: 2,
    colors: ['white', 'orange', 'black'],
    id: 28,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Puffin_%28Fratercula_arctica%29.jpg'
  },
  {
    name: 'Ostrich',
    type: 'Bird',
    living: true, legs: 2,
    colors: ['brown', 'white'],
    id: 29,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://animalfactguide.com/wp-content/uploads/2013/10/ostrich.jpg'
  },
  {
    name: 'Peacock',
    type: 'Bird',
    living: true, legs: 2,
    colors: ['green', 'blue', 'black'],
    id: 30,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://st2.depositphotos.com/1791514/11405/i/950/depositphotos_114055636-stock-photo-peacock-peafowl-beautiful-spread-of.jpg'
  },
  {
    name: 'Great Horned Owl',
    type: 'Bird',
    living: true, legs: 2,
    colors: ['black', 'brown'],
    id: 31,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bubo_virginianus_06.jpg/1200px-Bubo_virginianus_06.jpg'
  },
  {
    name: 'King Penguin',
    type: 'Bird',
    living: true, legs: 2,  
    colors: ['white', 'yellow', 'black'],
    id: 32,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://secure.i.telegraph.co.uk/multimedia/archive/02137/love_penguin_2137240i.jpg'
  },
  {
    name: 'Bald Eagle',
    type: 'Bird',
    living: true, legs: 2,
    colors: ['white', 'brown'],
    id: 33,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Bald_Eagle_Portrait.jpg'
  },
  {
    name: 'American Toad',
    type: 'Amphibian',
    living: true, legs: 4,
    colors: ['green'],
    id: 34,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'http://herpsofnc.org/wp-content/uploads/2016/11/14123314300_9808285854_b.jpg'
  },
  {
    name: 'Salamander',
    type: 'Amphibian',
    living: true, legs: 4,
    colors: ['green', 'black', 'yellow', 'brown'],
    id: 35,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.natgeofe.com/k/a42a2dd2-b777-4d84-890d-0f604db36781/spotted-salamander-closeup_4x3.jpg'
  },
  {
    name: 'Tree Frog',
    type: 'Amphibian',
    living: true, legs: 4,
    colors: ['green', 'blue', 'orange'],
    id: 36,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://c1.staticflickr.com/9/8820/27964054663_38a074335e_b.jpg'
  },
  {
    name: 'Bullfrog',
    type: 'Amphibian',
    living: true, legs: 4,
    colors: ['green'],
    id: 37,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.natgeofe.com/n/d9f60f21-7487-4b78-b023-6741d32ce5f7/1677360.jpg?w=636&h=424'
  },
  {
    name: 'Tomato Frog',
    type: 'Amphibian',
    living: true, legs: 4,
    colors: ['red'],
    id: 38,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'http://www.frogpets.com/wp-content/uploads/2018/05/tomato-frog.jpg'
  },
  {
    name: 'Giant Marine Toad',
    type: 'Amphibian',
    living: true, legs: 4,
    colors: ['brown'],
    id: 39,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://www.backwaterreptiles.com/images/toads/giant-marine-toad-for-sale.jpg'
  },
  {
    name: 'Moss Frog',
    type: 'Amphibian',
    living: true, legs: 4,
    colors: ['green', 'brown'],
    id: 40,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.pinimg.com/originals/d3/3f/68/d33f6853f266807a8836e678778c39fc.jpg'
  },
  {
    name: 'Sturgeon',
    type: 'Fish',
    living: true, legs: 0,
    colors: ['blue', 'white', 'grey'],
    id: 41,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://seahistory.org/wp-content/uploads/Sturgeon.jpg'
  },
  {
    name: 'Rainbow Trout',
    type: 'Fish',
    living: true, legs: 0,
    colors: ['green', 'pink', 'white'],
    id: 42,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Colorful_male_rainbow_trout.jpg'
  },
  {
    name: 'Coho Salmon',
    type: 'Fish',
    living: true, legs: 0,
    colors: ['pink', 'white', 'grey', 'silver'],
    id: 43,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://cdn2.webdamdb.com/1280_1FGHYgBlOmmk.jpg?1507320214'
  },
  {
    name: 'Chinook Salmon',
    type: 'Fish',
    living: true, legs: 0,
    colors: ['white', 'gray', 'orange'],
    id: 44,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Coho_Spawning_on_the_Salmon_River_%2816335492972%29.jpg'
  },
  {
    name: 'Bull Trout',
    type: 'Fish',
    living: true, legs: 0,
    id: 45,
    colors: ['yellow', 'gray'],
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://www.fws.gov/oregonfwo/images/secondary_banner/bull_trout_banner.jpg'
  },
  {
    name: 'African Lungfish',
    type: 'Fish',
    living: true, legs: 0,
    colors: ['silver'],
    id: 46,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'http://www.tropical-fish-keeping.com/wp-content/uploads/2015/10/Gilled-African-lungfish-Protopterus-amphibius.jpg'
  },
  {
    name: 'Pirahna',
    type: 'Fish',
    living: true, legs: 0,
    colors: ['gray', 'pink', 'brown'],
    id: 47,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pirhana06.jpg/1200px-Pirhana06.jpg'
  },
  {
    name: 'Swordfish',
    type: 'Fish',
    living: true, legs: 0,
    colors: ['blue', 'white', 'gray'],
    id: 48,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.natgeofe.com/n/923d8c4e-1598-472c-90a4-01c06d65294d/01-swordfish-phenomena_3x4.jpg'
  },
  {
    name: 'Bluehead Wrasse',
    type: 'Fish',
    living: true, legs: 0,
    colors: ['green', 'yellow', 'white', 'black', 'blue'],
    id: 49,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://rollingharbour.files.wordpress.com/2017/02/bluehead_wrasse_thallasoma_bifasciatum_oregonstate-edu-pinterest.jpg'
  },
  {
    name: 'Seahorse',
    type: 'Fish',
    living: true, legs: 0,
    colors: ['yellow', 'orange', 'pink'],
    id: 50,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://www.shalomadventure.com/images/cache/7909cf33bee0bc9bde4af813a9b9dcce_w180_h180_cp.jpg'
  },
  {
    name: 'Stringray',
    type: 'Fish',
    living: true, legs: 0,
    colors: ['blue', 'gray', 'white'],
    id: 51,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://c.ndtvimg.com/2018-11/g23mgtg_stingray-pixabay_625x300_18_November_18.jpg'
  },
  {
    name: 'Giant Panda',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['black', 'white'],
    id: 52,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://www.chinadiscovery.com/assets/images/travel-guide/dujiangyan/panda-base/giant-panda.jpg'
  },
  {
    name: 'Sloth',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['brown', 'white', 'black'],
    id: 53,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://i.natgeofe.com/k/fbdb91c9-787d-4f5b-8eec-26ac171722b7/5-reasons-sloth_4x3.jpg'
  },
  {
    name: 'Red Panda',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['red', 'white'],
    id: 54,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'http://static1.squarespace.com/static/5547e3e5e4b0d6cf695321c9/t/599f37ecccc5c58f6c392e70/1503606804023/REDPANDA.jpg'
  },
  {
    name: 'Arctic Fox',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['white'],
    id: 55,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Iceland-1979445_%28cropped_3%29.jpg'
  },
  {
    name: 'Zebra',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['black', 'white'],
    id: 56,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://images.unsplash.com/photo-1526095179574-86e545346ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8emVicmF8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    name: 'Lemur',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['brown', 'white', 'black'],
    id: 57,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://cdn.britannica.com/20/154120-050-78DE15C0/lemur.jpg'
  },
  {
    name: 'Snow Leopard',
    type: 'Mammal',
    living: true, legs: 4,
    colors: ['white', 'black'],
    id: 58,
    status: chance.pickone(['alive', 'deceased', 'deceased', 'alive', 'alive']),
    photoUrl: 'https://vignette.wikia.nocookie.net/onepiecefanfiction/images/f/fa/Snow-leopard.jpg/revision/latest?cb=20150421142449'
  }
];


export default animalData;