import React from "react";
import list from "./skillList";
import './skills.css'
const Skills = ()=>{
    return (
      <div id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-black">Skills</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">
        {list.skillList.map((item, i)=>(
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
              {/* <Icon icon={item.class} /> */}
                <i className={item.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {item.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        ))}
        </ul>
          </div>
        </div>
      </div>
    );
}

export default Skills;

