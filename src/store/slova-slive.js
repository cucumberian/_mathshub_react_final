import { createSlice } from "@reduxjs/toolkit";

const initialSlovaState = {
  categories: [
    {
      title: "Action (set A)",
      image: "img/00046-707139126.webp",
      cards: [
        {
          word: "cry",
          translation: "плакать",
          image: "img/cry.webp",
          audioSrc: "audio/cry.mp3",
        },
        {
          word: "dance",
          translation: "танцевать",
          image: "img/dance.webp",
          audioSrc: "audio/dance.mp3",
        },
        {
          word: "dive",
          translation: "нырять",
          image: "img/dive.webp",
          audioSrc: "audio/dive.mp3",
        },
        {
          word: "draw",
          translation: "рисовать",
          image: "img/draw.webp",
          audioSrc: "audio/draw.mp3",
        },
        {
          word: "fish",
          translation: "ловить рыбу",
          image: "img/fish.webp",
          audioSrc: "audio/fish.mp3",
        },
        {
          word: "fly",
          translation: "летать",
          image: "img/fly.webp",
          audioSrc: "audio/fly.mp3",
        },
        {
          word: "hug",
          translation: "обнимать",
          image: "img/hug.webp",
          audioSrc: "audio/hug.mp3",
        },
        {
          word: "jump",
          translation: "прыгать",
          image: "img/jump.webp",
          audioSrc: "audio/jump.mp3",
        },
      ],
    },
    {
      title: "Action (set B)",
      image: "img/00054-2449900869.webp",
      cards: [
        {
          word: "open",
          translation: "открывать",
          image: "img/open.webp",
          audioSrc: "audio/open.mp3",
        },
        {
          word: "play",
          translation: "играть",
          image: "img/play.webp",
          audioSrc: "audio/play.mp3",
        },
        {
          word: "point",
          translation: "указывать",
          image: "img/point.webp",
          audioSrc: "audio/point.mp3",
        },
        {
          word: "ride",
          translation: "ездить",
          image: "img/ride.webp",
          audioSrc: "audio/ride.mp3",
        },
        {
          word: "run",
          translation: "бегать",
          image: "img/run.webp",
          audioSrc: "audio/run.mp3",
        },
        {
          word: "sing",
          translation: "петь",
          image: "img/sing.webp",
          audioSrc: "audio/sing.mp3",
        },
        {
          word: "skip",
          translation: "пропускать, прыгать",
          image: "img/skip.webp",
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
      image: "img/00069-2502298634.webp  ",
      cards: [
        {
          word: "read",
          translation: "читать",
          image: "img/00181-804093893.webp",
          audioSrc: "audio/ukrayon025.mp3",
        },
        {
          word: "sleep",
          translation: "спать",
          image: "img/00255-889125201.webp",
          audioSrc: "audio/ukslave022.mp3",
        },
        {
          word: "write",
          translation: "писать",
          image: "img/00286-1265096125.webp",
          audioSrc: "audio/ukrider015.mp3",
        },
        {
          word: "eat",
          translation: "есть",
          image: "img/00300-3770816973.webp",
          audioSrc: "audio/ukeasil014.mp3",
        },
        {
          word: "study",
          translation: "учиться",
          image: "img/00315-3708411375.webp",
          audioSrc: "audio/ukstubb018.mp3",
        },
        {
          word: "drive",
          translation: "водить машину",
          image: "img/00185-1759953516.webp",
          audioSrc: "audio/ukdress028.mp3",
        },
        {
          word: "travel",
          translation: "путешествовать",
          image: "img/00213-3268433714.webp",
          audioSrc: "audio/uktrap_019.mp3",
        },
        {
          word: "sing",
          translation: "петь",
          image: "img/00319-357068357.webp",
          audioSrc: "audio/uksineq007.mp3",
        },
        {
          word: "dance",
          translation: "танцевать",
          image: "img/00329-56223748.webp",
          audioSrc: "audio/ukdamne011.mp3",
        },
        {
          word: "work",
          translation: "работать",
          image: "img/00060-3188653949.webp",
          audioSrc: "audio/ukwordp005.mp3",
        },
        {
          word: "play",
          translation: "играть",
          image: "img/00365-931740697.webp",
          audioSrc: "audio/ukplate018.mp3",
        },
        {
          word: "exercise",
          translation: "заниматься упражнениями",
          image: "img/00386-2787156678.webp",
          audioSrc: "audio/ukexcre029.mp3",
        },
      ],
    },

    {
      title: "Animal (set A)",
      image: "img/00084-2224485636.webp",
      cards: [
        {
          word: "cat",
          translation: "кот",
          image: "img/cat.webp",
          audioSrc: "audio/cat.mp3",
        },
        {
          word: "chick",
          translation: "цыплёнок",
          image: "img/chick.webp",
          audioSrc: "audio/chick.mp3",
        },
        {
          word: "chicken",
          translation: "курица",
          image: "img/chicken.webp",
          audioSrc: "audio/chicken.mp3",
        },
        {
          word: "dog",
          translation: "собака",
          image: "img/dog.webp",
          audioSrc: "audio/dog.mp3",
        },
        {
          word: "horse",
          translation: "лошадь",
          image: "img/horse.webp",
          audioSrc: "audio/horse.mp3",
        },
        {
          word: "pig",
          translation: "свинья",
          image: "img/pig.webp",
          audioSrc: "audio/pig.mp3",
        },
        {
          word: "rabbit",
          translation: "кролик",
          image: "img/rabbit.webp",
          audioSrc: "audio/rabbit.mp3",
        },
        {
          word: "sheep",
          translation: "овца",
          image: "img/sheep.webp",
          audioSrc: "audio/sheep.mp3",
        },
      ],
    },

    {
      title: "Animal (set B)",
      image: "img/00098-3745193348.webp",
      cards: [
        {
          word: "bird",
          translation: "птица",
          image: "img/bird.webp",
          audioSrc: "audio/bird.mp3",
        },
        {
          word: "fish",
          translation: "рыба",
          image: "img/fish1.webp",
          audioSrc: "audio/fish.mp3",
        },
        {
          word: "frog",
          translation: "жаба",
          image: "img/frog.webp",
          audioSrc: "audio/frog.mp3",
        },
        {
          word: "giraffe",
          translation: "жирафа",
          image: "img/giraffe.webp",
          audioSrc: "audio/giraffe.mp3",
        },
        {
          word: "lion",
          translation: "лев",
          image: "img/lion.webp",
          audioSrc: "audio/lion.mp3",
        },
        {
          word: "mouse",
          translation: "мышь",
          image: "img/mouse.webp",
          audioSrc: "audio/mouse.mp3",
        },
        {
          word: "turtle",
          translation: "черепаха",
          image: "img/turtle.webp",
          audioSrc: "audio/turtle.mp3",
        },
        {
          word: "dolphin",
          translation: "дельфин",
          image: "img/dolphin.webp",
          audioSrc: "audio/dolphin.mp3",
        },
      ],
    },

    {
      title: "Clothes",
      image: "img/00116-537613199.webp",
      cards: [
        {
          word: "skirt",
          translation: "юбка",
          image: "img/skirt.webp",
          audioSrc: "audio/skirt.mp3",
        },
        {
          word: "pants",
          translation: "брюки",
          image: "img/pants.webp",
          audioSrc: "audio/pants.mp3",
        },
        {
          word: "blouse",
          translation: "блузка",
          image: "img/blouse.webp",
          audioSrc: "audio/blouse.mp3",
        },
        {
          word: "dress",
          translation: "платье",
          image: "img/dress.webp",
          audioSrc: "audio/dress.mp3",
        },
        {
          word: "boot",
          translation: "ботинок",
          image: "img/boot.webp",
          audioSrc: "audio/boot.mp3",
        },
        {
          word: "shirt",
          translation: "рубашка",
          image: "img/shirt.webp",
          audioSrc: "audio/shirt.mp3",
        },
        {
          word: "coat",
          translation: "пальто",
          image: "img/coat.webp",
          audioSrc: "audio/coat.mp3",
        },
        {
          word: "shoe",
          translation: "туфли",
          image: "img/shoe.webp",
          audioSrc: "audio/shoe.mp3",
        },
      ],
    },

    {
      title: "Emotions",
      image: "img/00127-3055195027.webp",
      cards: [
        {
          word: "sad",
          translation: "грустный",
          image: "img/00390-1240477505.webp",
          audioSrc: "audio/sad.mp3",
        },
        {
          word: "angry",
          translation: "сердитый",
          image: "img/00403-1224596012.webp",
          audioSrc: "audio/angry.mp3",
        },
        {
          word: "happy",
          translation: "счастливый",
          image: "img/00427-1646992739.webp",
          audioSrc: "audio/happy.mp3",
        },
        {
          word: "tired",
          translation: "уставший",
          image: "img/00456-93771578.webp",
          audioSrc: "audio/tired.mp3",
        },
        {
          word: "surprised",
          translation: "удивлённый",
          image: "img/_f89fdd8a-f61e-4119-9e82-074d1ace3084.webp",
          audioSrc: "audio/uksurge018.mp3",
        },
        {
          word: "scared",
          translation: "испуганный",
          image: "img/00484-4079143139.webp",
          audioSrc: "audio/scared.mp3",
        },
        {
          word: "smile",
          translation: "улыбка",
          image: "img/00537-3984049090.webp",
          audioSrc: "audio/smile.mp3",
        },
        {
          word: "laugh",
          translation: "смех",
          image: "img/00554-1130367050.webp",
          audioSrc: "audio/laugh.mp3",
        },

        {
          word: "calm",
          translation: "спокойный",
          image: "img/00567-3391438697.webp",
          audioSrc: "audio/ukcalip014.mp3",
        },
        {
          word: "excited",
          translation: "возбужденный",
          image: "img/00574-1962468514.webp",
          audioSrc: "audio/ukexces012.mp3",
        },
        {
          word: "curious",
          translation: "любопытный",
          image: "img/00613-4032005434.webp",
          audioSrc: "audio/ukcurio002.mp3",
        },
        {
          word: "relaxed",
          translation: "расслабленный",
          image: "img/00625-959878272.webp",
          audioSrc: "audio/ukrejec024.mp3",
        },
        {
          word: "confident",
          translation: "уверенный",
          image: "img/00655-2837900978.webp",
          audioSrc: "audio/ukcondu025.mp3",
        },
        {
          word: "shy",
          translation: "застенчивый",
          image: "img/00657-3582545556.webp",
          audioSrc: "audio/ukshun_013.mp3",
        },
        {
          word: "proud",
          translation: "гордый",
          image: "img/00695-1421750613.webp",
          audioSrc: "audio/ukprote028.mp3",
        },
        {
          word: "anxious",
          translation: "тревожный",
          image: "img/01092-2255664148.webp",
          audioSrc: "audio/ukantis012.mp3",
        },
        {
          word: "amazed",
          translation: "пораженный",
          image: "img/00772-1823732867.webp",
          audioSrc: "audio/ukamalg013.mp3",
        },
        {
          word: "grateful",
          translation: "благодарный",
          image: "img/00748-1304901078.webp",
          audioSrc: "audio/ukgrate001.mp3",
        },
        {
          word: "lonely",
          translation: "одинокий",
          image: "img/00721-1035906339.webp",
          audioSrc: "audio/uklonel001.mp3",
        },
        {
          word: "energetic",
          translation: "энергичный",
          image: "img/00703-704382650.webp",
          audioSrc: "audio/ukendwa005.mp3",
        },
      ],
    },

    {
      title: "Adjective",
      image: "img/00155-1776507609.webp",
      cards: [
        {
          word: "tall",
          translation: "высокий",
          image: "img/00811-2866432858.webp",
          audioSrc: "audio/uktajik024.mp3",
        },
        {
          word: "short",
          translation: "коротышка",
          image: "img/00834-3726142669.webp",
          audioSrc: "audio/ukshorn002.mp3",
        },
        {
          word: "strong",
          translation: "сильный",
          image: "img/00840-2796521070.webp",
          audioSrc: "audio/ukstrol002.mp3",
        },
        {
          word: "weak",
          translation: "слабый",
          image: "img/00868-188217458.webp",
          audioSrc: "audio/ukwaxwo015.mp3",
        },
        {
          word: "smart",
          translation: "умный",
          image: "img/00925-1004128688.webp",
          audioSrc: "audio/ukslutt023.mp3",
        },
        {
          word: "clumsy",
          translation: "неуклюжий",
          image: "img/00935-4192403559.webp",
          audioSrc: "audio/ukclosu026.mp3",
        },
        {
          word: "brave",
          translation: "смелый",
          image: "img/00947-1072005258.webp",
          audioSrc: "audio/ukbrain026.mp3",
        },
        {
          word: "gentle",
          translation: "нежный",
          image: "img/00953-1812903175.webp",
          audioSrc: "audio/ukgenit014.mp3",
        },
        {
          word: "patient",
          translation: "терпеливый",
          image: "img/00966-606550274.webp",
          audioSrc: "audio/ukpatie002.mp3",
        },
        {
          word: "creative",
          translation: "творческий",
          image: "img/00986-3872190970.webp",
          audioSrc: "audio/ukcream007.mp3",
        },
        {
          word: "logical",
          translation: "логичный",
          image: "img/01017-1908802467.webp",
          audioSrc: "audio/uklogar008.mp3",
        },
        {
          word: "organized",
          translation: "организованный",
          image: "img/01027-486553869.webp",
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
