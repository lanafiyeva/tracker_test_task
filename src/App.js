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
            <Col span={24}>
              <Search
                className="timer-input-container"
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p className="timer-name">timer name</p>
              <div className="timer-controls-container">
                <div className="timer-control">Value</div>
                <div className="timer-control">Pause</div>
                <div className="timer-control">Remove</div>
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
