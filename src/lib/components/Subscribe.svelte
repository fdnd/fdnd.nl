<script>
    import { onMount } from "svelte"

    let isDown = false

    onMount(() => {
        // Scrolling functions
        const delta = 5

        let scrolled

        let lastScrollTop = 0
        let scrollDistance = 100

        window.addEventListener('scroll', () => {
            scrolled = true
        })

        setInterval(() => {
            if (scrolled) {
                scrollHandler()
                scrolled = false
            }
        }, 250)

        function scrollHandler() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            if (Math.abs(lastScrollTop - scrollTop) <= delta) return
            if (scrollTop > lastScrollTop && scrollTop > scrollDistance) {
                isDown = true
            } else if (scrollTop < lastScrollTop) {
                isDown = false
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
        }
    })
</script>

<footer class={isDown ? 'is-down' : ''}>
    <div class="inner">
        <p class="small-body caps font-bold">Wil jij bij ons studeren?</p>
        <a class="button is-accent-2 is-full-color" href="https://www.studielink.nl/?brinCode=28DN">
            <span>
            Schrijf je in via studielink
            </span>
        </a>
    </div>
</footer>


<style>
footer {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
    transition: transform 0.5s ease-out;
}

footer.is-down {
    transform: translateY(calc(100% + 2rem)) !important;
}

footer .small-body {
    color: var(--grey)
}

footer .inner {
    padding: 1.5rem 1.75rem 1.75rem 1.5rem;
    background-color: var(--blue);
    border-radius: var(--radius) 0 0 0;
    animation: up 0.4s 0.4s ease-out forwards;
}

footer p {
    margin-bottom: 0.3em;
    color: var(--background);
}

footer .button {
    width: max-content;
}

footer .inner::before {
    content: '';
    position: absolute;
    left: calc(var(--radius) * -1);
    bottom: calc(var(--radius));
    z-index: 10;
    width: var(--radius);
    height: var(--radius);
    border-radius: var(--radius);
    box-shadow: calc(var(--radius) / 2) calc(var(--radius) / 2) 0 0 var(--blue);
}

footer .inner::after {
    content: '';
    position: absolute;
    top: calc(var(--radius) * -1);
    right: calc(var(--radius));
    z-index: 10;
    width: var(--radius);
    height: var(--radius);
    border-radius: var(--radius);
    box-shadow: calc(var(--radius) / 2) calc(var(--radius) / 2) 0 0 var(--blue);
}

@media (max-width: 750px) {
    footer .inner::before {
        content: unset;
    }
}

@media (prefers-reduced-motion) {
    footer {
        transform: none !important;
    }
}
</style>