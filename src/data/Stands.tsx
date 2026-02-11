export type Stand = {
  id: number;
  name: string;
  price: number;
  power: string;
  image: string;
  objectPosition?: string;
};

export const stands: Stand[] = [
  // Part 3: Stardust Crusaders
  {
    id: 1,
    name: "Star Platinum",
    price: 50000000000,
    power: "Stops time for up to 5 seconds; incredible precision and speed.",
    image: "https://static.jojowiki.com/images/thumb/c/ca/latest/20200927002609/Star_Platinum_SC_Infobox_Anime.png/400px-Star_Platinum_SC_Infobox_Anime.png",
  },
  {
    id: 2,
    name: "The World",
    price: 45000000000,
    power: "Stops time for up to 9 seconds; immense strength.",
    image: "https://static.jojowiki.com/images/7/7e/latest/20191015213103/The_World_Infobox_Anime.png",
    objectPosition: "object-center",
  },
  {
    id: 3,
    name: "Hermit Purple",
    price: 3000000,
    power: "Spirit photography and divination; can conduct Hamon.",
    image: "https://static.jojowiki.com/images/0/0a/latest/20210531212424/Hermit_Purple_SC_Infobox_Anime.png",
  },
  {
    id: 4,
    name: "Magician's Red",
    price: 15000000,
    power: "Controls fire and heat; creates life-detecting flames.",
    image: "https://static.jojowiki.com/images/thumb/4/48/latest/20210725104521/Magician%27s_Red_Infobox_Anime.png/400px-Magician%27s_Red_Infobox_Anime.png",
  },
  {
    id: 5,
    name: "Hierophant Green",
    price: 12000000,
    power: "Body unwind into tentacles; fires Emerald Splash.",
    image: "https://static.jojowiki.com/images/thumb/3/3e/latest/20210616200106/Hierophant_Green_Infobox_Anime.png/400px-Hierophant_Green_Infobox_Anime.png",
  },
  {
    id: 6,
    name: "Silver Chariot",
    price: 18000000,
    power: "High-speed swordplay; can shed armor for speed boost.",
    image: "https://static.jojowiki.com/images/thumb/0/09/latest/20210708051149/Silver_Chariot_SC_Infobox_Anime.png/400px-Silver_Chariot_SC_Infobox_Anime.png",
  },

  // Part 4: Diamond is Unbreakable
  {
    id: 7,
    name: "Crazy Diamond",
    price: 40000000000,
    power: "Restores objects or living beings to a previous state.",
    image: "https://static.jojowiki.com/images/thumb/b/b5/latest/20191015215419/Crazy_Diamond_Infobox_Anime.png/400px-Crazy_Diamond_Infobox_Anime.png",
  },
  {
    id: 8,
    name: "Killer Queen",
    price: 38000000000,
    power: "Turns anything it touches into a bomb; Sheer Heart Attack.",
    image: "https://static.jojowiki.com/images/thumb/1/14/latest/20210828053246/Killer_Queen_Infobox_Anime.png/400px-Killer_Queen_Infobox_Anime.png",
  },
  {
    id: 9,
    name: "The Hand",
    price: 35000000000,
    power: "Erases space with its right hand, pulling objects closer.",
    image: "https://static.jojowiki.com/images/thumb/a/ae/latest/20210111150120/The_Hand_Infobox_Anime.png/400px-The_Hand_Infobox_Anime.png",
  },
  {
    id: 10,
    name: "Heaven's Door",
    price: 99999999999,
    power: "Turns people into books to read/write their memories/commands.",
    image: "https://static.jojowiki.com/images/thumb/5/50/latest/20210203193008/Heaven%27s_Door_Infobox_Anime.png/400px-Heaven%27s_Door_Infobox_Anime.png",
    objectPosition: "object-center",
  },

  // Part 5: Golden Wind
  {
    id: 11,
    name: "Gold Experience",
    price: 42000000000,
    power: "Gives life to objects; reflects damage; creates body parts.",
    image: "https://static.jojowiki.com/images/8/81/latest/20210707053105/Gold_Experience_Infobox_Anime.png",
  },
  {
    id: 12,
    name: "Sticky Fingers",
    price: 25000000000,
    power: "Creates zippers on any surface to detach or travel through.",
    image: "https://static.jojowiki.com/images/7/78/latest/20210707052417/Sticky_Fingers_Infobox_Anime.png",
  },
  {
    id: 13,
    name: "King Crimson",
    price: 48000000000,
    power: "Erases time and predicts the future (Epitaph).",
    image: "https://static.jojowiki.com/images/thumb/c/c6/latest/20191015213856/King_Crimson_Infobox_Anime.png/400px-King_Crimson_Infobox_Anime.png",
  },

  // Part 6: Stone Ocean
  {
    id: 14,
    name: "Stone Free",
    price: 15000000,
    power: "Unravels body into string; versatile combat and utility.",
    image: "https://static.jojowiki.com/images/0/03/latest/20220112185153/Stone_Free_Infobox_Anime.png",
  },
  {
    id: 15,
    name: "Whitesnake",
    price: 30000000000,
    power: "Extracts memories and Stands as DISCS; creates illusions.",
    image: "https://static.jojowiki.com/images/thumb/9/91/latest/20220608191233/Whitesnake_Infobox_Anime.png/400px-Whitesnake_Infobox_Anime.png",
  },
  {
    id: 16,
    name: "Diver Down",
    price: 22000000000,
    power: "Stores energy in objects to release later; dives into objects.",
    image: "https://static.jojowiki.com/images/c/c6/latest/20211112120356/Diver_Down_Anime_Infobox.png",
  }
];