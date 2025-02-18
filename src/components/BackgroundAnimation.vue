<script setup lang="ts">
import { ref } from 'vue';
const cards = ref(Array.from({ length: 9 }, (_, i) => i + 1));
</script>

<template>
    <div class="pl-20 pr-20 pt-20 w-full relative">
        <div class="lay">
            <div class="holder">
                <div class="candle">
                    <div class="blinking-glow"></div>
                    <div class="thread"></div>
                    <div class="glow"></div>
                    <div class="flame"></div>
                </div>
            </div>
        </div>

        <div
            v-for="(card, index) in cards"
            :key="index"
            class="transition-transform duration-500 ease-in-out hover:scale-x-110 hover:scale-y-105"
            :style="{
                transform: `translateY(${index * -92}%`,
                right: '0px',
                top: '300px',
                width: '140px',
            }"
        >
            <img src="@/assets/img/svg/shirt.svg" alt="cards" />
        </div>
    </div>
</template>

<style scoped>
.lay {
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    height: 100%;
    width: 100%;
}

.holder *,
.holder *:before,
.holder *:after {
    position: absolute;
    content: '';
}

.candle {
    bottom: 0;
    width: 150px;
    height: 300px;
}

.flame {
    width: 24px;
    height: 120px;
    left: 50%;
    transform-origin: 50% 100%;
    transform: translateX(-50%);
    bottom: 100%;
    border-radius: 50% 50% 20% 20%;
    background: rgba(255, 255, 255, 1);
    background: -moz-linear-gradient(white 80%, transparent);
    background: -webkit-linear-gradient(white 80%, transparent);
    background: -o-linear-gradient(white 80%, transparent);
    background: -ms-linear-gradient(white 80%, transparent);
    background: linear-gradient(white 80%, transparent);
    animation:
        moveFlame 6s linear infinite,
        enlargeFlame 5s linear infinite;
}

.flame:before {
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 20% 20%;
    box-shadow:
        0 0 15px 0 rgba(247, 93, 0, 0.4),
        0 -6px 4px 0 rgba(247, 128, 0, 0.7);
}

@keyframes moveFlame {
    0%,
    100% {
        transform: translateX(-50%) rotate(-2deg);
    }
    50% {
        transform: translateX(-50%) rotate(2deg);
    }
}

@keyframes enlargeFlame {
    0%,
    100% {
        height: 120px;
    }
    50% {
        height: 140px;
    }
}

.glow {
    width: 26px;
    height: 60px;
    border-radius: 50% 50% 35% 35%;
    left: 50%;
    top: -48px;
    transform: translateX(-50%);
    background: rgba(0, 133, 255, 0.7);
    box-shadow:
        0 -40px 30px 0 #dc8a0c,
        0 40px 50px 0 #dc8a0c,
        inset 3px 0 2px 0 rgba(0, 133, 255, 0.6),
        inset -3px 0 2px 0 rgba(0, 133, 255, 0.6);
}

.glow:before {
    width: 70%;
    height: 60%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.35);
}

.blinking-glow {
    width: 100px;
    height: 180px;
    left: 50%;
    top: -55%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #ff6000;
    -webkit-filter: blur(50px);
    -moz-filter: blur(60px);
    -o-filter: blur(60px);
    -ms-filter: blur(60px);
    filter: blur(60px);
    animation: blinkIt 0.1s infinite;
}

@keyframes blinkIt {
    50% {
        opacity: 0.8;
    }
}
</style>
