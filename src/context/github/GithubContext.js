import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer,
        initialState);


        const clearUsers = () => {
            dispatch({
                type: "CLEAR_USERS",

            });
        };

    const getUser = async (login) => {
        setLoading()

        const res = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        if (res === 404) {
            window.location.href = "/notfound";
        } else {
            const user = await res.json();
            dispatch({
                type: "GET_USER",
                payload: user,
            });
        }

    };

    const getUserRepos = async (login) => {
        setLoading()

        const params = new URLSearchParams({
            sort: "created",
            per_page: 5
        })

        const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        const data = await res.json();

        dispatch({
            type: "GET_REPOS",
            payload: data,
        });

    };

    const setLoading = () => {
        dispatch({ type: "SET_LOADING" });
    }

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
            clearUsers,
            getUser,
            getUserRepos
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;