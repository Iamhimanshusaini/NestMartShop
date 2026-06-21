import React from 'react'
import DashSide from './adminSidebar'
import { Outlet } from 'react-router'
function admindashLayout() {
    return (
        <>
          <div className="container-fluid">
    <div className="row">

        {/* Sidebar */}
        <div className="col-12 col-md-3 col-lg-2 p-0">

            <DashSide />

        </div>

        {/* Dashboard Content */}
        <div className="col-12 col-md-9 col-lg-10 p-0 bg-light"
        style={{height:'100vh', overflow:'scroll'}}>

            <Outlet />

        </div>

    </div>
</div>


        </>
    )
}

export default admindashLayout