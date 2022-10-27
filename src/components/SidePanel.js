import React from 'react'
import { NavLink } from 'react-router-dom'
import {SideBarData} from '../data/SideBarData'

function SidePanel() {
    return (
        <React.Fragment>
            <section>
                <div className="text-white">
                    {
                        SideBarData.map((item, index)=>{
                            return(
                                <div key={index}>
                                    <NavLink to={item.path}>
                                    <span>{item.title}</span>
                                    </NavLink>
                                    
                                </div>
                            )
                        })
                    }
            
                </div>
            </section>
      </React.Fragment>
      )
}

export default SidePanel