import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "../page/HomePage";
import Login from "../page/Login";
import InstituteManagement from "../features/InstituteManagement";
import ModuleManagement from "../features/ModuleManagement";
import TrainerManagementDetails from "../features/TrainerManagementDetails";
import TrainerManagementList from "../features/TrainerManagementList";
import TraineeManagementDetails from "../features/TraineeManagementDetails";
import TraineeManagementList from "../features/TraineeManagementList";
import Report from "../features/Report";
import Hrms from "../features/Hrms";
import Settings from "../features/Settings";
import AddManageBatch from "../features/AddManageBatch";
import Apps from "../features/Apps";
import OnlineLecture from "../features/OnlineLecture";
import ManageBatchList from "../features/ManageBatchList";
import QuestionBankList from "../features/QuestionBankList";
import QuestionBankDetail from "../features/QuestionBankDetail";
import Module from "../features/Module";
import MetaData from "../features/module-navbar/MetaData";
import IntroductoryVideo from "../features/module-navbar/IntroductoryVideo";
import TableOfContent from "../features/module-navbar/TableOfContent";
import UploadContent from "../features/module-navbar/UploadContent";
import Assessment from "../features/module-navbar/Assessment";
import Assignment from "../features/module-navbar/Assignment";

const Content = () => {

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/admin/home" component={HomePage} exact />
            <Route path="/institute-management" component={InstituteManagement} exact />
            <Route path="/trainer-management/add-trainer" component={TrainerManagementDetails} exact />
            <Route path="/trainer-management/:id" component={TrainerManagementDetails} exact />
            <Route path="/trainer-managements" component={TrainerManagementList} exact />
            <Route path="/module-management" component={ModuleManagement} exact />
            <Route path="/trainee-managements" component={TraineeManagementList} exact />
            <Route path="/trainee-management/add-trainee" component={TraineeManagementDetails} exact />
            <Route path="/trainee-management/:id" component={TraineeManagementDetails} exact />
            <Route path="/report" component={Report} exact />
            <Route path="/hrms" component={Hrms} exact />
            <Route path="/setting" component={Settings} exact />
            {/* <Route path="/manage-batch/:id" component={AddManageBatch} exact /> */}
            <Route path="/manage-batches" component={ManageBatchList} exact />
            <Route path="/manage-batch/add-batch" component={AddManageBatch} exact/>
            <Route path="/app" component={Apps} exact /> 
            <Route path="/question-banks" component={QuestionBankList} exact />
            <Route path="/question-bank/add-questionbank" component={QuestionBankDetail} exact />
            <Route path="/question-bank/:id" component={QuestionBankDetail} exact />
            <Route path="/online-lecture" component={OnlineLecture} exact />
            <Route path="/module-management/modules" component={Module} exact />
            <Route path="/module-management/meta-data" component={MetaData} exact />
            <Route path="/module-management/introductory-video" component={IntroductoryVideo} exact />
            <Route path="/module-management/table-of-content" component={TableOfContent} exact />
            <Route path="/module-management/upload-content" component={UploadContent} exact />
            <Route path="/module-management/assessment" component={Assessment} exact />
            <Route path="/module-management/assignment" component={Assignment} exact />

          </Switch>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Content;
