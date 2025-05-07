import './App.css'
import ContentBox from './components/contentbox'
import FilterBox from './components/filterbox'
import Header from './components/header'
import MainContent from './components/maincontent'
import Searchbox from './components/searchbox'
import SortBox from './components/sortbox'
import Content from './components/content'

document.title = 'Store - CONNECT'

function App() {
  
  
  return (
    <MainContent>
      <Header />
      <Searchbox />
      <FilterBox />
      <SortBox />
      <ContentBox>
        <Content />
      </ContentBox>
    </MainContent>
  )
}

export default App