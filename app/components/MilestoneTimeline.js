import React from 'react';


class MilestoneTimeline extends React.Component {
    render() {
      return (
        <div className="row bs-wizard">
           <div className="col-xs-3 bs-wizard-step complete">
             <div className="text-center bs-wizard-stepnum">Step 1</div>
             <div className="progress"><div className="progress-bar"></div></div>
             <a href="#" className="bs-wizard-dot"></a>
           </div>

           <div className="col-xs-3 bs-wizard-step complete">
             <div className="text-center bs-wizard-stepnum">Step 2</div>
             <div className="progress"><div className="progress-bar"></div></div>
             <a href="#" className="bs-wizard-dot"></a>
           </div>

           <div className="col-xs-3 bs-wizard-step active">
             <div className="text-center bs-wizard-stepnum">Step 3</div>
             <div className="progress"><div className="progress-bar"></div></div>
             <a href="#" className="bs-wizard-dot"></a>
           </div>

           <div className="col-xs-3 bs-wizard-step disabled">
             <div className="text-center bs-wizard-stepnum">Step 4</div>
             <div className="progress"><div className="progress-bar"></div></div>
             <a href="#" className="bs-wizard-dot"></a>
           </div>
       </div>
      );
    }
  }

export default MilestoneTimeline
