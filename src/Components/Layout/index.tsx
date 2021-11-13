import React from "react";
import { DisplayLayout } from "./style";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";

const Layout: React.FC = () => {
    return(
        <DisplayLayout>
            <Header/>
            <Sidebar/>
            <Content/>
        </DisplayLayout>
    );
};

export default Layout;