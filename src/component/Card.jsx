import React from 'react'

function Card({result}) {
    return  <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{result.plan}</h5>
        <h6 className="card-price text-center">${result.price}<span className="period">/month</span></h6>
        <hr/>
        <ul className="fa-ul">
          <li className={result.isUser?"":"text-muted"}><span className="fa-li"><i className={result.isUser?"fas fa-check":"fas fa-times"}></i></span>{result.plan !=="Free"?<b>{result.user}</b>:result.user}</li>
          <li className={result.isStorage?"":"text-muted"}><span className="fa-li"><i className={result.isStorage?"fas fa-check":"fas fa-times"}></i></span>{result.storage}</li>
          <li className={result.ispublicProjects?"":"text-muted"}><span className="fa-li"><i className={result.ispublicProjects?"fas fa-check":"fas fa-times"}></i></span>{result.publicProjects}</li>
          <li className={result.iscommunityAccess?"":"text-muted"}><span className="fa-li"><i className={result.iscommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{result.communityAccess}</li>
          <li className={result.isprivateProjects?"":"text-muted"}><span className="fa-li"><i className={result.isprivateProjects?"fas fa-check":"fas fa-times"}></i></span>{result.privateProjects}</li>
          <li className={result.isphoneSupport?"":"text-muted"}><span className="fa-li"><i className={result.isphoneSupport?"fas fa-check":"fas fa-times"}></i></span>{result.phoneSupport}</li>
          <li className={result.issubDomain?"":"text-muted"}><span className="fa-li"><i className={result.issubDomain?"fas fa-check":"fas fa-times"}></i></span>{result.plan==="Pro"?<><b>Unlimited</b> {result.subDomain}</>:result.subDomain}</li>
          <li className={result.isreports?"":"text-muted"}><span className="fa-li"><i className={result.isreports?"fas fa-check":"fas fa-times"}></i></span>{result.reports}</li>
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
  }
  
export default Card