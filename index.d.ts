declare module "*.jpg";
declare module "*.jpeg";

export {};


interface apllication  {
    numbers: number,
    blocks: object,
    screens: object,
    renderBlock: Function,
    cards: [],
    cardIdOne: {id:string},
    cardIdTwo: {id:string},
}


declare global {
    interface Window {
        application: apllication;
    }
  }