const createPortfolioSectionItem = ({
  socialLinks,
  name,
  title,
  imageSource,
}) => `
<div class='col-lg-4 col-md-6 portfolio-item filter-app'>
    <div class='portfolio-wrap'>
        <img src='${imageSource}' class='img-fluid' alt='' />
        <div class='portfolio-info'>
            <h4>${name}</h4>
            <p>${title}</p>
            <div class='portfolio-links'>
                ${socialLinks
                  .map(
                    (link) => `
                    <a href='${link.url}' title='${link.title}' target='_blank'>
                        <i class='${link.icon}'></i>
                    </a>
                `
                  )
                  .join("")}
            </div>
        </div>
    </div>
</div>`;

const createPortfolioSection = (items) => `
    <section id='team' class='portfolio section-bg'>
      <div class='container' data-aos='fade-up' data-aos-delay='100'>
          <div class='section-title'>
              <h2>Our Team</h2>
          </div>
  
          <div class='row portfolio-container'>
              ${items.map((each) => createPortfolioSectionItem(each)).join("")}
          </div>
      </div>
  </section>`;
