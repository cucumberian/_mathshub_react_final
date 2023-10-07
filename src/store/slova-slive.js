import { createSlice } from "@reduxjs/toolkit";

const initialSlovaState = {
  categories: [
    {
      title: "Action (set A)",
      image: "",
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
      image: "",
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
          image: "img/swim.jpg",
          audioSrc: "audio/swim.mp3",
        },
      ],
    },

    {
      title: "Actions (set C)",
      image: "",
      cards: [
        {
          word: "read",
          translation: "читать",
          image: "img/read.jpg",
          audioSrc: "audio/ukrayon025.mp3",
        },
        {
          word: "sleep",
          translation: "спать",
          image: "img/sleep.jpg",
          audioSrc: "audio/ukslave022.mp3",
        },
        {
          word: "write",
          translation: "писать",
          image: "img/write.jpg",
          audioSrc: "audio/ukrider015.mp3",
        },
        {
          word: "eat",
          translation: "есть",
          image: "img/eat.jpg",
          audioSrc: "audio/ukeasil014.mp3",
        },
        {
          word: "study",
          translation: "учиться",
          image: "img/study.jpg",
          audioSrc: "audio/ukstubb018.mp3",
        },
        {
          word: "drive",
          translation: "водить машину",
          image: "img/drive.jpg",
          audioSrc: "audio/ukdress028.mp3",
        },
        {
          word: "travel",
          translation: "путешествовать",
          image: "img/travel.jpg",
          audioSrc: "audio/uktrap_019.mp3",
        },
        {
          word: "sing",
          translation: "петь",
          image: "img/sing.jpg",
          audioSrc: "audio/uksineq007.mp3",
        },
        {
          word: "dance",
          translation: "танцевать",
          image: "img/dance.jpg",
          audioSrc: "audio/ukdamne011.mp3",
        },
        {
          word: "work",
          translation: "работать",
          image: "img/work.jpg",
          audioSrc: "audio/ukwordp005.mp3",
        },
        {
          word: "play",
          translation: "играть",
          image: "img/play.jpg",
          audioSrc: "audio/ukplate018.mp3",
        },
        {
          word: "exercise",
          translation: "заниматься упражнениями",
          image: "img/exercise.jpg",
          audioSrc: "audio/ukexcre029.mp3",
        },
      ],
    },

    {
      title: "Animal (set A)",
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
      cards: [
        {
          word: "sad",
          translation: "грустный",
          image: "img/sad.jpg",
          audioSrc: "audio/sad.mp3",
        },
        {
          word: "angry",
          translation: "сердитый",
          image: "img/angry.jpg",
          audioSrc: "audio/angry.mp3",
        },
        {
          word: "happy",
          translation: "счастливый",
          image: "img/happy.jpg",
          audioSrc: "audio/happy.mp3",
        },
        {
          word: "tired",
          translation: "уставший",
          image: "img/tired.jpg",
          audioSrc: "audio/tired.mp3",
        },
        {
          word: "surprised",
          translation: "удивлённый",
          image: "img/surprised.jpg",
          audioSrc: "audio/surprised.mp3",
        },
        {
          word: "scared",
          translation: "испуганный",
          image: "img/scared.jpg",
          audioSrc: "audio/scared.mp3",
        },
        {
          word: "smile",
          translation: "улыбка",
          image: "img/smile.jpg",
          audioSrc: "audio/smile.mp3",
        },
        {
          word: "laugh",
          translation: "смех",
          image: "img/laugh.jpg",
          audioSrc: "audio/laugh.mp3",
        },

        {
          word: "calm",
          translation: "спокойный",
          image: "img/calm.jpg",
          audioSrc: "audio/ukcalip014.mp3",
        },
        {
          word: "excited",
          translation: "возбужденный",
          image: "img/excited.jpg",
          audioSrc: "audio/ukexces012.mp3",
        },
        {
          word: "curious",
          translation: "любопытный",
          image: "img/curious.jpg",
          audioSrc: "audio/ukcurio002.mp3",
        },
        {
          word: "relaxed",
          translation: "расслабленный",
          image: "img/relaxed.jpg",
          audioSrc: "audio/ukrejec024.mp3",
        },
        {
          word: "confident",
          translation: "уверенный",
          image: "img/confident.jpg",
          audioSrc: "audio/ukcondu025.mp3",
        },
        {
          word: "shy",
          translation: "застенчивый",
          image: "img/shy.jpg",
          audioSrc: "audio/ukshun_013.mp3",
        },
        {
          word: "proud",
          translation: "гордый",
          image: "img/proud.jpg",
          audioSrc: "audio/ukprote028.mp3",
        },
        {
          word: "anxious",
          translation: "тревожный",
          image: "img/anxious.jpg",
          audioSrc: "audio/ukantis012.mp3",
        },
        {
          word: "amazed",
          translation: "пораженный",
          image: "img/amazed.jpg",
          audioSrc: "audio/ukamalg013.mp3",
        },
        {
          word: "grateful",
          translation: "благодарный",
          image: "img/grateful.jpg",
          audioSrc: "audio/ukgrate001.mp3",
        },
        {
          word: "lonely",
          translation: "одинокий",
          image: "img/lonely.jpg",
          audioSrc: "audio/uklonel001.mp3",
        },
        {
          word: "energetic",
          translation: "энергичный",
          image: "img/energetic.jpg",
          audioSrc: "audio/ukendwa005.mp3",
        },
      ],
    },

    {
      title: "Adjective",
      image: "",
      cards: [
        {
          word: "tall",
          translation: "высокий",
          image: "img/tall.jpg",
          audioSrc: "audio/uktajik024.mp3",
        },
        {
          word: "short",
          translation: "низкий",
          image: "img/short.jpg",
          audioSrc: "audio/ukshorn002.mp3",
        },
        {
          word: "strong",
          translation: "сильный",
          image: "img/strong.jpg",
          audioSrc: "audio/ukstrol002.mp3",
        },
        {
          word: "weak",
          translation: "слабый",
          image: "img/weak.jpg",
          audioSrc: "audio/ukwaxwo015.mp3",
        },
        {
          word: "smart",
          translation: "умный",
          image: "img/smart.jpg",
          audioSrc: "audio/ukslutt023.mp3",
        },
        {
          word: "clumsy",
          translation: "неуклюжий",
          image: "img/clumsy.jpg",
          audioSrc: "audio/ukclosu026.mp3",
        },
        {
          word: "brave",
          translation: "смелый",
          image: "img/brave.jpg",
          audioSrc: "audio/ukbrain026.mp3",
        },
        {
          word: "gentle",
          translation: "нежный",
          image: "img/gentle.jpg",
          audioSrc: "audio/ukgenit014.mp3",
        },
        {
          word: "patient",
          translation: "терпеливый",
          image: "img/patient.jpg",
          audioSrc: "audio/ukpatie002.mp3",
        },
        {
          word: "creative",
          translation: "творческий",
          image: "img/creative.jpg",
          audioSrc: "audio/ukcream007.mp3",
        },
        {
          word: "logical",
          translation: "логичный",
          image: "img/logical.jpg",
          audioSrc: "audio/uklogar008.mp3",
        },
        {
          word: "organized",
          translation: "организованный",
          image: "img/organized.jpg",
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
