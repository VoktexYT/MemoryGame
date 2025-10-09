/*
* @author Ubert Guertin
* @file /src/GameComponents/App.vue
*/

<script setup lang="ts">
	import { ref } from "vue";

	import GameLauncher from "./GameComponents/Game.launcher.vue";
	import Game from "./GameComponents/Game.vue";
	import GameData from "./GameComponents/Game.data.vue";
  import Header from "./GameComponents/Header.vue";
  import Footer from "./GameComponents/Footer.vue";

	import { numberOfErrors, numberOfInteractions } from "./Utils/globals.ts";

	import { DEFAULT_START_GAME, DEFAULT_NUMBER_OF_CARDS } from "./Utils/constants.ts";


  // Constantes
	const startGame = ref<boolean>(DEFAULT_START_GAME);
	const numberOfCards = ref<number>(DEFAULT_NUMBER_OF_CARDS);
	const showData = ref<boolean>(false);
	const endScreen = ref<boolean>(false);


	function startGameEvent(n) {
		startGame.value = true;
		numberOfCards.value = n;
		numberOfErrors.value = 0;
		numberOfInteractions.value = 0;
		endScreen.value = false;
	}


	function endGameEvent() {
		startGame.value = false;
		showData.value = true;
		endScreen.value = true;
	}
</script>

<template>
    <Header />
	  <GameLauncher id="gameLauncher" v-if="!startGame" @startGame="startGameEvent" />
	  <Game v-if="startGame" :numberOfCards="numberOfCards" @endGame="endGameEvent" />
	  <GameData v-if="showData" :endScreen="endScreen" />
    <Footer />
</template>

<style scoped>
  @import "/styles/app.css";
</style>
