const createSerivcesSectionItem = ({
  title,
  description,
  imageSource,
  links,
  labels
}) => {
  return `     
        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div class="icon"><i class="icofont-computer"></i></div>
            <h4 class="title">${title}</h4>
            <h4>
              ${
                links === undefined
                  ? ""
                  : links
                      .map((link) => {
                        return `
                      <a href='${link.url}' title='${link.title}' target='_blank'>
                          <i class='${link.icon}'></i>
                      </a>
                  `;
                      })
                      .join("")
              }
            </h4>
            <p class="description">${description}</p>

            ${
              labels === undefined
                ? ""
                : labels
                    .map((label) => {
                      return `
                <span class="badge badge-pill badge-dark">${label}</span>
                `;
                    })
                    .join("")
            }
            
        </div>
      `;
};

const createSerivcesSection = (items) => {
  return `
    
    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Our Portfolio</h2>
        </div>

        <div class="row">
            ${items
              .map((each) => {
                return createSerivcesSectionItem(each);
              })
              .join("")}
        </div>

      </div>
    </section>

    `;
};
