/*
 * @author Ubert Guertin
 * @file /src/Utils/globals.ts
 */

import { ref } from "vue";

import { DEFAULT_MODE_IS_TEST } from "./constants";

export const isTestMode = ref(DEFAULT_MODE_IS_TEST);

export const numberOfErrors = ref(0);
export const numberOfInteractions = ref(0);

