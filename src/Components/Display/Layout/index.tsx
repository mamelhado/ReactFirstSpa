import React from "react";
import { DisplayLayout } from "./style";

import Header from "../Header";
import Content from "../Content";
import Sidebar from "../Sidebar";

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