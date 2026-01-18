<template>
    <article>
        <section class="project-section">
            <h2 class="project">projects</h2>
            <div class="project-item">
                <h3 class="project-title">University ERP System</h3>
                <p class="project-paragraph">
                    My ERP System is a modern project built using a microservices architecture. It includes core modules
                    such as Faculty Management, Student Management, and Library Management, where each module runs as an
                    independent microservice.

                    The system has a central entry point (API Gateway) that handles requests and routes them to the
                    appropriate service. This design makes the system easy to scale, simple to maintain, and flexible to
                    update individual modules without affecting others.

                    The project uses REST APIs and follows a structured service-based approach to keep all components
                    connected and efficient. Although the system is simple, it clearly demonstrates my versatility in
                    designing and building large-scale systems and my understanding of clean backend architecture.
                </p>
                <ul class="project-links" aria-label="project links">
                    <li><a href=https://github.com/owengajoseph/microservices/tree/main/microservicess/university_erp_system
                            target="_blank" rel="noopener noreferrer">Repository</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                </ul>
            </div>

            <div class="project-item">
                <h3 class="project-title">Intelligent Tourist</h3>
                <p class="project-paragraph">
                    My Intelligent Tourist System is a simple project that gives users basic travel recommendations. It
                    suggests key places to visit and helps users explore destinations more easily. Even though it’s
                    lightweight, it shows my ability to build clear, functional features focused on user convenience.
                </p>
                <ul class="project-links" aria-label="project links">
                    <li><a href="https://github.com/owengajoseph/" target="_blank"
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
    font-weight: 500;
    line-height: 20px;
    color: var(--muted, rgb(159, 151, 139));
    font-weight: 500;
    text-transform: lowercase;
    margin-bottom: 0.75rem 0px;


}

.social-links a {
    font-family: var(--font-inter, "Inter", sans-serif);
    color: var(--text, #c7ccd1);
    text-decoration: underline;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    transition: color 0.2s ease;
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
    font-family: var(--font-newsreader, "Newsreader", Georgia, serif);
    font-size: 16px;
    color: rgb(205, 200, 194);
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    line-height: 24px;
}

.project-paragraph {
    font-family: var(--font-inter, "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial);
    font-weight: 400;
    color: var(--text, #c7ccd1);
    font-size: 14px;
    line-height: 20px;
    /* text-align: left; */
    margin: 0 0 0.75rem 0;
    word-break: break-word;
}

.project-links {
    display: flex;
    /* justify-content: center; */
    gap: 1rem;
    padding: 0;
    margin: 0.5rem 0 0;
    list-style: none;
    text-decoration: underline;
}

.project-links a:hover {
    color: #ffffff;
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
</script>