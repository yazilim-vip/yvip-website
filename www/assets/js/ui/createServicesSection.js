const createSerivcesSectionItem = ({
  link,
  title,
  description,
  imageSource,
  labels,
}) => {
  return `     
        <div class="col-lg-4 col-md-6 icon-box mt-4" data-aos="fade-up">
            <div class="icon">
              <i class='${link.icon}'></i>
            </div>
            <h4 class="title">
              <a href='${link.url}' title='${link.title}' target='_blank'>
                ${title}
              </a>
            </h4>
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
            <hr />
            <p class="description">${description}</p> 
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
