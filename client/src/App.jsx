import { Routes, Route, BrowserRouter} from "react-router-dom"
import {IndexPage} from "./pages/IndexPage.jsx"
import { LoginPage } from "./pages/LoginPage.jsx"
import Layout from "./Layout.jsx"
import {RegisterPage} from "./pages/RegisterPage.jsx"
import { useContext } from "react"
import { UserContext } from "./UserContext.jsx"
import { AccountPage } from "./pages/AccountPage.jsx"

function App() {
  const {user} = useContext(UserContext)
  console.log(user,"App is rendered")
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={user?<AccountPage />:<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Route>
      </Routes>
  ) 
}

export default App
