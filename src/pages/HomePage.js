import React from "react";
import { Page, Header, HeaderTitle, Body } from "uisum";

class HomePage extends React.Component {
    render() {
        return (
            <Page>
                <Header>
                    <HeaderTitle>
                        Home page
                    </HeaderTitle>
                </Header>

                <Body>
                    <h1>Hello world</h1>
                </Body>
            </Page>
        );
    }
}

export default HomePage;