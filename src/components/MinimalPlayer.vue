<template>
    <section class="music-player">
        <div class="divider"></div>

        <div class="content">
            <div class="label">listening to</div>

            <div class="track" role="button" tabindex="0" @click="toggle" @keydown.enter="toggle"
                @keydown.space.prevent="toggle">
                nothing
            </div>

            <div class="time">
                <span>{{ currentTime }}</span>
                <span>{{ duration }}</span>
            </div>

            <div class="bar" role="progressbar" :aria-valuenow="Math.floor(current)" :aria-valuemin="0"
                :aria-valuemax="Math.floor(total)" :aria-valuetext="`${currentTime} of ${duration}`" @click="seek">
                <div class="fill" :style="{ width: progress + '%' }"></div>
            </div>
        </div>


        <audio ref="audio" :src="src" preload="metadata" @timeupdate="onTime" @loadedmetadata="onLoad" />
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const src = '/music.mp3' // public/music.mp3

const audio = ref(null)
const playing = ref(false)
const current = ref(0)
const total = ref(0)

const toggle = () => {
    if (!audio.value) return
    playing.value ? audio.value.pause() : audio.value.play()
    playing.value = !playing.value
}

const onTime = () => {
    current.value = audio.value.currentTime
}

const onLoad = () => {
    total.value = audio.value.duration
}

const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    audio.value.currentTime = (x / rect.width) * total.value
}

const format = (t) => {
    if (!t) return '0:00'
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60).toString().padStart(2, '0')
    return `${m}:${s}`
}

const currentTime = computed(() => format(current.value))
const duration = computed(() => format(total.value))
const progress = computed(() =>
    total.value ? (current.value / total.value) * 100 : 0
)
</script>

<style scoped>
.music-player {
    margin-left: auto;
    width: 100%;
    max-width: 700px;
    margin-right: auto;
    color: var(--text, #c7ccd1);
    margin: 10px
}

.divider {
    height: 1px;
    background: color(#c7ccd1);
    margin: 20px 0;
}

.content {
    max-width: 640px;
}

.label {
    font-family: var(--font-newsreader, "Newsreader", Georgia, serif);
    font-size: 14px;
    line-height: 20px;
    color: var(--muted, rgb(159, 151, 131));
    font-weight: 500;
    text-transform: lowercase;
    margin: 0 0 0.75rem 0;
    text-align: left;
}


.track {
    font-family: serif;
    font-size: 16px;
    color: #9bb0c8;
    cursor: pointer;
    margin-bottom: 12px;
}

.track:hover {
    text-decoration: underline;
}

.time {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #7a7a7a;
    margin: 0px 0px 0px 5px;
}

.bar {
    height: 8px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    cursor: pointer;
    margin: 5px;
}

.fill {
    height: 100%;
    background: rgba(255, 255, 255, 0.35);
    width: 0%;
}
</style>