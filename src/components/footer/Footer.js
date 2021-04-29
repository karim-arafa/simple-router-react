import React from 'react';
import './footer.css';


class Footer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: props.name
        }
    }
    render() {
        return (
            <footer className="bg-light text-center text-lg-start footer">
                <div className="text-center p-3">
                    {this.state.name}  © 2021 Copyright
                   
                </div>
            </footer>
        )
    }
}

Footer.defaultProps = {
    name: "Karim"
}

export default Footer;