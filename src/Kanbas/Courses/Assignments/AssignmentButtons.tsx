import { FaPlus, FaSearch } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { useSelector } from "react-redux"

const AssignmentButtons = ({ isFaculty }: { isFaculty: boolean; }) => { 
  const {assignments} = useSelector((state: any) => state.assignmentsReducer);
  const { cid } = useParams();
  const navigate = useNavigate();
  return (
    <div className="mb-3 d-flex justify-content-between align-items-center">
        <div className="d-flex flex-grow-1" style={{marginRight: '15px'}}>
            <div className="input-group">
                <span className="input-group-text"><FaSearch /></span>
                <input id="wd-search-assignment" type="text" className="form-control" placeholder="Search for Assignments"/>
            </div>
        </div>
        {isFaculty && (
            <div className="d-flex">
              <button
                id="wd-add-assignment"
                className="btn btn-lg btn-danger text-white me-1 float-end"
                onClick={() => {
                  const newId = `A${assignments.length + 1}`;
                  navigate(`/Kanbas/Courses/${cid}/Assignments/${newId}`);
                }}
              >
                <FaPlus className="fs-5" /> Assignment
              </button>
                <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end"><FaPlus className="fs-5"/> Group</button>
            </div>
      )}
    </div>
  )
}

export default AssignmentButtons
