import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style= {{background: 'rgb(97,218,251)'}}>
        <div className="collapse navbar-collapse" id="navbarNav">
            <h3 style= {{fontFamily: 'monospace', paddingRight: 15}}>Echarts</h3>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="https://echarts.apache.org/en/index.html">Docs <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://echarts.apache.org/examples/en/editor.html?c=line-simple">Playground</a>
                </li>
            </ul>
        </div>
    </nav>
    
  )
}
