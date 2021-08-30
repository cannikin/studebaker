import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      {isAuthenticated && (
        <>
          <div>currentUser: {JSON.stringify(currentUser)}</div>
          <div>
            <button type="button" onClick={logOut}>
              Logout
            </button>
          </div>
        </>
      )}
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
