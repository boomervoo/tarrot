<script setup lang="ts">
</script>

<template>

  <div class="relative">
    <div id="bg-wrap" class="w-150 z-10  absolute left-110 top-60">

      <svg
          class="blur-md rounded-full  "
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient
              id="Gradient1"
              cx="50%"
              cy="50%"
              fx="0.441602%"
              fy="50%"
              r=".5"
          >
            <animate
                attributeName="fx"
                dur="34s"
                values="0%;3%;0%"
                repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop>
            <stop
                offset="100%"
                stop-color="rgba(255, 0, 255, 0)"
            ></stop>
          </radialGradient>
          <radialGradient
              id="Gradient2"
              cx="50%"
              cy="50%"
              fx="2.68147%"
              fy="50%"
              r=".5"
          >
            <animate
                attributeName="fx"
                dur="23.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop>
            <stop
                offset="100%"
                stop-color="rgba(255, 255, 0, 0)"
            ></stop>
          </radialGradient>
          <radialGradient
              id="Gradient3"
              cx="50%"
              cy="50%"
              fx="0.836536%"
              fy="50%"
              r=".5"
          >
            <animate
                attributeName="fx"
                dur="21.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop>
            <stop
                offset="100%"
                stop-color="rgba(0, 255, 255, 0)"
            ></stop>
          </radialGradient>
          <radialGradient
              id="Gradient4"
              cx="50%"
              cy="50%"
              fx="4.56417%"
              fy="50%"
              r=".5"
          >
            <animate
                attributeName="fx"
                dur="23s"
                values="0%;5%;0%"
                repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop>
            <stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop>
          </radialGradient>
          <radialGradient
              id="Gradient5"
              cx="50%"
              cy="50%"
              fx="2.65405%"
              fy="50%"
              r=".5"
          >
            <animate
                attributeName="fx"
                dur="24.5s"
                values="0%;5%;0%"
                repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop>
            <stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop>
          </radialGradient>
          <radialGradient
              id="Gradient6"
              cx="50%"
              cy="50%"
              fx="0.981338%"
              fy="50%"
              r=".5"
          >
            <animate
                attributeName="fx"
                dur="25.5s"
                values="0%;5%;0%"
                repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop>
            <stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop>
          </radialGradient>
        </defs>
        <!--<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient4)">
<animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
<animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
<animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite"/>
</rect>
<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
<animate attributeName="x" dur="23s" values="0%;-25%;0%" repeatCount="indefinite" />
<animate attributeName="y" dur="24s" values="25%;-25%;25%" repeatCount="indefinite" />
<animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s" repeatCount="indefinite"/>
</rect>
<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient6)">
<animate attributeName="x" dur="25s" values="-25%;0%;-25%" repeatCount="indefinite" />
<animate attributeName="y" dur="26s" values="0%;-25%;0%" repeatCount="indefinite" />
<animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s" repeatCount="indefinite"/>
</rect>-->
        <rect
            x="13.744%"
            y="1.18473%"
            width="100%"
            height="100%"
            fill="url(#Gradient1)"
            transform="rotate(334.41 50 50)"
        >
          <animate
              attributeName="x"
              dur="20s"
              values="25%;0%;25%"
              repeatCount="indefinite"
          ></animate>
          <animate
              attributeName="y"
              dur="21s"
              values="0%;25%;0%"
              repeatCount="indefinite"
          ></animate>
          <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="7s"
              repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect
            x="-2.17916%"
            y="35.4267%"
            width="100%"
            height="100%"
            fill="url(#Gradient2)"
            transform="rotate(255.072 50 50)"
        >
          <animate
              attributeName="x"
              dur="23s"
              values="-25%;0%;-25%"
              repeatCount="indefinite"
          ></animate>
          <animate
              attributeName="y"
              dur="24s"
              values="0%;50%;0%"
              repeatCount="indefinite"
          ></animate>
          <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="12s"
              repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect
            x="9.00483%"
            y="14.5733%"
            width="100%"
            height="100%"
            fill="url(#Gradient3)"
            transform="rotate(139.903 50 50)"
        >
          <animate
              attributeName="x"
              dur="25s"
              values="0%;25%;0%"
              repeatCount="indefinite"
          ></animate>
          <animate
              attributeName="y"
              dur="12s"
              values="0%;25%;0%"
              repeatCount="indefinite"
          ></animate>
          <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur="9s"
              repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>
    </div>
  </div>
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
</template>

<style scoped>

.lay {
  background-image: url('/src/assets/img/svg/mystic-table.jpg');
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  height: 100%;
  width: 100%;
}



.holder *, .holder *:before, .holder *:after {
  position: absolute;
  content: "";
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
  animation: moveFlame 6s linear infinite, enlargeFlame 5s linear infinite;
}

.flame:before {
  width: 100%;
  height: 100%;
  border-radius: 50% 50% 20% 20%;
  box-shadow: 0 0 15px 0 rgba(247, 93, 0, .4), 0 -6px 4px 0 rgba(247, 128, 0, .7);
}

@keyframes moveFlame {
  0%, 100% {
    transform: translateX(-50%) rotate(-2deg);
  }
  50% {
    transform: translateX(-50%) rotate(2deg);
  }
}

@keyframes enlargeFlame {
  0%, 100% {
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
  background: rgba(0, 133, 255, .7);
  box-shadow: 0 -40px 30px 0 #dc8a0c, 0 40px 50px 0 #dc8a0c, inset 3px 0 2px 0 rgba(0, 133, 255, .6), inset -3px 0 2px 0 rgba(0, 133, 255, .6);
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
  animation: blinkIt .1s infinite;
}

@keyframes blinkIt {
  50% { opacity: .8;}
}
</style>
