import { Suspense, lazy } from 'react'
import styled from 'styled-components'
import { Route } from 'wouter'
import './App.css'

const TopStoriesPage = lazy(() => import('./pages/TopStoriesPage'))
const CommentsPage = lazy(() => import('./pages/CommentsPage'))

const Header = styled.header`
  font-size: 1.5rem;
  padding: 0.5rem;
`

function App() {
  return (
    <main>
      <Header>Hacker News</Header>

      <Suspense fallback={null}>
        <Route path="/" component={TopStoriesPage} />
        <Route path="/comments/:id" component={CommentsPage} />
      </Suspense>
    </main>
  )
}

export default App
