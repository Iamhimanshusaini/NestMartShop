import Button from '@mui/material/Button'
import React from 'react'
import './not404.css'
import { Link } from 'react-router'
function not404() {
  return (
    <div className='page-notFound'>
      <div className="container-fluid">
        <div className="box">
          <img src="https://nest-frontend-v6.vercel.app/assets/imgs/page/page-404.png" alt="" />
          <h1>Page Not Found</h1>
          <p>The link you clicked may be broken or the page may have been removed.
            visit the Homepage or Contact us about the problem</p>
            <Button><Link to='/'>Back To Home Page</Link></Button>
        </div>
      </div>
    </div>
  )
}

export default not404