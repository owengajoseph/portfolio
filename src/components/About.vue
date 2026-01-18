    <template>
    <article>
        <section class="about-section">
            <h2 class="about"></h2>
            <p class="about-paragraph">
                I’m a software engineer who fell in love with computers after realizing they could do far more than just
                gaming. Over time, that curiosity grew into a passion for building systems and solving complex problems.
                I’m skilled in system design and versatile with Python, JavaScript, Go, and Linux, among other
                technologies.
            </p>
            <p class="about-paragraph">
                I’m an avid learner with a deep sense of curiosity, always eager to explore new tools and approaches.
                I’ve worked on multiple projects, from basic prototypes to advanced systems involving microservices
                architecture and database optimizations.
            </p>
            <p class="about-paragraph">
                My journey into tech began with a fascination for the command line — that simple yet powerful interface
                that sparked my desire to understand how things work under the hood. One day, I hope to build or
                contribute
                to something truly impactful — something that can make a real difference in society.
            </p>

            <!-- social links centered relative to the paragraph container (horizontal layout) -->
            <ul class="social-links" aria-label="social links">
                <li><a href="https://github.com/owengajoseph" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/USERNAME" target="_blank"
                        rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/user426__" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>

            <!-- decorative underline (matches paragraph/container width and text color) -->
            <div class="about-underline" aria-hidden="true"></div>
        </section>
    </article>
</template>

<style scoped>
/* "about" label uses Newsreader (lowercase) */
.about {
    font-family: var(--font-newsreader, "Newsreader", Georgia, serif);
    font-size: 14px;
    line-height: 20px;
    color: var(--muted, rgb(159, 151, 131));
    font-weight: 500;
    text-transform: lowercase;
    margin-bottom: 0.75rem;
}

.about-section {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 1rem;
    color: var(--text, #c7ccd1);

}

.about-paragraph {
    font-family: var(--font-inter, "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial);
    font-weight: 400;
    color: var(--text, #c7ccd1);
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    margin: 0 0 1.25rem 0;
    word-break: break-word;
}

/* social links: horizontal layout, centered relative to the paragraph container */
.social-links {
    display: flex;
    justify-content: center;
    /* center the links horizontally */
    gap: 1rem;
    /* space between links */
    padding: 0;
    margin: 0.75rem 0 0;
    list-style: none;
}

/* links use Inter, underlined and styled */
.social-links a {
    font-family: var(--font-inter, "Inter", sans-serif);
    color: var(--text, #c7ccd1);
    text-decoration: underline;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    transition: color 0.2s ease;
}

.social-links a:hover {
    color: #ffffff;
}

.about-underline {
    height: 1px;
    background: var(--text, #c7ccd1);
    width: 100%;
    margin: 1rem 0 0;
    border-radius: 1px;
}

/* responsive adjustments */
@media (max-width: 640px) {
    .about-section {
        padding: 0 0.75rem;
    }

    .about-paragraph {
        font-size: 13px;
        line-height: 1.6;
    }

    .social-links {
        gap: 0.5rem;
        margin-top: 0.75rem;
    }

    .about-underline {
        margin-top: 0.75rem;
    }
}
</style>

<script setup>
import '../assets/main.css'
</script>