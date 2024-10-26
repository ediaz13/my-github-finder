import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text text-primary-contect footer-center'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9 3-9zm0 0h7m0 0l-3 9 3-9m4 9h7m-9-9v9" />
            </svg>
            <p> Copyright &copy; {footerYear} All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer