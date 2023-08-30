'use client'; // If used in Pages Router, is no need to add this line

import Login from "@components/Login"
import theme from "@theme/themeConfig";
import { Button, ConfigProvider } from 'antd';


const Home = () => {
  return (
    <ConfigProvider theme={theme}>
    <main>
      <div className="App">
      <Login/>
      <Button type="primary">Button</Button>
    </div>
    </main>
    </ConfigProvider>
  )
}

export default Home