import Home from './pages/Home';
import Franchising from './pages/Franchising';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Franchising": Franchising,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};