<template>

    <section class="library-section">
        <div class="library-underline" aria-hidden="true"></div>
        <h2 class="library">Library</h2>
        <div class="library-grid">
            <a href="#" class="library-item" aria-label="Open book details">
                <img src="../assets/61Ij8nLooNL._SY425_.jpg" alt="Book cover: sample" class="img" loading="lazy" width="170" height="250">
            </a>
        </div>
    </section>
</template>

<style scoped>
.library-grid > a {
    border: rgb(60, 255, 0) 1px dotted;
}

.img {
    display: block;
    height: auto;
    width: 100%;
    max-width: 170px;
    aspect-ratio: 170 / 250;
    object-fit: cover;
}

.library-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    gap: 1rem;
    justify-items: start;
    align-items: start;
}

.library-section {
    margin-top: 10px;
    margin-left: auto;
    width: 100%;
    max-width: 700px;
    margin-right: auto;
    color: var(--text, #c7ccd1);
}

.library {
    font-family: var(--font-newsreader, "Newsreader", Georgia, serif);
    font-size: 14px;
    line-height: 20px;
    color: var(--muted, rgb(159, 151, 131));
    font-weight: 500;
    text-transform: lowercase;
    margin: 0 0 0.75rem 0;
    text-align: left;
}


.library-underline {
    height: 1px;
    background: var(--text, #c7ccd1);
    width: 100%;
    margin: 1rem 0 0;
    border-radius: 1px;
}

@media (max-width: 640px) {
    .library-section {
        padding: 0 0.75rem;
    }

    .library-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    .library-underline {
        margin-top: 0.75rem;
    }
}
</style>

<script setup>
</script>