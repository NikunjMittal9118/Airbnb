import { Routes, Route, BrowserRouter} from "react-router-dom"
import {IndexPage} from "./pages/IndexPage.jsx"
import { LoginPage } from "./pages/LoginPage.jsx"
import Layout from "./Layout.jsx"
import {RegisterPage} from "./pages/RegisterPage.jsx"
import { UserContextProvider } from "./UserContext.jsx"

function App() {
  return (
    <UserContextProvider>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
      </Routes>
    </UserContextProvider>  
  ) 
}

export default App
