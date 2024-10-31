import React from 'react'
import PropTypes from 'prop-types'

function ReposList({repos}) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <div key={repo.id} className="flex flex-col mb-4">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-xl font-bold text-primary"
            >
              {repo.name}
            </a>
            <p className="text-lg text-base-content">{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

ReposList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default ReposList
