<template>
    <section class="intro">
        <header class="intro-container">
            <div class="intro-box">
                <h1 class="intro-heading">
                    <div class="heading">
                        im <span class="newsreader">owenga joseph</span> full stack developer
                    </div>
                </h1>

                <p class="intro-role">
                    currently learning data science & analytics
                </p>

                <p class="intro-sub">
                    I’m interested in programming, statistics, crypto, philosophy
                </p>
            </div>
        </header>
    </section>
</template>

<script setup>
import '../assets/main.css'
</script>

<style scoped>
.intro {
    padding: 40px 0px;
}

.intro-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 1rem;
}

.heading {
    font-family: var(--font-inter);
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: rgb(159, 151, 139);
}

.newsreader {
    font-family: newsreader;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    color: rgb(216, 213, 207);
}

.intro-role {
    margin-top: 6px;
    font-size: 16px;
    font-family: var(--font-inter);
    color: rgb(140, 135, 125);
}

.intro-sub {
    margin-top: 10px;
    font-size: 15px;
    font-family: var(--font-inter);
    color: rgb(120, 115, 105);
}
</style>
