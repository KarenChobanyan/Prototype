"use strict"

const felines = {
    kingdom: "Animalia(Կենդանիներ)",
    phylum: "Chordata(Քորդավորներ)",
    class: "Mammalia(Կաթնասուններ)",
    order: "Carnivora(Գիշատիչներ)",
    suborder: "Feliformia(Կատվանմաններ)",
    family: "Felidae(Կատվազգիներ)",
    toesCount: {
        foreFeet: 5,
        hindFeet: 4,
    }
};

const bigCats = {
    genus: "Հովազներ-պանտերաներ",
    getCountry() {
        return this.country
    },
    getWeight() {
        return this.name + "ի քաշը " + this.weight + " է "
    },
    getSize() {
        return this.size
    },
    getName() {
        return this.name
    },
    __proto__: felines
};

const smallCats={
    genus: "Փոքր կատուներ",
    __proto__: bigCats
};

const lynx = {
    type:"Լուսան",
    __proto__ : smallCats
}

const lion_1 = {
    type: "Lions",
    name: "Կոնգոլեզյան առյուծ",
    size: {
        bodyLength: "1.4-2մ",
        tailLength: "51-10sm"
    },
    weight: "120-218կգ",
    country: ["Կոնգոյի Դեմոկրատական Հանրապետություն", "Կենտրոնաաֆրիկյան հանրապետություն", "Հարավային Սուդան"],
    __proto__: bigCats
};

const lion_2 = {
    type: "Lions",
    name: "Մասայան առյուծ",
    size: {
        bodyLength: "2.5 -3 մ ներառյալ պոչը",
        bodyHeight: "90-115սմ",
    },
    weight: "150-230կգ",
    country: ["Եթովպիա", "Տանզանիա", "Մոզամբիկ"],
    __proto__: bigCats
};

const lion_3 = {
    type: "Lions",
    name: "Ասիական առյուծ",
    size: {
        bodyLength: "2-2.9մ",
        bodyHeight: "80-110սմ"
    },
    weight: "150-220կգ",
    country: "Հնդկաստան",
    __proto__: bigCats
};

const jaguar = {
    name: "Յագուար",
    weight: "60-90կգ",
    size: {
        bodyLength: "120-185սմ",
        tailLength: "45-75սմ",
    },
    country: ["Մեքսիկա", "Սրգենտինա"],
    __proto__: bigCats
};

const leopard = {
    name: "Հովազ",
    weight: "60կգ",
    size: {
        bodyLength: "165սմ",
        tailLength: "75-110սմ",
    },
    country: ["Հարավային Ամերիկա", "Թուրքիա", "Իրան", "Հայաստան"],
    __proto__: bigCats
};
const tiger = {
    name: "Վագր",
    types: ["Բենգալյան վագր", "Հնդկաչինական վագր", "Սումատրայի վագր", "Ամուրյան վագր", "Հարավ-չինական վագր"],
    size: {
        bodyLength: "2,8-3մ",
        tailLength: "60-110սմ"
    },
    weight: "370-400կգ",
    country: ["Բանգլադեշ", "Բութան", "Կամբոջա", "Չինաստան", "Հնդկաստան", "Ինդոնեզիա", "Լաոս", "Մալազիա", "Մյանմա", "Նեպալ", "Հյուսիսային Կորեա", "Ռուսաստան", "Թալիանդ", "Վիետնամ"],
    __proto__: bigCats

};

const tigerCat ={
    name:"Հեպարդ",
    size:{
        bodyLength:"1,1-1,5մ",
        tailLength:"60-84սմ"
    },
    weigth:"21-72կգ",
    country:["Աֆրիկա","Ասիա"],
    __proto__ : smallCats
};

const caracal = {
    name:"Տափաստանային լուսան",
    weight:"15-36կգ",
    size:{
        bodyLength:"68-90սմ",
        tailLength:"20-41սմ",
    },
 country:["Աֆրիկայում","Արաբական թերակղզու անապատներում","Միջին և փոքր Ասիայում"],
 __proto__ : smallCats
};

const manul = {
    name:"Պալլասյան կատու",
    weight:"2-5կգ",
    size:{
        bodyLength:"52-65սմ",
        tailLength:"23-31սմ",
    },
    country:["Կենտրոնական և միջին Ասիա","Արևելյան Անդրկովկաս","Իրան","Մոնղոլիա","Չինաստան"],
    __proto__ : smallCats
};

const nigripes = {
    name:"Սևաոտ կատու",
    weight:"1,6կգ",
    size:{
        bodyLength:"36-52սմ",
        tailLength:"13-20սմ"
    },
    country:["նամբիա","Բոստվաննա"],
    __proto__ : smallCats
};

const silvestris= {
    name:"Անտառային կատու",
    weight:"6կգ",
    size:{
     bodyLength:"63-75սմ",
     tailLength:"30-34սմ",
    },
    country:["Եվրոպա","Ասիա","Աֆրիկա"],
    __proto__ : smallCats
};

const bieti = {
    name:"Չինական կատու",
    weight:"4,5-5,5կգ",
    size:{
        bodyLength:"97,7սմ",
        tailLength:"29-35սմ",
    },
    country:["Հարավային Մոնղոլիա"],
    __proto__ : smallCats
};

const canadensis = {
    name:"Կանադական կատու",
    weight:"8-14կգ",
    size:{
        bodyLength:"76-85սմ",
        tailLength:"27-32սմ",
    },
    country:["Ալյասկա","Կանադա","Վաշինգտոն","Կոլորադո"],
    __proto__ : lynx
};

const ordLynx ={
    name:"Սովորական լուսան",
    weight:"18-25կգ",
    size:{
        bodyLength:"80-100սմ",
        tailLength:"20-40սմ",
    },
    country:[" Ռուսաստանում", "Վրաստանում", "Էստոնիայում", "Ֆինլանդիայում", "Շվեդիայում", "Լեհաստանում", "Չեխիայում", "Հունգարիայում", "Ռումինիայում"],
    __proto__ : lynx
};

const pardinus = {
    name:"Պիրենեյան լուսան",
    weight:"13-25կգ",
    size:{
        bodyLength:"75-100սմ",
        tailLength:"12-30սմ",
    },
    country:["Իսպանիա","Պորտուգալիա"],
    __proto__ : lynx
};


console.log(ordLynx.getWeight());

