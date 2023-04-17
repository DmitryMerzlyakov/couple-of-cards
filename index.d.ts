declare module "*.jpg";
declare module "*.jpeg";
declare module "*.ts";

export {};


interface apllication  {
    numbers: number,
    blocks: object,
    screens: object,
    renderBlock: any,
    cards: any,
    cardIdOne: any,
    cardIdTwo: any,
    id: object
}


declare global {
    interface Window {
        application: apllication;
    }
  }