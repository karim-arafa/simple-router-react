import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: props.user
        }
    }

    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={this.state.user.avatar} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.user.first_name +' '+ this.state.user.last_name}</h5>
                        <p className="card-text">{this.state.user.email}</p>
                    </div>
            </div>
        )
    }
}

export default Profile;