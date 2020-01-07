import React from 'react';

const ErrorPage = ()=>{
    return (
        <section className="card-grey vh-100">
  <header className="tc ph5 lh-copy">
      <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight blue">404</h1>
      <h2 className="tc f1-l fw1 white">Sorry, we can't find the page you are looking for.</h2>
  </header>
  <p className="fw1 i tc mt4 mt5-l f4 f3-l white">Are you looking for one of these?</p>
  <ul className="list tc pl0 w-100 mt5">
    <li className="dib"><a className="f5 f4-ns link white db pv2 ph3 hover-blue" href="/">Home</a></li>
  </ul>
</section>
    );
}

export default ErrorPage;