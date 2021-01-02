const createPortfolioSectionItem = (title, description, imageSource) => `
<div class='col-lg-4 col-md-6 portfolio-item filter-app'>
<div class='portfolio-wrap'>
    <img src='${imageSource}' class='img-fluid' alt='' />
    <div class='portfolio-info'>
        <h4>${title}</h4>
        <p>${description}</p>
        <div class='portfolio-links'>
            <a
                href="${imageSource}"
                data-gall='portfolioGallery'
                class='venobox'
                title="${title}"
            >
                <i class='icofont-eye'></i>
            </a>
            <a href='portfolio-details.html' title='More Details'>
                <i class='icofont-external-link'></i>
            </a>
        </div>
    </div>
</div>
</div>
`;

const createPortfolioSection = (items) => `
      <section id='portfolio' class='portfolio section-bg'>
      <div class='container' data-aos='fade-up' data-aos-delay='100'>
          <div class='section-title'>
              <h2>Our Portfolio</h2>
          </div>
  
          <div class='row portfolio-container'>
              ${items.map((each) =>
                createPortfolioSectionItem(
                  each.title,
                  each.description,
                  each.imageSource
                )
              )}
          </div>
      </div>
  </section>
      `;
