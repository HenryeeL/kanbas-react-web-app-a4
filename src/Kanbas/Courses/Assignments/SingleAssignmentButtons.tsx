import React from 'react'
import GreenCheckmark from '../Modules/GreenCheckmark'
import { IoEllipsisVertical } from 'react-icons/io5'
import { FaTrash } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'
import DeleteComfirm from './DeleteComfirm'

const SingleAssignmentButtons = (
  { assignmentId, deleteAssignment }: 
  { 
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
  }
) => {
  return (
    <div className='float-end'>
      <FaTrash className="fs-5 text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-delete-dialog"/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      
      <DeleteComfirm dialogTitle="Delete Assignment" deleteAssignment={() => deleteAssignment(assignmentId)} />
    </div>
  )
}

export default SingleAssignmentButtons
