<template>
    <article>
        <section class="project-section">
            <p class="project">projects</p>

            <div class="project-item">
                <h3 class="project-title">Example Project One</h3>
                <p class="project-paragraph">
                    A short description of the project that explains the main idea and technologies used. Keep this
                    concise
                    and focused so it lines up visually with other items.
                </p>
                <ul class="project-links" aria-label="project links">
                    <li><a href="https://github.com/USERNAME/repo1" target="_blank"
                            rel="noopener noreferrer">Repository</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                </ul>
            </div>

            <div class="project-item">
                <h3 class="project-title">Example Project Two</h3>
                <p class="project-paragraph">
                    Another concise project description. Use the same structure for each project so spacing and
                    alignment stay
                    consistent.
                </p>
                <ul class="project-links" aria-label="project links">
                    <li><a href="https://github.com/USERNAME/repo2" target="_blank"
                            rel="noopener noreferrer">Repository</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                </ul>
            </div>

            <!-- decorative underline (matches paragraph/container width and text color) -->
            <div class="project-underline" aria-hidden="true"></div>
        </section>
    </article>
</template>

<style scoped>

.project {
    font-family: var(--font-newsreader, "Newsreader", Georgia, serif);
    font-size: 14px;
    line-height: 20px;
    color: var(--muted, rgb(159, 151, 131));
    font-weight: 500;
    text-transform: lowercase;
    margin-bottom: 0.75rem;
}

/* section container: caps width of project content and centers the block */
.project-section {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 1rem;
    color: var(--text, #c7ccd1);
}

/* project item */
.project-item {
    margin-bottom: 1.25rem;
}

/* project title */
.project-title {
    font-family: var(--font-inter, "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial);
    font-size: 16px;
    font-weight: 600;
    color: var(--text, #c7ccd1);
    margin: 0 0 0.5rem 0;
}

/* project description uses Inter */
.project-paragraph {
    font-family: var(--font-inter, "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial);
    font-weight: 400;
    color: var(--text, #c7ccd1);
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    margin: 0 0 0.75rem 0;
    word-break: break-word;
}

/* project links: horizontal, centered relative to the container (same as About.vue) */
.project-links {
    display: flex;
    /* justify-content: center; */
    gap: 1rem;
    padding: 0;
    margin: 0.5rem 0 0;
    list-style: none;
}

/* links use Inter, clickable only (no hover effects) */
.project-links a {
    font-family: var(--font-inter, "Inter", sans-serif);
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
}

/* underline matches the width of the .project-section (paragraphs) and uses text color */
.project-underline {
    height: 1px;
    background: var(--text, #c7ccd1);
    width: 100%;
    margin: 1rem 0 0;
    border-radius: 1px;
}

/* responsive adjustments to match About.vue */
@media (max-width: 640px) {
    .project-section {
        padding: 0 0.75rem;
    }

    .project-paragraph {
        font-size: 13px;
        line-height: 1.6;
    }

    .project-links {
        gap: 0.5rem;
        margin-top: 0.75rem;
        flex-wrap: wrap;
    }

    .project-underline {
        margin-top: 0.75rem;
    }
}
</style>

<script setup>
import '../assets/main.css'
</script>