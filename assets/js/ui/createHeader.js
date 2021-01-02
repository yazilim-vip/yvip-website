const createHeader = (logo, sectionList) => {
    return `
      <header id='header'>
      <div class='container'>
          <div class='logo float-left'>
              <h1 class='text-light'>
                  <a href='/'>
                      <span>${logo}</span>
                  </a>
              </h1>
          </div>
          <nav class='nav-menu float-right d-none d-lg-block'>
              <ul>
                  <li class='active'>
                      <a href='/'>Home</a>
                  </li>
                  ${sectionList.map(
                    (section) => `
                      <li>
                          <a href='#${section.id}'>${section.name}</a>
                      </li>
                  `
                  )}
              </ul>
          </nav>
      </div>
  </header>
      
      `;
  };
