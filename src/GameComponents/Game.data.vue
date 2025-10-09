/**
 * @author Ubert Guertin
 * @file /src/GameComponents/Game.data.vue
*/

<script lang="ts" setup>
	import { isTestMode, numberOfErrors, numberOfInteractions } from "../Utils/globals.ts";
	import { computed  } from "vue";
  import { plurialFormat } from "../Utils/plurialFormat.ts";

	const endScreen = defineModel('endScreen', { required: true });
</script>


<template>
    <ul v-bind:class="{ endScreenLayout: endScreen }">
		    <li v-if="!endScreen">
			      <input type="checkbox" id="checkbox" v-model=isTestMode />
			      <label for="checkbox">Mode de tests</label>
		    </li>

		    <li v-if="endScreen">
			      <h1>Partie terminée en {{ plurialFormat(numberOfInteractions, "coup") }}, avec {{ plurialFormat(numberOfErrors, "erreur") }} </h1>
		    </li>

		    <li v-if="!endScreen">
            {{ plurialFormat(numberOfErrors, "échec") }}
        </li>
		    
        <li v-if="!endScreen">
            {{ plurialFormat(numberOfInteractions, "coup") }}
        </li>
	</ul>
</template>


<style lang="css" scoped>
    @import "/styles/data.component.css";
</style>
