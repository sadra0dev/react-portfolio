import { BrowserRouter, Routes, Route } from "libs";
import { Home, Admin } from "pages";
import { reactApp } from "configs";
import "styles/index.css";

reactApp(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path=":slug" element={<Admin />}>
            <Route path=":slug" element={<Admin />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
