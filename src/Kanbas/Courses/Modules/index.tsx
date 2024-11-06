import ModulesControls from "./ModulesControls";
import ModulesControlButtons from "./ModulesControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import  { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { useState } from "react";
import * as db from "../../Database";
import { addModule, deleteModule, editModule, updateModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules({ isFaculty } : { isFaculty: boolean }) {
  const {cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();
  const {modules} = useSelector((state : any) => state.modulesReducer);
    return (
      <>
        <ModulesControls 
        isFaculty={isFaculty}
        setModuleName={setModuleName} 
        moduleName={moduleName} 
        addModule={() => { 
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} /><br/><br/>

        <ul id="wd-modules" className="list-group rounded-0">
          {modules.filter((module: any) => module.course === cid).map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                { module.editing && isFaculty && (
                  <input className="form-control w-50 d-inline-block"
                        onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            dispatch(updateModule({ ...module, editing: false }));
                          }
                        }}
                        defaultValue={module.name}/>
                )}
                { isFaculty && (
                  <ModulesControlButtons 
                  moduleId={module._id} 
                  deleteModule={() => dispatch(deleteModule(module._id))} 
                  editModule={() => dispatch(editModule(module._id))}/>
                )}
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson : any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      { isFaculty && <LessonControlButtons />}
                    </li>
                  ))}
                </ul>
              )}
              
            </li>
          ))}
        </ul>
      </>
  );
}
