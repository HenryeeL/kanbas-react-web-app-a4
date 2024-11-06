import AssignmentButtons from "./AssignmentButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import SingleAssignmentButtons from "./SingleAssignmentButtons";
import SingleAssignmentButtonsBefore from "./SingleAssignmentButtonsBefore";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, editAssignment, deleteAssignment, updateAssignment } from "./reducer";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";

export default function Assignments({ isFaculty }: { isFaculty: boolean }) {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const [assignmentName, setAssignmentName] = useState('');
  const [assignmentDueDate, setAssignmentDueDate] = useState(new Date());
  const [assignmentPoints, setAssignmentPoints] = useState(100);
  const [assignmentAvailableFrom, setAssignmentAvailableFrom] = useState(new Date());

  return (
    <ul id="wd-assignments" className="list-group rounded-0">
      <AssignmentButtons
        isFaculty={isFaculty}
      />
      <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
        <div id="wd-assignment-title" className="p-3 ps-2 bg-secondary">
          <FaPlus className="ps-2 me-4" /><b>ASSIGNMENTS</b>
          <AssignmentControls isFaculty={isFaculty} />
          
        </div>

        <ul id="wd-assignment-list" className="list-group">
          {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
            <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-center" style={{ marginRight: '10px' }}>
                <SingleAssignmentButtonsBefore />
              </div>
              <div className="flex-grow-1">
                {!assignment.editing && (
                  <>
                    <Link className="wd-assignment-link text-dark"
                      to={assignment._id}>
                      <b>{assignment.title}</b>
                    </Link><br />
                  </>
                )}

                {isFaculty &&
                  <SingleAssignmentButtons
                    assignmentId={assignment._id}
                    deleteAssignment={() => { dispatch(deleteAssignment(assignment._id)) }}
                  />}
                <span className="wd-assignment-description text-secondary">
                  <span className="text-danger">Multiple Modules</span> |
                  <b>Not available until</b> {assignment.availableFrom || 'N/A'} |
                </span><br />
                <span className="wd-assignment-due text-secondary">
                  <b>Due</b> {assignment.due || 'N/A'} | {assignment.points || '0'} pts
                </span>
              </div>
            </li>
          ))}

        </ul>

      </li>
    </ul>
  );
}
