const createSerivcesSectionItem = ({
  title,
  description,
  imageSource,
  links,
}) => {
  return `     
        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div class="icon"><i class="icofont-computer"></i></div>
            <h4 class="title">${title}</h4>
            <p class="description">${description}</p>
        </div>
      `;
};

const createSerivcesSection = (items) => {
  return `
    
    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Services</h2>
        </div>

        <div class="row">
            ${items.map((each) => {
                console.log(each)
                return createSerivcesSectionItem(each)
            }).join('')}
        </div>

      </div>
    </section>

    `;
};
