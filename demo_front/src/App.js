import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./component/Intro";
import Main from "./component/Main";
import Join from "./component/Join";
import Login from "./component/Login";
import TableCheck from "./component/TableCheck";
import IntroText from "./component/IntroText";
import CourseCheck from "./component/CourseCheck";
import MyPage from "./component/MyPage";
import ClasCheck from "./component/ClassCheck";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Intro} exact={true} />
          <Route path="/intro" component={Intro} exact={true} />
          <Route path="/main" component={Main} exact={true} />
          <Route path="/join" component={Join} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/tableCheck" component={TableCheck} exact={true} />
          <Route path="/courseCheck" component={CourseCheck} exact={true} />
          <Route path="/myPage" component={MyPage} exact={true} />
          <Route path="/classCheck" component={ClasCheck} exact={true}/>
            render={({ location }) => (
              <div>
                <h2>ERROR</h2>
                <h2>이 페이지는 존재하지 않습니다.</h2>
              </div>
            )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
