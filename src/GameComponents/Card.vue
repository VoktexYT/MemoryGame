/**
 * @author Ubert Guertin
 * @file /src/GameComponents/Card.vue
*/

<script lang="ts" setup>
    import { ref } from "vue";

	  import { isTestMode } from "../Utils/globals.ts";

	  const isActive = defineModel('isActive', { required: true });
	  const isVisible = defineModel('isVisible', { required: true });

    const card = defineModel('card', { required: true });
</script>


<template>
    <div class="flip-card" v-bind:class="{noActive: isActive, visible: isVisible}">
        <div class="flip-card-inner">
			      <div class="flip-card-back">
				        <img src="/assets/back.png" draggable="false">
			      </div>
			      <div class="flip-card-front">
				        <img :src="card.src" draggable="false">
			      </div>
		    </div>

		    <p id="patternId" v-if="isTestMode">{{ card.patternId }}</p>
	  </div>
</template>


<style lang="css" scoped>
    @import "/styles/card.component.css";
</style>
