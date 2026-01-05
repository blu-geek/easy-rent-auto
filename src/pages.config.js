import Franchising from './pages/Franchising';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Franchising": Franchising,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};