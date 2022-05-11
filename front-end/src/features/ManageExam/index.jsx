import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import CreateExam from "./pages/CreateExam";
import EditExam from "./pages/EditExam";

function ManageExamFeature(props) {
    return (
        <div>
            <Routes>
                <Route path="/create" element={<CreateExam />} />
                <Route path="/edit" element={<EditExam />} />
            </Routes>
        </div>
    );
}

ManageExamFeature.propTypes = {};

export default ManageExamFeature;
