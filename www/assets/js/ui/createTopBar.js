const createTopBar = (mail, links) => {
  return `
      <section id='topbar' class='d-none d-lg-block'>
      <div class='container clearfix'>
          <div class='contact-info float-left'>
              <i class='icofont-envelope'></i>
              <a href='mailto:${mail}'>${mail}</a>
          </div>
          <div class='social-links float-right'>
                ${links
                  .map(
                    (link) => `
                    <a href='${link.url}' target="_blank" class='linkedin'>
                        <i class='${link.icon}'></i>
                    </a>  
                `
                  )
                  .join("")}
          </div>
      </div>
      </section>`;
};
