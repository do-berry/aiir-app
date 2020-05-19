import React from 'react';
import Table from 'react-bootstrap/Table';
import './AllTasksComponent.css';

class AllTasksComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/addnewtask/')
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }

    formatDate(string){
        var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    render() {
        return (
            <div className='table'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Config file</th>
                            <th>.obj file</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((value, index) => {
                            return <tr key={index}>
                                <td>{this.formatDate(value.created_at)}</td>
                                <td>TODO</td>
                                <td>{value.configJSONFile}</td>
                                <td>TODO</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default AllTasksComponent;