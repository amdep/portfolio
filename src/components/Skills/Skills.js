import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-solid-svg-icons";


class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <h3 className="mb-0">Programming Languages &amp; Tools</h3>
          <div className="row skills.list">
          {
            this.skills.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <FontAwesomeIcon icon={faCircle} className="skills" />
                  <span className="ml-3">{data.name}</span>
                </p>
              </div>
            ))
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
