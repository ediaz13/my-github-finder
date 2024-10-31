import React from "react";
import {
  FaEye,
  FaStar,
  FaCodeBranch,
  FaLink,
  FaInfo,
  FaUtensils,
} from "react-icons/fa";
import PropTypes from "prop-types";

function RepoItem({ repo }) {

  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
            <a href={repo.html_url}>
                <FaLink className="inline mr-1" /> {repo.name}
            </a>

        </h3>
        <p className="mb-3">{repo.description}</p>
        <div>
            <div className="mr-2 badge badge-info badge-lg">
                <FaEye className="mr-2" /> Watchers: {repo.watchers_count}
            </div>
            <div className="mr-2 badge badge-success badge-lg">
                <FaStar className="mr-2" /> Watchers: {repo.stargazers_count}
            </div>
            <div className="mr-2 badge badge-error badge-lg">
                <FaInfo className="mr-2" /> Watchers: {repo.open_issues_count}
            </div>
            <div className="mr-2 badge badge-info badge-lg">
                <FaUtensils className="mr-2" /> Watchers: {repo.forks_count}
            </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
