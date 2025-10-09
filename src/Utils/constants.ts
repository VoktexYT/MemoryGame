/*
 * @author Ubert Guertin
 * @file /src/Utils/constants.ts
 */

import type { RatioObject } from "./type";

export const CATEGORY_NUMBER: number = 4;
export const TYPE_NUMBER: number = 10;

export const RATIO_GRID: RatioObject = {
  12: [3, 4],
  16: [4, 4],
  20: [4, 5],
  24: [4, 6],
  30: [5, 6],
}; // row x col

export const DEFAULT_NUMBER_OF_CARDS = 30;
export const DEFAULT_RATIO = RATIO_GRID[DEFAULT_NUMBER_OF_CARDS];
export const DEFAULT_CARD_AUTO_FLIP_TIME_MS = 2000;

export const DEFAULT_CARD_IS_VISIBLE = false;
export const DEFAULT_START_GAME = false;
export const DEFAULT_MODE_IS_TEST = false;
