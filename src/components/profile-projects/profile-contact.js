export function ProfileProjectComponent() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="mt-5">
          <h6 className="mb-5">
            <span className="bi bi-link" /> My project List with web
            technologies are...
          </h6>
          <div className="card m-2 p-2">
            <h1 className="text-center text-success">
              <span className="card-img-top bi bi-cart" />
            </h1>
            <div className="text-header">
              <h5 className="text-center">Shopping Site</h5>
            </div>
            <div className="card-body">
              <dl>
                <dt>Technologies used</dt>
                <dd>React JS</dd>
                <dd>Bootstrap</dd>
                <dd>Node JS</dd>
                <dd>Express JS</dd>
                <dd>MongoDB</dd>
              </dl>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-sm btn-outline secondary">
                Visit site <sapn className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>

          <div className="card m-2 p-2">
            <h1 className="text-center text-success">
              <span className="card-img-top bi bi-pc-display-horizontal" />
            </h1>
            <div className="text-header">
              <h5 className="text-center">Genius Computer</h5>
            </div>
            <div className="card-body">
              <dl>
                <dt>Technologies used</dt>
                <dd>React JS</dd>
                <dd>Bootstrap</dd>
                <dd>Node JS</dd>
                <dd>Express JS</dd>
                <dd>MongoDB</dd>
              </dl>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-sm btn-outline secondary">
                Visit site <sapn className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>

          <div className="card m-2 p-2">
            <h1 className="text-center text-success">
              <span className="card-img-top bi bi-shop" />
            </h1>
            <div className="text-header">
              <h5 className="text-center">C - Mart SHG Application</h5>
            </div>
            <div className="card-body">
              <dl>
                <dt>Technologies used</dt>
                <dd>ASP.NET</dd>
                <dd>Bootstrap</dd>
                <dd>C#.NET</dd>
                <dd>MySQL Server</dd>
              </dl>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-sm btn-outline secondary">
                Visit site <sapn className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <div>
          <h6 className="text-center">
            <span className="bi bi-link" /> Some beginner level project's on
            github...
          </h6>
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Project Name</th>
                  <th>Project description</th>
                  <th>Go on github</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>1</td>
                    <td>Fake store API Project</td>
                    <td>A project for fetching data from open-source api <a href="#" className="text-decoration-none">(Fake Store API)</a> and representing it on web-site</td>
                    <td className="text-center"><span className="btn btn-sm btn-outline-secondary">Visit <span className="bi bi-arrow-up-right"/></span></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>NASA API Project</td>
                    <td>A project for fetching data from open-source api <a href="#" className="text-decoration-none">(NASA API Data)</a> and representing it on web-site</td>
                    <td className="text-center"><span className="btn btn-sm btn-outline-secondary">Visit <span className="bi bi-arrow-up-right"/></span></td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>ToDo List App</td>
                    <td>A project for managing daily-routine-timing and make your schedule managable</td>
                    <td className="text-center"><span className="btn btn-sm btn-outline-secondary">Visit <span className="bi bi-arrow-up-right"/></span></td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>EMI & BMI App</td>
                    <td>A project for calculating EMI and BMI</td>
                    <td className="text-center"><span className="btn btn-sm btn-outline-secondary">Visit <span className="bi bi-arrow-up-right"/></span></td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Professional Portfolio</td>
                    <td>A site for describe any profession</td>
                    <td className="text-center"><span className="btn btn-sm btn-outline-secondary">Visit <span className="bi bi-arrow-up-right"/></span></td>
                </tr>

                <tr>
                    <td>6</td>
                    <td>CRUD Operation</td>
                    <td>An end-to-end site for managing CRUD operation with database</td>
                    <td className="text-center"><span className="btn btn-sm btn-outline-secondary">Visit <span className="bi bi-arrow-up-right"/></span></td>
                </tr>

                <tr>
                    <td>7</td>
                    <td>Netflix Clone</td>
                    <td>A web-page similar to Netlix home page</td>
                    <td className="text-center"><span className="btn btn-sm btn-outline-secondary">Visit <span className="bi bi-arrow-up-right"/></span></td>
                </tr>
              </tbody>
              
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
