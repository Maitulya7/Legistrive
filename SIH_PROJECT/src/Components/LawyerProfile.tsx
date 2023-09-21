import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import './style/LawyerProfile.css';

interface WorkerInfo {
  BIO: string;
  FIRSTNAME: string;
  LASTNAME: string;
  MOBILENUMBER: string;
  LANGUAGES: string[];
  SPECIALITIES: string[];
  EMAIL: string;
  CASES_ASSIGNED: number;
  CASES_SOLVED: number;
  EXPERIENCE: string;
  LOCATION: string;
  SERVICE_CHARGE: number;
}

const Dashboard: React.FC = () => {
  const [currWorker, setCurrWorker] = useState<WorkerInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState('');
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/getLawyerData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ MOBILENUMBER: id }), // Use user email as MOBILENUMBER
      });

      if (response.ok) {
        const data = await response.json();
        setCurrWorker(data.data);
        console.log(data.data);
      } else {
        console.error('Failed to fetch lawyer data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeModal = () => {
    // Close the modal and reset input fields
    setIsModalOpen(false);
    setServiceCategory('');
    setServiceDescription('');
    setIsPrivate('');
  };
  const openModal = () => {
    setIsModalOpen(true);
    console.log('click')
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to the server
    // You can access the input values as serviceCategory, serviceDescription, and isPrivate
    // After submitting, you may want to close the modal
    closeModal();
  };

  const BookLawyer = async () => {
    try {
      const response = await fetch('http://localhost:3000/getLawyerData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ MOBILENUMBER: id }), // Use user email as MOBILENUMBER
      });

      if (response.ok) {
        const data = await response.json();
        setCurrWorker(data.data);
        console.log(data.data);
      } else {
        console.error('Failed to fetch lawyer data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-profile">
        <div className="profile-pic">
          <div className="pic">
            <img style={{ width: '150px' }} src={'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg'} alt="Profile" />
          </div>
          <button className="btn btn-dark" onClick={openModal}>Book Now</button>
        </div>

        <div className="info-container">
          <div className="info-column">
            <div className="box">
              <div className="info">
                <div className="text-value">
                  About <span className="name-style">{currWorker?.FIRSTNAME} {currWorker?.LASTNAME}</span>
                </div>
                {currWorker && <div className="bio">{currWorker.BIO}</div>}
              </div>
            </div>

            <div className="box">
              <div className="info">
                <div className="title">Languages & Specialities</div>
                <div className="details">
                  <div>
                    <strong>Languages:</strong> {currWorker?.LANGUAGES.join(', ')}
                  </div>
                  <div>
                    <strong>Specialities:</strong> {currWorker?.SPECIALITIES.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="info-column">
            <div className="box">
              <div className="info">
                <div className="title">Your Information</div>
                <div className="details">
                  <div>
                    <strong>Name:</strong> {currWorker?.FIRSTNAME} {currWorker?.LASTNAME}
                  </div>
                  <div>
                    <strong>Email:</strong> {currWorker?.EMAIL}
                  </div>
                  <div>
                    <strong>Phone number:</strong> {currWorker?.MOBILENUMBER}
                  </div>
                  <div>
                    <strong>Experience:</strong> {currWorker?.EXPERIENCE}
                  </div>
                  <div>
                    <strong>Location:</strong> {currWorker?.LOCATION}
                  </div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="info">
                <div className="title">Case Information</div>
                <div className="details">
                  <div>
                    <strong>Cases Assigned:</strong> {currWorker?.CASES_ASSIGNED}
                  </div>
                  <div>
                    <strong>Cases Solved:</strong> {currWorker?.CASES_SOLVED}
                  </div>
                  <div>
                    <strong>Service Charge:</strong> ${currWorker?.SERVICE_CHARGE}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
      <div className="modal" style={{backgroundColor: "black"}}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="serviceCategory">Service Category:</label>
              <input
                type="text"
                id="serviceCategory"
                value={serviceCategory}
                onChange={(e) => setServiceCategory(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceDescription">Service Description:</label>
              <textarea
                id="serviceDescription"
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="isPrivate">Is Private:</label>
              <input
                type="text"
                id="isPrivate"
                value={isPrivate}
                onChange={(e) => setIsPrivate(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )}
    </div>
  );
};

export default Dashboard;
