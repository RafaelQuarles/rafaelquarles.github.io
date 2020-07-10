import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="p-column">
                  <div className="p-card">
                    <img alt={projects.title} src={projectImage} />
                    <div className="p-body">

                      <div className="p-data">
                        <h5>{projects.title}</h5>
                        <p>{projects.category}</p>
                      </div>
                      <a href={projects.url} className="button p-button"><i className="fa fa-link"></i> View Online</a>
                    </div>
                  </div>
                </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="p-row">

         <div className="twelve columns">

            <h1>Check Out Some of My Works.</h1>

            <div className="align-center">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
