import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    state = {
        arrjobs: [
            { id: 'abc job1', title: 'developer', salary: '500' },
            { id: 'abc job2', title: 'tester', salary: '400' },
            { id: 'abc job3', title: 'project Maneger', salary: '1000' }
        ]

    }
    addNewJob = (job) => {
        let currenJobs = this.state.arrjobs;
        currenJobs.push(job)
        this.setState({
            // arrJobs: [...this.state.arrjobs, job]
            arrjobs: currenJobs

        })
    }
    deleteAJob = (job) => {
        let currenJobs = this.state.arrjobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrjobs: currenJobs
        })
    }

    render() {
        console.log('all render: ', this.state)
        return (

            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrjobs={this.state.arrjobs}
                    deleteAJob={this.deleteAJob}
                />


            </>


        )
    }
}
export default MyComponent;