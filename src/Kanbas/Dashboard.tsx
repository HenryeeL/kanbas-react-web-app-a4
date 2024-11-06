import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addEnrollment, deleteEnrollment } from './reducer';

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {
  
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser.role === "FACULTY";
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const isStudent = currentUser.role === "STUDENT";
    const [showEnroll, setShowEnroll] = useState(true);
    const handleShowAllCourses = () => {
      setShowEnroll(!showEnroll);
    }
    const dispatch = useDispatch();
  return (
    <div id='wd-dashboard'>
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        {/* FOR STUDENT: show enrollment */}
        { isStudent && (
          <>
            <button 
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleShowAllCourses} 
            >
              Enrollment 
            </button>
          </>
        )}
        
        {/* FOR FACULTY: edit courses */}
        { isFaculty && (
          <>
            <h5>New Course
              <button 
                className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse} 
              >
                Add 
              </button>
              <button 
                className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click"
              >
                Update
              </button>
            </h5> <br />
            <input value={course.name} className="form-control mb-2"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <textarea value={course.description} className="form-control"
                  onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
            <hr />
          </>
        )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />

      <div id='wd-dashboard-courses' className='row'>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          { showEnroll ? (
            <>
              {courses.filter((course) =>
                enrollments.some((enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
              )).map((course) => (
              <div key={course.id} className='wd-dashboard-course col' style={{ width: '270px' }}>
                <div className='card rounded-3 overflow-hidden'>
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course._id}/Home`}>
                    <img src={ course.img ? course.img : `/images/reactjs.jpg`} width="100%" height={160} />
                    <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name}
                        </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description}
                        </p>
                        <button className="btn btn-primary"> Go </button>
                        { isFaculty && (
                          <>
                            <button onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }} className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end" >
                              Edit
                            </button>
                          </>
                        )}
    
                    </div>
                  </Link>
                </div>
            </div>
              ))}
          </>
          ) : (
            <>
            {courses.map((course) => (
              <div key={course.id} className='wd-dashboard-course col' style={{ width: '270px' }}>
                <div className='card rounded-3 overflow-hidden'>
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course._id}/Home`}>
                    <img src={ course.img ? course.img : `/images/reactjs.jpg`} width="100%" height={160} />
                    <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name}
                        </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description}
                        </p>
                        <button className="btn btn-primary"> Go </button>
                        { enrollments.some((enrollment: any) =>
                            enrollment.user === currentUser._id &&
                            enrollment.course === course._id) ? (
                          <button onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteEnrollment({ user: currentUser._id, course: course._id }));
                          }} className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button onClick={(event) => {
                            event.preventDefault();
                            dispatch(addEnrollment({ user: currentUser._id, course: course._id }));
                          }} className="btn btn-primary float-end"
                          id="wd-delete-course-click"
                          >
                            Enroll
                          </button>
                        )}

    
                    </div>
                  </Link>
                </div>
            </div>
              ))}
            </>
          )}


        </div>
      </div>
    </div>
  );
}
