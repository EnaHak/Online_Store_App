import Kategorija from '../models/kategorija';
import Recept from '../models/recept'

export const KATEGORIJE = [
  new Kategorija('c1', 'ZENE'),
  new Kategorija('c2', 'MUSKARCI'),
  new Kategorija('c3', 'DJECA'),
  new Kategorija('c4', 'BEAUTY'),

]

export const RECEPTI = [
  //ZENE
  new Recept(
    "r1",
    "c1",
    "Majica",
    "https://i.pinimg.com/originals/74/44/db/7444db81e61af7220364764787978738.png",
    79,90
  ),

  new Recept(
    "r2",
    "c1",
    "Crni sako",
    "https://i.pinimg.com/564x/08/26/82/08268247965a147c8e310fb280d85804.jpg",
    331,90
  ),

  new Recept(
    "r3",
    "c1",
    "Dolcevita",
    "https://i.pinimg.com/originals/cb/2a/3b/cb2a3bbd941b9591ee9c71e655824e84.jpg",
    49,90
  ),

  new Recept(
    "r4",
    "c1",  
    "Kosulja na pruge",
    "https://media1.popsugar-assets.com/files/thumbor/qcHY4u-SrayvGTGlY0OSWhPcH3g/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2021/01/07/856/n/1922564/a03dba67ed9bc644_netimgC7UO2R/i/Woven-Knit-Vest.jpg",
    55
  ),

  new Recept(
    "r5",
    "c1",
    "Kaput",
    "https://cdn.cliqueinc.com/posts/276977/zara-style-over-50-276977-1549392158395-promo.700x0c.jpg",
    549,90
  ),

  new Recept(
    "r6",
    "c1",   
    "Hlace",
    "https://i.pinimg.com/originals/b1/13/38/b11338b38440ef3051951ee6666c68c5.jpg",
    99,90
  ),
  //MUSKARCI
  new Recept(
    "r7",
    "c2",
    "Traperice",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5ba2127870347.5636c1a24f767.jpg",
    130
  ),new Recept(
    "r8",
    "c2",
    "Jakna",
    "https://i.pinimg.com/originals/c8/57/8f/c8578fe3dc072e79a6a98f4c74b58b28.jpg",
    150
  ),new Recept(
    "r9",
    "c2",
    "Dzemper",
    "https://i.pinimg.com/originals/3f/12/2c/3f122c689c6cca621265a6ebbab8b13d.jpg",
    99,90
  ),new Recept(
    "r10",
    "c2",
    "Duga majica",
    "https://i.pinimg.com/originals/ec/54/62/ec54623d619c768d7da4bad984612278.jpg",
    79,90
  ),new Recept(
    "r11",
    "c2",
    "Duga jakna",
    "https://i.pinimg.com/originals/7f/c1/d6/7fc1d6101b1625a3e653d3cd336d728d.jpg",
    150,90
  ),
  //DJECA
  new Recept(
    "r12",
    "c3",
    "Traperice",
    "https://i.pinimg.com/originals/5d/ec/23/5dec23a89bd6deed72fe49a681d18df5.png",
    150
  ),new Recept(
    "r13",
    "c3",
    "Jakna",
    "https://i.pinimg.com/originals/a8/24/11/a8241117e07e527a53dbbbc1a9bfbdf0.jpg",
    79,90
  ),new Recept(
    "r14",
    "c3",
    "Dzemper",
    "https://i.pinimg.com/564x/53/b2/aa/53b2aae863e3e9c164ff1474a035fcf0.jpg",
    99,90
  ),new Recept(
    "r15",
    "c3",
    "Majica",
    "http://frontrowmodels.com/wp-content/uploads/2019/05/1277801600_2_11_1.jpg",
    50
  ),new Recept(
    "r16",
    "c3",
    "Haljina",
    "https://i.pinimg.com/originals/ba/36/64/ba366428367ee078e506638b14355ae2.jpg",
    130
  ),
  //BEAUTY
  new Recept(
    "r17",
    "c4",
    "Rozi ruz",
    "https://www.journal.hr/wp-content/uploads/2021/05/Zara-Tinted-Balm.jpg",
    39,90
  ), new Recept(
    "r18",
    "c4",
    "Crveni ruz",
    "https://fq.co.nz/wp-content/uploads/2021/05/5.png",
    39,90
  ), new Recept(
    "r19",
    "c4",
    "Paleta sjenila",
    "https://media.allure.com/photos/60882c59342660593c18307e/1:1/w_2100,h_2100,c_limit/Cheek%20Color%20in%203%20Full%20Kit%20Impeccable%20Touch_02__Extended.png",
    60
  ),
  
  
];