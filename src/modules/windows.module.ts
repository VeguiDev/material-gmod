import { GameState } from "../api/GameState";

export function SetInGame(value: boolean) {
  GameState.getInstace().setInGame(value);
}

export function UpdateVersion(...args: any) {
  console.log(JSON.stringify(args));
}

export function UpdateLanguages(...args: any) {
  console.log(JSON.stringify(args));
}

export function UpdateLanguage(...args: any) {
  console.log(JSON.stringify(args));
}

export function UpdateGamemodes(...args: any) {
  console.log(JSON.stringify(args));
}

export function UpdateCurrentGamemode(...args: any) {
  console.log(JSON.stringify(args));
}

export function UpdateGames(...args: any) {
  console.log(JSON.stringify(args));
}

export function UpdateServerSettings(...args: any) {
  console.log(JSON.stringify(args));
}

export const subscriptions = {
  Update: (...args: any) => {
    console.log(JSON.stringify(args));
  },
  UpdateUGC: (...args: any) => {
    console.log(JSON.stringify(args));
  },
};

export function UpdateNewsList(...args: any) {
  console.log(JSON.stringify(args));
}

export function UpdateAddonMaps(...args: any) {
  console.log(JSON.stringify(args));
}

export function UpdateMaps(...args: any) {
  console.log(JSON.stringify(args));
}

export function SetProblemCount(...args: any) {
  console.log(JSON.stringify(args));
}
