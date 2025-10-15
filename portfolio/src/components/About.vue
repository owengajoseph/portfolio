<template>
    <article class="parent">
        <section class="child">
            <h6>about</h6>
            <p class="about-paragraph">

                I’m a software engineer who fell in love with computers after realizing they could do far more than just
                gaming. Over time, that curiosity grew into a passion for building systems and solving complex problems.
                I’m
                skilled in system design and versatile with Python, JavaScript, Go, and Linux, among other technologies.
            </p>
            <p class="about-paragraph">
                I’m an avid learner with a deep sense of curiosity, always eager to explore new tools and approaches.
                I’ve
                worked on multiple projects, from basic prototypes to advanced systems involving microservices
                architecture
                and database optimizations.
            </p>
            <p class="about-paragraph">
                My journey into tech began with a fascination for the command line — that simple yet powerful interface
                that
                sparked my desire to understand how things work under the hood. One day, I hope to build or contribute
                to
                something truly impactful — something that can make a real difference in soci
            </p>

            <!-- social links centered relative to the .child (paragraph container) -->
            <ul class="social-links" aria-label="social links">
                <li><a href="https://github.com/USERNAME" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/USERNAME" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/USERNAME" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>

            <!-- decorative underline centered with spacing -->
            <div class="about-underline" aria-hidden="true"></div>
        </section>
    </article>
</template>

<style scoped>
.parent {
    margin-top: 3rem; /* simple space above the About section */
}

.child {
    max-width: 700px;
    margin: 0 auto;
    /* keep the block centered on the page */
    padding: 0 1rem;
    /* inner horizontal padding for small screens */
}

/* heading label styling to separate from paragraphs */
.child h6 {
    margin: 0 0 0.75rem 0;
    font-size: 0.9rem;
    text-transform: lowercase; /* changed: force lower-case "about" */
    letter-spacing: 0.08em;
    color: var(--muted, #444);
    font-weight: 600;
}

/* improved paragraph spacing and readable lines (applied via class) */
.about-paragraph {
    margin: 0 0 1.25rem 0;
    /* space after each paragraph */
    line-height: 1.7;
    /* comfortable line spacing */
    text-align: left;
    /* override any global centering for readability */
    word-break: break-word;
    color: var(--text, #222);
    font-size: 1rem;
}

/* social links centered under paragraphs */
.social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 0;
    margin: 1.25rem 0 0;
    list-style: none;
}

/* simple link styling */
.social-links a {
    color: var(--muted, #444);
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    transition: background 120ms ease, color 120ms ease;
    font-weight: 500;
    font-size: 0.95rem;
}

.social-links a:hover,
.social-links a:focus {
    color: var(--text, #111);
    background: rgba(0,0,0,0.04);
    outline: none;
}

/* decorative underline centered and spaced from the links */
.about-underline {
    height: 1px;
    background: var(--muted, #e0e0e0);
    width: 100%;        /* span the full width of .child (matches paragraphs) */
    max-width: none;    /* remove the small cap so the line can be longer */
    margin: 1rem 0 0;
    border-radius: 1px;
}

/* ensure consistent gap between children inside the about section */
.child > * + * {
    margin-top: 0;
}

/* small screens: slightly tighter spacing */
@media (max-width: 640px) {
    .child {
        padding: 0 0.75rem;
    }

    .about-paragraph {
        margin-bottom: 1rem;
        line-height: 1.6;
        font-size: 0.98rem;
    }

    .social-links {
        gap: 0.75rem;
        margin-top: 1rem;
        flex-wrap: wrap;
    }

    .about-underline {
        max-width: 280px;
        margin-top: 0.75rem;
    }
}
</style>
<script setup>
import '../assets/main.css'
</script>