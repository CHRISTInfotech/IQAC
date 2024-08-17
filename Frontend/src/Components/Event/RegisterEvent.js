import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import AdminDashboard from '../Admin/AdminDashboard';

function RegisterEvent() {
  const [department, setDepartment] = useState('');
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [campus, setCampus] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [numberOfActivities, setNumberOfActivities] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [venue, setVenue] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [eventTypeFocus, setEventTypeFocus] = useState('');
  const [proposal, setProposal] = useState(null);
  const [collaborators, setCollaborators] = useState([{ name: '', department: '', campus: '' }]);
  const [tag, setTag] = useState('');

  const handleCollaboratorChange = (index, field, value) => {
    const updatedCollaborators = [...collaborators];
    updatedCollaborators[index][field] = value;
    setCollaborators(updatedCollaborators);
  };

  const addCollaborator = () => {
    setCollaborators([...collaborators, { name: '', department: '', campus: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      department,
      eventType,
      description,
      campus,
      eventTitle,
      numberOfActivities,
      startDate,
      endDate,
      startTime,
      endTime,
      venue,
      academicYear,
      eventTypeFocus,
      proposal,
      collaborators,
      tag,
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <AdminDashboard />
        </div>
        <div className="col-7 mt-1 pt-2 d-flex justify-content-center">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="text-center fw-bolder fs-5 mt-5">
              Event Registration Form
              <hr />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <div className="col">
                  <label htmlFor="department" className="form-label">Department</label>
                  <select
                    id="department"
                    className="form-select"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="">Select Department</option>
                                                <option value="">Data Science</option>
                                                <option value="">Law</option>
                                                <option value="">BBA</option>
                                                <option value="">MBA</option>
                                                <option value="">Commerce</option>
                                                <option value="">Language</option>
                                                <option value="">Others</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="campus" className="form-label">Campus</label>
                <select
                  id="campus"
                  className="form-select"
                  value={campus}
                  onChange={(e) => setCampus(e.target.value)}
                >
                  <option value="">Select Campus</option>
                  {/* Add other campus options */}
                  <option value="Christ University Bangalore Central Campus">Christ University Bangalore Central Campus</option>
                  <option value="Christ University Bangalore Bannerghatta Road Campus">Christ University Bangalore Bannerghatta Road Campus</option>
                  <option value="Christ University Bangalore Kengeri Campus">Christ University Bangalore Kengeri Campus</option>
                  <option value="Christ University Bangalore Yeshwanthpur Campus">Christ University Bangalore Yeshwanthpur Campus</option>
                  <option value="Christ University Delhi NCR Off Campus">Christ University Delhi NCR Off Campus</option>
                  <option value="Christ University Pune Lavasa Off Campus">Christ University Pune Lavasa Off Campus</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Collaborators</label>
                {collaborators.map((collaborator, index) => (
                  <div key={index} className="row mb-2">
                    <div className="col">
                      <select
                        className="form-select"
                        value={collaborator.campus}
                        onChange={(e) => handleCollaboratorChange(index, 'campus', e.target.value)}
                      >
                        <option value="">Select Campus</option>
                        <option value="Christ University Bangalore">Christ University Bangalore Central Campus</option>
                        <option value="Christ University Lavasa">Christ University Pune Lavasa Off Campus</option>
                      </select>
                    </div>
                    <div className="col">
                      <select
                        className="form-select"
                        value={collaborator.department}
                        onChange={(e) => handleCollaboratorChange(index, 'department', e.target.value)}
                      >
                        <option value="">Select Department</option>
                        <option value="Data Science">Data Science</option>
                        <option value="MBA">MBA</option>
                        <option value="Language">Language</option>
                      </select>
                    </div>
                    <div className="col">
                      <InputText
                        type="text"
                        value={collaborator.name}
                        onChange={(e) => handleCollaboratorChange(index, 'name', e.target.value)}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                ))}
                <Button label="Add Collaborator" icon="pi pi-plus" onClick={addCollaborator} />
              </div>

              <div className="mb-3">
                <label htmlFor="eventTitle" className="form-label">Event Title</label>
                <InputText
                  id="eventTitle"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="Enter event title"
                  className="w-100"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <Editor
                  id="description"
                  value={description}
                  onTextChange={(e) => setDescription(e.htmlValue)}
                  style={{ height: '150px' }}
                  placeholder="Enter description here..."
                />
              </div>
             
             
              <div className="mb-3">
                <label htmlFor="numberOfActivities" className="form-label">Number of Activities</label>
                <InputText
                  id="numberOfActivities"
                  type="number"
                  value={numberOfActivities}
                  onChange={(e) => setNumberOfActivities(e.target.value)}
                  placeholder="Enter number of activities"
                  className="w-100"
                />
              </div>
              <div className="mb-3 row">
                <div className="col">
                  <label htmlFor="startDate" className="form-label">Start Date</label>
                  <InputText
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-100"
                  />
                </div>
                <div className="col">
                  <label htmlFor="endDate" className="form-label">End Date</label>
                  <InputText
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-100"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col">
                  <label htmlFor="startTime" className="form-label">Start Time</label>
                  <InputText
                    type="time"
                    id="startTime"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-100"
                  />
                </div>
                <div className="col">
                  <label htmlFor="endTime" className="form-label">End Time</label>
                  <InputText
                    type="time"
                    id="endTime"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-100"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="venue" className="form-label">Venue</label>
                <InputText
                  id="venue"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="Enter venue"
                  className="w-100"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="academicYear" className="form-label">Academic Year</label>
                <select
                  id="academicYear"
                  className="form-select"
                  value={academicYear}
                  onChange={(e) => setAcademicYear(e.target.value)}
                >
                  <option value="">Select Year</option>
                  {Array.from({ length: 27 }, (_, i) => 2024 + i).map((year) => (
                    <option key={year} value={`${year}-${year + 1}`}>{year}-{year + 1}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="eventTypeFocus" className="form-label">Event Type</label>
                <InputText
                  id="eventTypeFocus"
                  value={eventTypeFocus}
                  onChange={(e) => setEventTypeFocus(e.target.value)}
                  placeholder="Enter event type"
                  className="w-100"
                />
              </div>
              
              
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <InputText
                  id="tag"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="Enter tag"
                  className="w-100"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="proposal" className="form-label">Proposal (PDF)</label>
                <input
                  type="file"
                  className="form-control"
                  id="proposal"
                  accept="application/pdf"
                  onChange={(e) => setProposal(e.target.files[0])}
                />
              </div>
              <div className="mb-3">
                <Button label="Submit" type="submit" className="p-button-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterEvent;
