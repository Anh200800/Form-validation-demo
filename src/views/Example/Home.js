import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {

            this.props.history.push('/todo')
        }, 3000)
    }

    render() {
        // let ListUsers = this.props.dataRedux;
        return (

            <div>hello</div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
export default withRouter(Home);