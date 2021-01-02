const createTeamMemberCard = (teamMember) => {
  return `
  <div class='col-xl-3 col-lg-4 col-md-6 align-self-center' data-aos='fade-up'>
      <div class='member'>
          <div class='pic'>
              <img
                  src='${teamMember.imageSource}'
                  class='img-fluid'
                  alt=''
              />
          </div>
          <div class='member-info'>
              <h4>${teamMember.name}</h4>
              <span>${teamMember.title}</span>
              <div class='social'>
                    ${
                      teamMember.socialLinks === undefined
                        ? ""
                        : teamMember.socialLinks.map((link) => {
                            const title =
                              link.title === undefined
                                ? ""
                                : `title=${link.title}`;
                            return `
                                <a href='${link.url}' ${title} target="_blank">
                                    <i class='${link.icon}'></i>
                                </a>    
                            `;
                          }).join('')
                    }
                </div>
          </div>
      </div>
  </div>
  
  `;
};

const createTeamSection = (teamMemberList) => {
  return `
  <section id='team' class='team'>
        <div class='container'>
            <div class='section-title'>
                <h2>Our Team</h2>
            </div>

            <div class='row justify-content-center'>
                ${teamMemberList.map((teamMember) =>
                  createTeamMemberCard(teamMember)
                ).join('')}
                
            </div>
        </div>
    </section>
  `;
};
