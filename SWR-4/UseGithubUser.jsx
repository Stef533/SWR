import useSWR from 'swr'
import PropTypes from 'prop-types'

const fetcher = (url) => (fetch(url).then((r) => r.json()))

export function UseGithubUser({ username }){
  const {data, error, mutate} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

  if(!username){
    return null;
  }

  const refetch = () => {
    mutate()
  }

  return(
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>Error</h3>}
      {data && !error && (
        <div>
      <ul>
        {data.map((user) => (
          <li key={user.login}>{user.login} </li>
        ))}
        </ul>
        <button onClick={refetch}>Refetch data</button>
        </div>
  )}
  </div>
  )
  }

  UseGithubUser.propTypes = {
    username: PropTypes.string
  }