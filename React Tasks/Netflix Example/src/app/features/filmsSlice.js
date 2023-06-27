import { createSlice } from "@reduxjs/toolkit";

const slideInitialValue = [
  {
    id: 1,
    filmName: "The Mother",
    description:
      "Taking a break from being the queen of the current romantic comedy revival, Jennifer Lopez is a no-nonsense arms dealer turned FBI informant in this action-packed thriller about the lengths to which a mother will go to protect her child. After leaving the military, Lopez's character gets herself involved with some Very Bad Men, and when they find out she's pregnant, she’s forced to go into hiding and give up her daughter to foster care to protect both of their identities. But 12 years later, when some of these aforementioned Very Bad Men show up and kidnap her daughter, Lopez will stop at nothing to bring the girl back to safety. The Mother, directed by Niki Caro, is a female version of Taken that doesn't skimp on the brutal fight scenes. This mom is single-minded, skilled, and ruthless.",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-1.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 2,
    filmName: "Pamela, A Love Story",
    description:
      "Though Hulu's Pam and Tommy was a buzzy hit that brought Pamela Anderson back into the modern cultural conversation, it crucially did not have her permission(opens in a new tab) to dramatize her story. Seems like that would have been an important detail for a show about how a woman's privacy was taken forcibly from her, no? In Netflix's Pamela, A Love Story, Anderson is finally in control of her own narrative. With her own personal videos and diaries, she tells her story: the stolen sex tape with then-husband Tommy Lee, consequent legal battles, and the unforgivable way she was treated by opposing counsel, the media, and the country. It's a brutal and poignant watch well worth your time and attention.",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-2.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 3,
    filmName: "Chupa",
    description:
      "Do you like your mythical beasts better after they undergo a rebrand? Then Jonás Cuarón's Chupa is the Spielberg-inspired fantasy adventure for you! After the death of his father, 13-year-old Alex (Evan Whitten) travels to Mexico to meet his extended family for the first time and comes across a chupacabra! Except instead of the goat-blood-sucking monster you're picturing, this chupacabra is still a cub, and it is almost too cute to bear. It's like a sweet baby leopard with floppy ears and wings. Alex must now protect the little creature from the government scientists who would do it harm, while getting in touch with his Mexican heritage along the way. Chupa is a lovely, warm family flick that will melt the hardest of hearts. ",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-3.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 4,
    filmName: "The Last Kingdom: Seven Kings Must Die",
    description:
      "Years after the events of the hit series The Last Kingdom, Seven Kings Must Die finds 10th century England in state of relative peace. The Danes now rule Northumbria, the Saxon King Edward reigns over Mercia and Wessex, and the warrior Uhtred (Alexander Dreymon) has finally regained his birthright, the land of Bebbanburg, a bridge between the Saxon and Viking cultures. But when Edward falls ill without a clear successor, foreign parties start gearing up to fight. Will Uhtred pick up his sword once more in the name of peace?   The best part of The Last Kingdom series was Uhtred's constant warring loyalties between his Saxon heritage and his Viking upbringing. This film is a fantastic cap on an already-beloved show. Whether you're into meaty historical fiction, swashbuckling sword fights, or a swoon-worthy leading man, there's something for everyone in this scenic action-adventure flick.",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-4.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 5,
    filmName: "Still Time",
    description:
      "It's Dante's (Edoardo Leo) 40th birthday, and his need to always be working and productive gets in the way of his celebration. The next day, he wakes up to find it's suddenly his 41st birthday, and he has lost a whole year. If Dante doesn't learn to slow down and enjoy his life, it might just pass him by completely. Still Time is an Italian time-traveling dramedy that remains surprisingly simple and grounded despite its fantastical premise. The performances are charismatic and understated, the tone is cheery and heartfelt, and the story will have you hooked from the first scene. A total charmer!",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-5.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 6,
    filmName: "John Mulaney: Baby J",
    description:
      "John Mulaney is 'Kid Gorgeous' no more. He's grown up. He's made some very public mistakes, and he faces all of it and then some in his new stand-up special, Baby J. Hilarious and merciless, with a withering takedown of his former persona, Mulaney tells a new story here — the story of his addiction. But don’t worry! He's still John Mulaney, so it's easily one of the funniest stand-up specials from the last decade. Baby J has a little more weight than his previous specials, a little more humanity and humility. It's some of his best and most hopeful work yet.",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-6.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 7,
    filmName: "Kill Boksoon",
    description:
      "Gil Bok-Soon (Jeon Do-yeon) is a single mother who often finds herself at odds with her teenage daughter. She's also a highly skilled and successful assassin. Kill Boksoon is a fantastic action film that sees its main character head straight from a brutal killing to the grocery store so she can get dinner on the table. It's one hell of a hook that sucks you in immediately. The fight scenes are hypnotic and the cinematography ambitious and exciting. It's a gripping thriller that makes plenty of space for the complex emotional reality of its characters.",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-7.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 8,
    filmName: "Luther: The Fallen Sun",
    description:
      "Luther was a highly addictive British series about a cop who plays by his own rules, not to mention an iconic Idris Elba role. This new feature film installment, Luther: The Fallen Sun, sees the brilliant and brash officer finally facing some consequences for his years of flouting the law in the name of the greater good. He's now in prison, which leaves him with limited options when an old case of his starts to heat up again. Or does it? It’s a twisty, gripping thriller that will keep you guessing. While it may not be a wholly necessary addition to the Luther legacy, it's certainly a welcome one. We'll take any chance to see Elba's reckless detective take on the world once more. ",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-8.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 9,
    filmName: "The Magician's Elephant",
    description:
      "A young orphan turns to a fortune teller in the hopes of finding his long-lost sister. She gives him a cryptic clue: Seek out a magician with an elephant. And with that, the adventure begins. Based on the Kate DiCamillo children's book of the same name, The Magician's Elephant is a whimsical animated family film jam-packed with heart. Thanks to its stellar voice cast (Noah Jupe, Mandy Patinkin, Brian Tyree Henry, Natasia Demetriou, Benedict Wong, Miranda Richardson, and Aasif Mandvi), it's sure to leave you feeling transported.",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-9.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 10,
    filmName: "Bill Russell: Legend",
    description:
      "This new, two-part documentary from director Sam Pollard (MLK/FBI) embraces Bill Russell's multifaceted legacy as an unstoppable force who earned 11 championships for the Boston Celtics and a civil rights icon. Pollard wants Russell, who died in 2022, to be remembered both for his basketball career and his influence off the court as well. With interviews from some of the greats, including Shaquille O'Neal, Stephen Curry, Isiah Thomas, Larry Bird, and Magic Johnson, we learn about how Bill Russell faced racism throughout his career, protested war alongside Muhammad Ali, and much, much more. Bill Russell: Legend will certainly be a hit for sports fans, but its message makes this a slam dunk for a wider audience.",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-10.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 11,
    filmName: "A Tourist's Guide to Love",
    description:
      "After an unexpected breakup, travel agent Amanda Riley (Rachael Leigh Cook) tries to 'bounce back' by traveling to Vietnam as a secret shopper for a potential partner tour company. Is the first person she meets in Vietnam a handsome and charming tour guide who might have more to teach her than is on the tour itinerary? You bet, baby! This is a sweet and silly romantic comedy that certainly doesn't break the mold, but it has a fantastic cast (Missi Pyle, Ben Feldman, Scott Ly) and will hit just right when you're in for a mindless romp around the world.",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-11.fill.size_2000x1125.v1685553324.jpg",
  },
  {
    id: 12,
    filmName: "True Spirit",
    description:
      "In 2009, Australian teen Jessica Watson attempted to sail solo around the world. In 2023, Netflix released this dramatized retelling of her journey. Expect all the hallmarks of a sailing movie: dangerous storms, unyielding sun, massive waves. It's hard not to cheer on Watson (played deftly by Teagan Croft) as she strives for this incredible achievement, facing loneliness, depression, and the unflinching brutality of the sea without assistance. It's a testament to the power of the human spirit, hence the film's title! An inspiring and exciting watch that also stars Cliff Curtis and Anna Paquin.",
    image:
      "https://helios-i.mashable.com/imagery/articles/02iZGALx5N3WUt7jsldi5Oz/images-12.fill.size_2000x1125.v1685553324.jpg",
  },
];

const filmsSlice = createSlice({
  name: "films",
  initialState: slideInitialValue,
  reducers: {},
});

export default filmsSlice.reducer;
