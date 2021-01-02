const createHeroSection = (title, text, imageSource) => `
<section id='hero'>
<div class='hero-container'>
    <div
        id='heroCarousel'
        class='carousel slide carousel-fade'
        data-ride='carousel'
    >
        <ol
            class='carousel-indicators'
            id='hero-carousel-indicators'
        ></ol>

        <div class='carousel-inner' role='listbox'>
            <div
                class='carousel-item active'
                style="background-image: url('${imageSource}')"
            >
                <div class='carousel-container'>
                    <div class='carousel-content container'>
                        <h2 class='animate__animated animate__fadeInDown'>
                            ${title}
                        </h2>
                        <p class='animate__animated animate__fadeInUp'>
                            ${text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
`;
