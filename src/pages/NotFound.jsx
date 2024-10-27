import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="hero">
        <div className="text-center hero-content">
            <div className="max-w-md">
                <div className="text-8xl font-bold">404</div>
                <p className="mb-5 text-2xl">404 - Page not found</p>
                <Link to="/" className="btn btn-primary btn-lg">
                    <FaHome className='inline pr-2' />
                    Go back home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound
