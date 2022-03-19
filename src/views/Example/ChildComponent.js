import React from 'react';
class ChildComponent extends React.Component {
    state = {
        showjobs: false
    }
    handleShowHide = () => {
        this.setState({
            showjobs: !this.state.showjobs
        })
    }
    handleOnclickDelete = (job) => {
        this.props.deleteAJob(job)
    }

    render() {
        let { arrjobs } = this.props;
        let { showjobs } = this.state;
        let check = showjobs === true ? 'showjobs = true' : 'showjobs = false';
        return (

            <>
                {showjobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='job-lists'>
                            {
                                arrjobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$
                                            <></><span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let { arrjobs } = props;
//     return (

//         <>
//             <div className='job-lists'>
//                 {
//                     arrjobs.map((item, index) => {
//                         if (+item.salary >= 500)
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;