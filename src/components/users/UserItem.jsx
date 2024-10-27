import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({user: {id, login, avatar_url, html_url}}) {
  return (
    <>
    <div key={id} className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full w-14 h-14">
                        <img src={avatar_url} alt={login} />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link className='text-base-content text-opacity-40' to={ html_url}> View Profile</Link>
                <h2 className="text-xl font-bold text-center">{login}</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserItem