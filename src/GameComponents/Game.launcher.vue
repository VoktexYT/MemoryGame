/*
* @author Ubert Guertin
* @file /src/GameComponents/Game.launcher.vue
*/

<script setup lang="ts">
	import { ref } from "vue";

	import { RATIO_GRID } from "../Utils/constants.ts";
  import { sleep } from "../Utils/sleep.ts";

  // Enlever le warning de vue pour le id=""
	defineProps<{
		id?: string
	}>();

	const emit = defineEmits(['startGame']);

  // constantes
  const selectedOptions = ref(Object.keys(RATIO_GRID));
	const selectedCardNumber = ref(selectedOptions.value[0]);

	const buttonClick = ref(false);
	const fadeEffect = ref(false);

	async function startGame() {
		buttonClick.value = true;
		await sleep(100);

		buttonClick.value = false;
		await sleep(200);

		fadeEffect.value = true;
		await sleep(500);

		emit('startGame', selectedCardNumber._value);
		fadeEffect.value = true;
	}
</script>

<template>
	  <div :id=id>
		    <main id="core">
			      <button id="startGame" @click="startGame()" v-bind:class="{click: buttonClick}"> Nouvelle partie</button>
			      <section id="selectCards">
				        <label>Nombre de cartes</label>
				        <select v-model="selectedCardNumber">
					          <option v-for="o in selectedOptions" :key="o" :value="o">
						            {{ o }}
					          </option>
				        </select>
			      </section>
		    </main>

		    <div id="fadeScreen" v-bind:class="{fade: fadeEffect}"></div>
	  </div>
</template>

<style lang="css" scoped>
    @import "/styles/launcher.component.css"; 
</style>
