<script>
    import Header from "$lib/components/Header.svelte"
    import Footer from "$lib/components/Footer.svelte"
    import PageHeader from "$lib/components/PageHeader.svelte"
    import Subscribe from "$lib/components/Subscribe.svelte"
</script>

<Header />

<main>
    <PageHeader />

    <section id="frontender-worden" class="image-with-text">
        <figure class="image-container" style="--ratio: 720/510">
            <img src="/img/funda.jpg" alt="Lars Schuitema, werkzaam als developer bij Funda geeft feedback aan studenten" />
            <figcaption class="font-semibold">
                <span class="caps small-body">Sprint review</span><span class="medium-body">Funda</span>
            </figcaption>
        </figure>

        <div class="text-container">
            <div class="p">
                <h2 class="large-heading">Word Frontend Developer</h2>
                <p class="xlarge-body font-medium">FDND is de enige HBO-opleiding voor Frontend Development in Nederland, in twee jaar stomen wij jou klaar voor het werkveld.</p>
                <p class="medium-body">Je leert bij ons niet alleen met de nieuwste technieken werken om websites te bouwen maar ook de softskills van het vak, zoals samenwerken en tijdinschatten.</p>
                <p class="medium-body">Je werkt bij ons aan échte projecten voor échte opdrachtgevers zoals Funda, Schiphol en de Openbare Bibliotheek van Amsterdam (OBA). We werken nauw samen met toonaangevende agencies zoals GRRR, Triple en de Voorhoede.</p>
                <p class="large-body font-medium">Enthousiast geworden?</p>
                <div class="button-row">
                    <a class="button is-accent-2 is-full-color" href="mailto:info-fdnd@hva.nl?subject=Ik%20wil%20graag%20een%20maandag%20meelopen"><span>Loop een maandag met ons mee</span></a>
                </div>
                <p class="small-body">Voor informatie over de opleiding of andere vragen kun je contact opnemen:</p>
                <p class="small-body">
                    <span class="font-medium">Telefoonnummer Onderwijsbureau:</span> 
                    <a href="call:+31205951855">020 5951855</a>
                    <br>
                    <span class="font-medium">E-mail:</span> 
                    <a href="mailto:info-fdnd@hva.nl">info-fdnd@hva.nl</a>
                </p>
            </div>
        </div>
    </section>

    <section id="meetup" class="image-with-text is-reversed is-small-image">
        <figure class="image-container" style="--ratio: 16/12">
        <img src="/img/fdnd.jpg"
            alt="Een groep studenten kijkt naar een presentatie bij FDND" />
        <figcaption class="font-semibold">
            <span class="caps small-body">
            Onze studio
            </span>
            <span class="medium-body">
            Sarphatistraat 370, Amsterdam
            </span>
        </figcaption>
        </figure>
        <div class="text-container">
            <div class="p">
                <h2 class="medium-heading">Meetup 16 mei | Fronteers × FDND</h2>
                <p class="large-body font-medium">
                Op 16 mei 2024 organiseert Fronteers, dé vakvereniging voor front-end developers,
                samen met FDND een meetup met twee tech talks! </p>
                <ul class="program-list">
                <li class="program-item">
                    <p class="font-bold caps medium-body"><time datetime="2024-05-16T18">18:00</time> uur</p>
                    <p class="medium-body">Deuren open, hapjes & netwerken</p>
                </li>
                <li class="program-item">
                    <p class="font-bold caps medium-body"><time datetime="2024-04-16T19:00">19:00</time> uur</p>
                    <p class="medium-body">Introductie Fronteers en FDND</p>
                </li>
                <li class="program-item">
                    <p class="font-bold caps medium-body"><time datetime="2024-05-16T19:20">19:20</time> uur</p>
                    <p class="medium-body">Talk #1 - <strong>Creative Development voor dummies</strong> door Cyd Stumpel</p>
                </li>
                <li class="program-item">
                    <p class="font-bold caps medium-body"><time datetime="2024-05-16T20:00">20:00</time> uur</p>
                    <p class="medium-body">Pauze</p>
                </li>
                <li class="program-item">
                    <p class="font-bold caps medium-body"><time datetime="2024-05-16T20:20">20:20</time> uur</p>
                    <p class="medium-body">Talk #2 - <strong>View transitions: A deep dive</strong> door Jad Joubran</p>
                </li>
                <li class="program-item">
                    <p class="font-bold caps medium-body"><time datetime="2024-05-16T21:00">21:00</time> uur</p>
                    <p class="medium-body">Drankjes en netwerken</p>
                </li>
                </ul>
                <div class="button-row">
                <a class="button is-accent-3 is-full-color" href="https://www.meetup.com/fronteers-nl/events/300155112/"
                    target="_blank">
                    <span>
                    Meer over het event en aanmelden
                    </span>
                </a>
                </div>
            </div>
        </div>
    </section>

    <section id="expo" class="image-with-text is-small-image">
        <figure class="image-container" style="--ratio: 4/3">
        <video src="/video/studentenwerk/studentenwerk.mp4" muted autoplay loop playsinline></video>
        <figcaption class="font-semibold">
            <span class="caps small-body">
            Studentenwerk 2023-2024
            </span>
        </figcaption>
        </figure>
        <div class="text-container">
            <div class="p">
                <h2 class="medium-heading">Expositie eindwerk 2023/2024</h2>
                <p class="large-body font-medium">
                Op 3 juli organiseren wij, samen met de opleiding Communicatie en Multimedia Design en de Master Digital
                Design, een gezamenlijke expositie van het beste studentenwerk.
                </p>
                <p class="medium-body">
                Kom onder het genot van een drankje en een Indonesisch buffet 3 juli het beste werk van onze studenten van
                2023-2024 bekijken van 17.00 tot 21.00 uur.
                </p>
                <p class="medium-body">
                Iedereen is welkom, van studenten tot bedrijven en van ouders tot docenten, laat ons weten of je
                komt en ontvang meer details:
                </p>
                <div class="button-row">
                <a class="button is-accent-2 is-full-color" href="mailto:info-fdnd@hva.nl?subject=Aanmelden%20EXPO%202024">
                    <span>
                    Ik wil er graag bij zijn
                    </span>
                </a>
                </div>
            </div>
        </div>
    </section>

    <section id="aansluiting-praktijk" class="image-with-text is-reversed is-small-image">
        <figure class="image-container" style="--ratio: 426/630">
        <img src="/img/weloveweb.jpg"
            alt="Simon Riisnæs Dagfinrud staat voor een scherm een talk over Computational Design te geven" />
        <figcaption class="font-semibold">
            <span class="caps small-body">
            We ❤️ web
            </span>
            <span class="medium-body">
            Simon Riisnæs Dagfinrud’s talk over Computational Design </span>
        </figcaption>
        </figure>

        <div class="text-container">
            <div class="p">
                <h2 class="medium-heading">
                Websites leren bouwen, én praktijkervaring opdoen?
                </h2>
                <p class="large-body font-medium">
                Bij FDND leer je websites bouwen en andere belangrijke skills die jij in de praktijk toe kan passen.
                </p>
                <p class="medium-body">
                Zo werken we samen in Github, verdelen wij het programma in sprints in plaats van vakken, en werken
                wij direct samen met agencies en bedrijven waar jij straks misschien gaat werken.
                </p>
                <p class="medium-body">
                Eens per sprint nodigen wij een gastspreker uit, experts in hun vakgebied zoals Kilian Valkhof, Vasilis van
                Gemert, Valerie Fuchs en vele anderen.
                </p>
                <p class="medium-body">
                Wil jij ook eens een gastcollege geven?
                </p>
                <div class="button-row">
                <a class="button is-accent-1 is-full-color"
                    href="mailto:info-fdnd@hva.nl?subject=Ik%20wil%20graag%20een%20gastcollege%20geven">
                    <span>
                    Neem contact op
                    </span>
                </a>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-row">
        <div class="inner">
            <div class="cta p">
                <h3 class="medium-heading">
                Samenwerken?
                </h3>
                <p class="large-body font-medium">
                Ben jij eigenaar of medewerker van een bedrijf en ben je benieuwd naar de samenwerkingsmogelijkheden met
                onze opleiding?
                </p>
                <a class="button is-dark" href="https://partners.fdnd.nl/">
                <span>
                    Onze partner website 🤝
                </span>
                </a>
            </div>
            <div class="cta p">
                <h3 class="medium-heading">
                Programma
                </h3>
                <p class="large-body font-medium">
                Benieuwd geworden naar ons programma?
                </p>
                <p class="medium-body font-medium">
                Wij updaten ons programma elk jaar om aan de wensen van studenten en praktijk te voldoen.
                </p>
                <a class="button is-dark" href="https://programma.fdnd.nl/">
                <span>
                    Programma 2023-2024 📅
                </span>
                </a>
            </div>
            <div class="cta p">
                <h3 class="medium-heading">
                Sfeer proeven?
                </h3>
                <p class="large-body font-medium">
                Wil je een keer met een van onze studenten te praten?
                </p>
                <p class="medium-body font-medium">
                Dat kan! Elke maandag kan je een ochtend meelopen en de sfeer zelf proeven.
                </p>
                <a class="button is-dark" href="mailto:info-fdnd@hva.nl?subject=Ik%20wil%20graag%20een%20maandag%20meelopen">
                <span>
                    Ik wil meelopen ✋
                </span>
                </a>
            </div>
        </div>
    </section>

    <section id="studio-model" class="simple-text p">
        <div class="inner">
            <h2 class="medium-heading">Het Studiomodel</h2>
            <p class="large-body">
                In het studiomodel werken studenten onder begeleiding van coaches en experts uit het vakgebied aan
                praktijkgerichte opdrachten.
            </p>
            <p class="medium-body">
                Onze docenten hebben ervaring in verschillende vakgebieden waaronder accessibility, performance en animatie en
                webgl. Zo is er altijd een docent die je vraag kan beantwoorden!
            </p>
            <p class="medium-body">
                Een deel van onze docenten heeft jaren ervaring in het onderwijs bij onze zusterstudie CMD, een deel van onze
                docenten werkt ook nog (deels) in de praktijk.
            </p>
        </div>
    </section>

    <section id="veelgestelde-vragen" class="simple-text p">
        <div class="inner">
            <h2 class="medium-heading">Veelgestelde vragen</h2>
            <details>
                <summary class="small-heading">
                Moet ik al kunnen coderen?
                </summary>
                <div class="p">
                <p class="medium-body">
                    Nee, je hebt helemaal geen voorkennis nodig om te beginnen aan deze opleiding, we kunnen je alles leren!
                    Als je wel al voorkennis hebt, is dat alleen maar goed, dan kunnen we je helpen je skills te verbeteren en
                    te verdiepen in de stof.
                </p>
                </div>
            </details>
            <details>
                <summary class="small-heading">
                Wat is frontend development?
                </summary>
                <div class="p">
                <p class="medium-body">
                    Een frontend developer ontwerpt en bouwt websites in HTML, CSS en JavaScript.
                    Deze frontend talen leer je bij ons, je hebt dus geen voorkennis nodig.
                </p>
                </div>
            </details>
            <details>
                <summary class="small-heading">
                Hoe werkt deze frontend developer opleiding?
                </summary>
                <div class="p">
                <p class="medium-body">
                    Je richt je tijdens deze tweejarige studie op webdesign, visual interface design en
                    frontend development. Vanaf het begin van de opleiding werk je aan actuele opdrachten van
                    échte opdrachtgevers, en leer je samenwerken in multidisciplinaire teams.
                </p>
                </div>
            </details>
            <details>
                <summary class="small-heading">
                Wat is een Associate Degree?
                </summary>
                <div class="p">
                <p class="medium-body">
                    Een Associate degree-opleiding is een tweejarige hbo-opleiding op niveau 5. Een Ad slaat een brug tussen
                    het
                    mbo-4 (niveau 4) en een hbo-bachelor (niveau 6). Met een Associate degree kies je voor een
                    praktijkgerichte
                    hbo-opleiding; je wordt opgeleid
                    voor een beroep dat aansluit bij de praktijk. In dit geval word je opgeleid tot ‘frontend
                    designer/developer' of
                    kortweg ‘frontender’. Frontenders ontwerpen en maken interactieve, toegankelijke toepassingen voor het
                    web.
                    Frontenders werken binnen
                    het gebied van software development, interactieontwerp en digitaal visueel ontwerp.
                </p>
                <p class="medium-body">
                    Na afronding van deze tweejarige hbo-opleiding, krijg je een wettelijk erkend hbo-diploma met de graad
                    Associate degree. Met dit Ad-diploma kun je direct aan de slag in het werkveld of doorstromen naar de
                    bacheloropleiding Communication and Multimedia
                    Design (CMD).
                </p>
                </div>
            </details>
            <details>
                <summary class="small-heading">
                Hoe krijg ik les?
                </summary>
                <div class="p">
                <p class="medium-body">
                    De beste manier om iets te leren, is door het te doen. Frontend Design & Development (FDND) is een
                    flexibele,
                    praktijkgerichte hbo-opleiding. Vanaf dag één werk je - individueel én in teamverband - aan actuele
                    opdrachten
                    voor echte opdrachtgevers.
                </p>
                <p class="medium-body">
                    Dit zorgt ervoor dat je over actuele kennis, houding en vaardigheden beschikt, die je na het afronden van
                    de
                    opleiding direct kunt inzetten. De lessen worden gegeven door docenten en experts uit het vakgebied.
                </p>
                </div>
            </details>
            <details>
                <summary class="small-heading">
                Wat kan je worden na je diploma?
                </summary>
                <div class="p">
                <p class="medium-body">
                    FDND werkt nauw samen met bedrijven uit de creatieve industrie. Tijdens de opleiding doe je veel ervaring
                    op in
                    de praktijk en krijg je ook de kans om een netwerk op te bouwen, waarbinnen je mogelijk een stageplek en
                    een
                    werkplek kunt vinden.
                </p>
                <p class="medium-body">
                    Met de kennis, skills en alle praktijkervaring die je in de opleiding opdoet, kan je na afloop van de
                    opleiding
                    onder andere solliciteren voor de beroepsrollen: Frontend Web Developer, HTML/CSS Developer, Frontend Web
                    Designer, User Interface Developer, Creative Developer en Frontend Engineer.
                </p>
                </div>
            </details>
            <details>
                <summary class="small-heading">
                Wat zijn de toelatingseisen?
                </summary>
                <div class="p">
                <p class="medium-body">
                    Je kunt de Ad FDND volgen met een mbo-4, havo- of vwo-diploma. Wil jij graag starten met deze
                    HvA-opleiding
                    maar beschik je niet over een havo-, vwo- of mbo-diploma niveau 4? Dan kun je op grond van je leeftijd een
                    toelatingsexamen maken:
                </p>
                <a class="button is-full-color is-accent-1"
                    href="https://www.hva.nl/praktisch/algemeen/hva-breed/studentenzaken/21--toelatingsonderzoek/21--toelatingsonderzoek.html">
                    <span>het 21+-toelatingsonderzoek.</span>
                </a>
                </div>
            </details>
        </div>
    </section>

    <Subscribe />
</main>

<Footer />