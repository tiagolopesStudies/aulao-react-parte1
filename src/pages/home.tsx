export function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>

      <h2>All pages:</h2>

      <ul>
        <li>
          <a href="/state">UseStatePage</a>
        </li>
        <li>
          <a href="/state2">UseStateWithObjectPage</a>
        </li>
        <li>
          <a href="/state3">UseStateWithFunctionPage</a>
        </li>
        <li>
          <a href="/portal">ReactPortalPage</a>
        </li>
        <li>
          <a href="/effect">UseEffectPage</a>
        </li>
        <li>
          <a href="/context">Context API page</a>
        </li>
        <li>
          <a href="/reducer">UseReducerPage</a>
        </li>
        <li>
          <a href="/ref">UseRefPage</a>
        </li>
        <li>
          <a href="/custom-hooks">CustomHooksPage</a>
        </li>
        <li>
          <a href="/use-id">UseIdPage</a>
        </li>
        <li>
          <a href="/class-component">ClassComponentPage</a>
        </li>
      </ul>
    </div>
  )
}
