const createTopBar = (mail, linkedinUrl) => {
  return `
      <section id='topbar' class='d-none d-lg-block'>
      <div class='container clearfix'>
          <div class='contact-info float-left'>
              <i class='icofont-envelope'></i>
              <a href='mailto:${mail}'>${mail}</a>
          </div>
          <div class='social-links float-right'>
              <a href='${linkedinUrl}' target="_blank" class='linkedin'>
                  <i class='icofont-linkedin'></i>
              </a>
          </div>
      </div>
      </section>`;
};
