import React from 'react'
import NavBar from './NavBar'
import SidePanel from './SidePanel'
import SidePage from '../components/SidePage'
function MainPage() {
  return (
    <React.Fragment>
        <section>
            <div>
                <NavBar/>
            </div>
        </section>

        {/* Side panel section */}
        <section>
        <div >
            <div className="row justify-content-md-center">
                <div className="col col-lg-2" style={{backgroundColor: 'red'}}>
                    <SidePanel/>
                </div>
                
                <div className="col">
                    <SidePage/>
                </div>
            </div>
        </div>
        </section>
    </React.Fragment>
  )
}

export default MainPage