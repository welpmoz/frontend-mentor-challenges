import React from "react"
import ReactDOM from "react-dom/client"
import FeedbackView from "./views/FeedbackView"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ThankyouView from "./views/ThankyouView"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<FeedbackView />} />
        <Route path="rate/:points" element={<ThankyouView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

