<template>
    <header class="intro-container">
        <div class="intro-box">
            <h1 class="intro-heading text-3x1 text-neutral-500">
                <span class="text-gray-custom">im </span>owenga joseph full stack developer
            </h1>
            <p class="intro-sub">I’m interested in programming, statistics, crypto,philosophy</p>
        </div>
    </header>
</template>

<style scoped>
/* center the whole header on the page and give top spacing */
.intro-container {
    display: flex;
    justify-content: center;
    padding-top: 3rem;
}

/* shrink to the heading width when possible and center children */
.intro-box {
    display: inline-block;
    text-align: center;
    /* centers paragraph relative to the heading box */
}

/* ensure heading stays on one line with its inline span */
.intro-heading {
    margin: 0;
    line-height: 1.05;
    display: inline-block; /* avoid unexpected full-width block behavior */
    white-space: nowrap;    /* keep the heading text on a single line where possible */
    vertical-align: middle;
}

/* make sure the "im" span is inline and doesn't force a break */
.intro-heading .text-gray-custom {
    display: inline;
    white-space: pre; /* preserve the trailing space in the span */
}

/* paragraph centered relative to the heading box.
   Limit width so it wraps neatly under the heading. */
.intro-sub {
    margin: 0.5rem 0 0;
    text-align: center;
    max-width: 60ch;
    line-height: 1.5;
    color: var(--muted, #666);
    font-size: 1rem;
    word-break: break-word;
}

/* mobile: allow wrapping and full width for readability */
@media (max-width: 640px) {
    .intro-box {
        display: block;
        width: 100%;
        text-align: center;
        padding: 0 1rem;
    }

    .intro-heading {
        white-space: normal; /* allow wrapping on small screens */
        display: block;
    }

    .intro-sub {
        max-width: none;
        font-size: 0.98rem;
    }
}
</style>

<script setup>
import '../assets/main.css'
</script>