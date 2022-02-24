import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'
import { Row, Col } from "antd";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Patient Locator</title>
        <link rel="icon" href="/title.ico" />
      </Head>

      <main className={homeStyles.main}>
        <Row gutter={[6,6]} align="middle" justify='center'>
          <Col span={8} className={homeStyles.grid}>
            TEST BOX
          </Col>
          <Col span={8} className={homeStyles.grid}>
            TEST BOX
          </Col>
        </Row>
        <Row gutter={[6,6]} align="middle" justify='center'>
          <Col span={8} className={homeStyles.grid}>
            TEST BOX
          </Col>
          <Col span={8} className={homeStyles.grid}>
            TEST BOX
          </Col>
        </Row>
      </main>
    </div>
  )
}
