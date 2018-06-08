import React from "react";
import { Page } from "uisum";

class HomePage extends React.Component {
    render() {
        return (
            <Page>
                <Page.Header>
                    <Page.Header.Title>
                        Home page
                    </Page.Header.Title>
                </Page.Header>

                <Page.Body>
                    <h1>Hello world</h1>
                </Page.Body>
            </Page>
        );
    }
}

export default HomePage;