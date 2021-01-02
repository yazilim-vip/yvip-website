const createTeamMemberCard = (teamMember) => {
  let socialLinks = "";

  return `
  <div class='col-xl-3 col-lg-4 col-md-6' data-aos='fade-up'>
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
                        : teamMember.socialLinks.map(
                            (link) => `
                                <a href='${link.url}' target="_blank">
                                    <i class='${link.icon}'></i>
                                </a>    
                            `
                          )
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
                <p>
                    You are here
                </p>
            </div>

            <div class='row'>
                ${teamMemberList.map((teamMember) =>
                  createTeamMemberCard(teamMember)
                )}
                
            </div>
        </div>
    </section>
  `;
};
