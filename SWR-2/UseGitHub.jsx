import useSWR from 'swr'
import PropTypes from 'prop-types'

const fetcher = (url) => (fetch(url).then((r) => r.json()))

export function UseGithubUser({ username }){
  const {data, error} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

  if(!username){
    return null;
  }

  return(
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>Error</h3>}
      {data && !error && (
      <ul>
        {data.map((user) => (
          <li key={user.login}>{user.login} </li>
        ))}
        </ul>
  )}
  </div>
  )
  }

  UseGithubUser.propTypes = {
    username: PropTypes.string
  }