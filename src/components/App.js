import React from "react";

// Imports components for Grid and Menu items
import { Grid, MenuItem } from "uisum";

// Import of a page
import HomePage from "../pages/HomePage";

class App extends React.Component {
    render() {
        return (
            <Grid
                expandSidebar
                pages={[
                    {
                        name: "home",
                        component: <HomePage />
                    }
                ]}
            >
                <Grid.SidebarMenu>
                    <MenuItem href="#/home" icon="icon-home" label="My Page" isHome />
                </Grid.SidebarMenu>

            </Grid>
        );
    }
}

export default App;