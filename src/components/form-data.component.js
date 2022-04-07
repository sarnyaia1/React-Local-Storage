import React, { Component } from 'react';

export default class FormDataComponent extends Component {
    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeLabels = this.onChangeLabels.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            location: '',
            mainType: '',
            labels: ''
        }
    }

    // Form Values
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeLocation(e) {
        this.setState({ location: e.target.value })
    }

    onChangeType(e) {
        this.setState({ mainType: e.target.value })
    }

    onChangeLabels(e) {
        this.setState({ labels: e.target.value })
    }


    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                location: this.userData.location,
                mainType: this.userData.mainType,
                labels: this.userData.labels
            })
        } else {
            this.setState({
                name: '',
                location: '',
                mainType: '',
                labels: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Sample Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" value={this.state.location} onChange={this.onChangeLocation} />
                    </div>
                    <div className="form-group">
                        <label>Main type</label>
                        <input type="text" className="form-control" value={this.state.mainType} onChange={this.onChangeType} />
                    </div>
                    <div className="form-group">
                        <label>Public labels</label>
                        <input type="text" className="form-control" value={this.state.labels} onChange={this.onChangeLabels} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}