<template>
    <div class="rotated-text-container">
    <span v-for="(letter, index) in word" :key="index" :style="getLetterStyle(index)">
      {{ letter }}
    </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            word: "LA EDUCACION"
        };
    },
    methods: {
        getLetterStyle(index) {
            const rotationStep = 40; // Cada letra se rota 40 grados
            const initialRotation = -180; // Rotación inicial
            return {
                transform: `rotate(-20deg)`
            };
        }
    }
};
</script>

<style>
.rotated-text-container {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rotated-text-container span {
    font-size: 20px;
    color: #177E34;
    font-weight: bold;
}
</style>
