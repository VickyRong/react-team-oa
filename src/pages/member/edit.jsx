import React from 'react';

class MemberDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.params)
    }

    render(){
        return (
            <div>
                <h1>组员列表页</h1>
                <h3 style={{color: 'red'}}>{this.props.params.phone}</h3>
            </div>
        )
    }
}
export default MemberDetail;