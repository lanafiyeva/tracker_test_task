import './App.css'
import { Layout } from 'antd'
import { Input, Space } from 'antd'
import { Row, Col } from 'antd'

const { Header, Footer, Content } = Layout
const { Search } = Input
const onSearch = (value) => console.log(value)

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="App-header">
          <h1>tracker</h1>
        </Header>
        <Content>
          <Row>
            <Col className="input-container" span={24}>
              <input className="input-field"></input>
              <div className="input-button">
                <div class="logo">
                  <img src="/round_play_circle_filled_black_18dp.png"></img>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="record-container" span={24}>
              <p className="timer-name">timer name</p>
              <div className="timer-controls-container">
                <div className="timer-control">00:05:45</div>
                <div className="timer-control">
                  <img src="/round_pause_circle_outline_black_18dp.png"></img>
                </div>
                <div className="timer-control">
                  <img src="/round_remove_circle_outline_black_18dp.png"></img>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>timer name</Col>
          </Row>
          <Row>
            <Col span={24}>timer name</Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default App
