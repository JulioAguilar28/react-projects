import styled from 'styled-components'
import TopStoriesController from './components/TopStoriesController'
import './App.css'

const Header = styled.header`
  font-size: 1.5rem;
  padding: 0.5rem;
`

function App() {
  return (
    <main>
      <Header>Hacker News</Header>

      <TopStoriesController />
    </main>
  )
}

export default App
