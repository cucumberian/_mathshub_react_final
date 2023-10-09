import { createSlice } from "@reduxjs/toolkit";

const initialSlovaState = {
  categories: [
    {
      title: "Action (set A)",
      image: "img/00046-707139126.png",
      cards: [
        {
          word: "cry",
          translation: "плакать",
          image: "img/cry.jpg",
          audioSrc: "audio/cry.mp3",
        },
        {
          word: "dance",
          translation: "танцевать",
          image: "img/dance.jpg",
          audioSrc: "audio/dance.mp3",
        },
        {
          word: "dive",
          translation: "нырять",
          image: "img/dive.jpg",
          audioSrc: "audio/dive.mp3",
        },
        {
          word: "draw",
          translation: "рисовать",
          image: "img/draw.jpg",
          audioSrc: "audio/draw.mp3",
        },
        {
          word: "fish",
          translation: "ловить рыбу",
          image: "img/fish.jpg",
          audioSrc: "audio/fish.mp3",
        },
        {
          word: "fly",
          translation: "летать",
          image: "img/fly.jpg",
          audioSrc: "audio/fly.mp3",
        },
        {
          word: "hug",
          translation: "обнимать",
          image: "img/hug.jpg",
          audioSrc: "audio/hug.mp3",
        },
        {
          word: "jump",
          translation: "прыгать",
          image: "img/jump.jpg",
          audioSrc: "audio/jump.mp3",
        },
      ],
    },
    {
      title: "Action (set B)",
      image: "img/00054-2449900869.png",
      cards: [
        {
          word: "open",
          translation: "открывать",
          image: "img/open.jpg",
          audioSrc: "audio/open.mp3",
        },
        {
          word: "play",
          translation: "играть",
          image: "img/play.jpg",
          audioSrc: "audio/play.mp3",
        },
        {
          word: "point",
          translation: "указывать",
          image: "img/point.jpg",
          audioSrc: "audio/point.mp3",
        },
        {
          word: "ride",
          translation: "ездить",
          image: "img/ride.jpg",
          audioSrc: "audio/ride.mp3",
        },
        {
          word: "run",
          translation: "бегать",
          image: "img/run.jpg",
          audioSrc: "audio/run.mp3",
        },
        {
          word: "sing",
          translation: "петь",
          image: "img/sing.jpg",
          audioSrc: "audio/sing.mp3",
        },
        {
          word: "skip",
          translation: "пропускать, прыгать",
          image: "img/skip.jpg",
          audioSrc: "audio/skip.mp3",
        },
        {
          word: "swim",
          translation: "плавать",
          image: "img/3301.webp",
          audioSrc: "audio/swim.mp3",
        },
      ],
    },

    {
      title: "Actions (set C)",
      image: "img/00069-2502298634.png  ",
      cards: [
        {
          word: "read",
          translation: "читать",
          image: "img/00181-804093893.png",
          audioSrc: "audio/ukrayon025.mp3",
        },
        {
          word: "sleep",
          translation: "спать",
          image: "img/00255-889125201.png",
          audioSrc: "audio/ukslave022.mp3",
        },
        {
          word: "write",
          translation: "писать",
          image: "img/00286-1265096125.png",
          audioSrc: "audio/ukrider015.mp3",
        },
        {
          word: "eat",
          translation: "есть",
          image: "img/00300-3770816973.png",
          audioSrc: "audio/ukeasil014.mp3",
        },
        {
          word: "study",
          translation: "учиться",
          image: "img/00315-3708411375.png",
          audioSrc: "audio/ukstubb018.mp3",
        },
        {
          word: "drive",
          translation: "водить машину",
          image: "img/00185-1759953516.png",
          audioSrc: "audio/ukdress028.mp3",
        },
        {
          word: "travel",
          translation: "путешествовать",
          image: "img/00213-3268433714.png",
          audioSrc: "audio/uktrap_019.mp3",
        },
        {
          word: "sing",
          translation: "петь",
          image: "img/00319-357068357.png",
          audioSrc: "audio/uksineq007.mp3",
        },
        {
          word: "dance",
          translation: "танцевать",
          image: "img/00329-56223748.png",
          audioSrc: "audio/ukdamne011.mp3",
        },
        {
          word: "work",
          translation: "работать",
          image: "img/00060-3188653949.png",
          audioSrc: "audio/ukwordp005.mp3",
        },
        {
          word: "play",
          translation: "играть",
          image: "img/00365-931740697.png",
          audioSrc: "audio/ukplate018.mp3",
        },
        {
          word: "exercise",
          translation: "заниматься упражнениями",
          image: "img/00386-2787156678.png",
          audioSrc: "audio/ukexcre029.mp3",
        },
      ],
    },

    {
      title: "Animal (set A)",
      image: "img/00084-2224485636.png",
      cards: [
        {
          word: "cat",
          translation: "кот",
          image: "img/cat.jpg",
          audioSrc: "audio/cat.mp3",
        },
        {
          word: "chick",
          translation: "цыплёнок",
          image: "img/chick.jpg",
          audioSrc: "audio/chick.mp3",
        },
        {
          word: "chicken",
          translation: "курица",
          image: "img/chicken.jpg",
          audioSrc: "audio/chicken.mp3",
        },
        {
          word: "dog",
          translation: "собака",
          image: "img/dog.jpg",
          audioSrc: "audio/dog.mp3",
        },
        {
          word: "horse",
          translation: "лошадь",
          image: "img/horse.jpg",
          audioSrc: "audio/horse.mp3",
        },
        {
          word: "pig",
          translation: "свинья",
          image: "img/pig.jpg",
          audioSrc: "audio/pig.mp3",
        },
        {
          word: "rabbit",
          translation: "кролик",
          image: "img/rabbit.jpg",
          audioSrc: "audio/rabbit.mp3",
        },
        {
          word: "sheep",
          translation: "овца",
          image: "img/sheep.jpg",
          audioSrc: "audio/sheep.mp3",
        },
      ],
    },

    {
      title: "Animal (set B)",
      image: "img/00098-3745193348.png",
      cards: [
        {
          word: "bird",
          translation: "птица",
          image: "img/bird.jpg",
          audioSrc: "audio/bird.mp3",
        },
        {
          word: "fish",
          translation: "рыба",
          image: "img/fish1.jpg",
          audioSrc: "audio/fish.mp3",
        },
        {
          word: "frog",
          translation: "жаба",
          image: "img/frog.jpg",
          audioSrc: "audio/frog.mp3",
        },
        {
          word: "giraffe",
          translation: "жирафа",
          image: "img/giraffe.jpg",
          audioSrc: "audio/giraffe.mp3",
        },
        {
          word: "lion",
          translation: "лев",
          image: "img/lion.jpg",
          audioSrc: "audio/lion.mp3",
        },
        {
          word: "mouse",
          translation: "мышь",
          image: "img/mouse.jpg",
          audioSrc: "audio/mouse.mp3",
        },
        {
          word: "turtle",
          translation: "черепаха",
          image: "img/turtle.jpg",
          audioSrc: "audio/turtle.mp3",
        },
        {
          word: "dolphin",
          translation: "дельфин",
          image: "img/dolphin.jpg",
          audioSrc: "audio/dolphin.mp3",
        },
      ],
    },

    {
      title: "Clothes",
      image: "img/00116-537613199.png",
      cards: [
        {
          word: "skirt",
          translation: "юбка",
          image: "img/skirt.jpg",
          audioSrc: "audio/skirt.mp3",
        },
        {
          word: "pants",
          translation: "брюки",
          image: "img/pants.jpg",
          audioSrc: "audio/pants.mp3",
        },
        {
          word: "blouse",
          translation: "блузка",
          image: "img/blouse.jpg",
          audioSrc: "audio/blouse.mp3",
        },
        {
          word: "dress",
          translation: "платье",
          image: "img/dress.jpg",
          audioSrc: "audio/dress.mp3",
        },
        {
          word: "boot",
          translation: "ботинок",
          image: "img/boot.jpg",
          audioSrc: "audio/boot.mp3",
        },
        {
          word: "shirt",
          translation: "рубашка",
          image: "img/shirt.jpg",
          audioSrc: "audio/shirt.mp3",
        },
        {
          word: "coat",
          translation: "пальто",
          image: "img/coat.jpg",
          audioSrc: "audio/coat.mp3",
        },
        {
          word: "shoe",
          translation: "туфли",
          image: "img/shoe.jpg",
          audioSrc: "audio/shoe.mp3",
        },
      ],
    },

    {
      title: "Emotions",
      image: "img/00127-3055195027.png",
      cards: [
        {
          word: "sad",
          translation: "грустный",
          image: "img/00390-1240477505.png",
          audioSrc: "audio/sad.mp3",
        },
        {
          word: "angry",
          translation: "сердитый",
          image: "img/00403-1224596012.png",
          audioSrc: "audio/angry.mp3",
        },
        {
          word: "happy",
          translation: "счастливый",
          image: "img/00427-1646992739.png",
          audioSrc: "audio/happy.mp3",
        },
        {
          word: "tired",
          translation: "уставший",
          image: "img/00456-93771578.png",
          audioSrc: "audio/tired.mp3",
        },
        {
          word: "surprised",
          translation: "удивлённый",
          image: "img/_f89fdd8a-f61e-4119-9e82-074d1ace3084.jpeg",
          audioSrc: "audio/uksurge018.mp3",
        },
        {
          word: "scared",
          translation: "испуганный",
          image: "img/00484-4079143139.png",
          audioSrc: "audio/scared.mp3",
        },
        {
          word: "smile",
          translation: "улыбка",
          image: "img/00537-3984049090.png",
          audioSrc: "audio/smile.mp3",
        },
        {
          word: "laugh",
          translation: "смех",
          image: "img/00554-1130367050.png",
          audioSrc: "audio/laugh.mp3",
        },

        {
          word: "calm",
          translation: "спокойный",
          image: "img/00567-3391438697.png",
          audioSrc: "audio/ukcalip014.mp3",
        },
        {
          word: "excited",
          translation: "возбужденный",
          image: "img/00574-1962468514.png",
          audioSrc: "audio/ukexces012.mp3",
        },
        {
          word: "curious",
          translation: "любопытный",
          image: "img/00613-4032005434.png",
          audioSrc: "audio/ukcurio002.mp3",
        },
        {
          word: "relaxed",
          translation: "расслабленный",
          image: "img/00625-959878272.png",
          audioSrc: "audio/ukrejec024.mp3",
        },
        {
          word: "confident",
          translation: "уверенный",
          image: "img/00655-2837900978.png",
          audioSrc: "audio/ukcondu025.mp3",
        },
        {
          word: "shy",
          translation: "застенчивый",
          image: "img/00657-3582545556.png",
          audioSrc: "audio/ukshun_013.mp3",
        },
        {
          word: "proud",
          translation: "гордый",
          image: "img/00695-1421750613.png",
          audioSrc: "audio/ukprote028.mp3",
        },
        {
          word: "anxious",
          translation: "тревожный",
          image: "img/01092-2255664148.png",
          audioSrc: "audio/ukantis012.mp3",
        },
        {
          word: "amazed",
          translation: "пораженный",
          image: "img/00772-1823732867.png",
          audioSrc: "audio/ukamalg013.mp3",
        },
        {
          word: "grateful",
          translation: "благодарный",
          image: "img/00748-1304901078.png",
          audioSrc: "audio/ukgrate001.mp3",
        },
        {
          word: "lonely",
          translation: "одинокий",
          image: "img/00721-1035906339.png",
          audioSrc: "audio/uklonel001.mp3",
        },
        {
          word: "energetic",
          translation: "энергичный",
          image: "img/00703-704382650.png",
          audioSrc: "audio/ukendwa005.mp3",
        },
      ],
    },

    {
      title: "Adjective",
      image: "img/00155-1776507609.png",
      cards: [
        {
          word: "tall",
          translation: "высокий",
          image: "img/00811-2866432858.png",
          audioSrc: "audio/uktajik024.mp3",
        },
        {
          word: "short",
          translation: "коротышка",
          image: "img/00834-3726142669.png",
          audioSrc: "audio/ukshorn002.mp3",
        },
        {
          word: "strong",
          translation: "сильный",
          image: "img/00840-2796521070.png",
          audioSrc: "audio/ukstrol002.mp3",
        },
        {
          word: "weak",
          translation: "слабый",
          image: "img/00868-188217458.png",
          audioSrc: "audio/ukwaxwo015.mp3",
        },
        {
          word: "smart",
          translation: "умный",
          image: "img/00925-1004128688.png",
          audioSrc: "audio/ukslutt023.mp3",
        },
        {
          word: "clumsy",
          translation: "неуклюжий",
          image: "img/00935-4192403559.png",
          audioSrc: "audio/ukclosu026.mp3",
        },
        {
          word: "brave",
          translation: "смелый",
          image: "img/00947-1072005258.png",
          audioSrc: "audio/ukbrain026.mp3",
        },
        {
          word: "gentle",
          translation: "нежный",
          image: "img/00953-1812903175.png",
          audioSrc: "audio/ukgenit014.mp3",
        },
        {
          word: "patient",
          translation: "терпеливый",
          image: "img/00966-606550274.png",
          audioSrc: "audio/ukpatie002.mp3",
        },
        {
          word: "creative",
          translation: "творческий",
          image: "img/00986-3872190970.png",
          audioSrc: "audio/ukcream007.mp3",
        },
        {
          word: "logical",
          translation: "логичный",
          image: "img/01017-1908802467.png",
          audioSrc: "audio/uklogar008.mp3",
        },
        {
          word: "organized",
          translation: "организованный",
          image: "img/01027-486553869.png",
          audioSrc: "audio/ukordin012.mp3",
        },
      ],
    },
  ],
};

const sliceSlovaConfig = {
  name: "slova",
  initialState: initialSlovaState,
  reducers: {},
};

const slovaSlice = createSlice(sliceSlovaConfig);

export default slovaSlice;
