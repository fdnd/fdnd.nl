<header class="has-image">
    <div class="inner">
        <div class="text rounded--left-bottom">
            <p class="large-body caps font-bold">Associate degree</p>
            <h1 class="xlarge-heading color--highlight">Frontend design & development</h1>
        </div>

        <picture>
            <img src="/img/header-image.jpg" alt="Twee studenten kijken lachend naar de camera, op de achtergrond zijn twee studenten aan het werk.">
        </picture>
        
        <ul class="meta rounded--right-top">
            <li>
                <p class="font-bold caps large-body font-bold">Duur</p>
                <p class="value caps medium-body font-regular">twee jaar</p>
            </li>
            <li>
                <p class="font-bold caps large-body font-bold">Type</p>
                <p class="value caps medium-body font-regular">Voltijd</p>
            </li>
            <li>
                <p class="font-bold caps large-body font-bold">Meetup</p>
                <p class="value caps medium-body font-regular">16 mei 2024</p>
            </li>
        </ul>
    </div>
</header>


<style>
header {
    overflow: hidden;
    width: var(--section-width);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--padding-side) var(--padding-side) 0;
}

@media (max-width: 750px) {
    header {
        padding-top: 2rem;
    }
}

header .inner {
    position: relative;
}

picture {
    width: 100%;
    height: clamp(20rem, calc(100vw / 24 * 610 / 60), 51rem);
    border-radius: var(--radius);
    overflow: hidden;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    padding: 0 clamp(1.5rem, calc(100vw / 24 * 40 / 60), 2.5rem) clamp(1.5rem, calc(100vw / 24 * 40 / 60), 2.5rem);
    background-color: var(--background);
}

.text h1 {
    margin-top: 0.1em;
    width: clamp(18.75rem, calc(100vw / 24 * 500 / 60), 41rem);
}

.meta {
    position: absolute;
    background-color: var(--background);
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    padding: clamp(1.5rem, calc(100vw / 24 * 40 / 60), 2.5rem) clamp(1.5rem, calc(100vw / 24 * 40 / 60), 2.5rem) 0;
    list-style: none;
    max-width: calc(100vw - 8rem);

}

.value {
    opacity: 0.65;
    margin-top: 0.25rem;
}

@media (max-width: 750px) {
    .text {
        position: relative;
        padding: 0 1rem 1rem 0;
    }
    .text h1 {
        width: 100%;
    }
    .meta {
        position: relative;
        max-width: unset;
        gap: 2rem;
        padding: 1rem 1rem 0 0;
    }
}
</style>