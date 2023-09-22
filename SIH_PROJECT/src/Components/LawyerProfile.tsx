import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const CUSTOMER_MOBILENUMBER = localStorage.getItem('phoneNumber') ;
      // localStorage.getItem('phonenumber')
      if (!CUSTOMER_MOBILENUMBER) {
        console.error('Customer mobile number not found in local storage.');
        return;
      }
      
      const requestBody = {
        CUSTOMER_MOBILENUMBER,
        LAWYER_MOBILENUMBER: currWorker?.MOBILENUMBER,
        SERVICE_CHARGE: currWorker?.SERVICE_CHARGE,
        SERVICE_CATEGORY: serviceCategory,
        SERVICE_DESCRIPTION: serviceDescription,
      };
  
      // Send the POST request to book the lawyer
      const response = await fetch('http://localhost:3000/bookLawyer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        toast.success('Query saved successfully');
        console.log('Query saved successfully');
        
        // Close the modal and reset input fields
        closeModal();
      } else {
        console.error('Failed to save query:', response.statusText);
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
        <div className="card-modal scroll">
          <div className="card-modal-content">
            <span className="card-close" onClick={closeModal}>
              &times;
            </span>
            <h2>Send Your Query</h2>
            <div className='card-modal-row'>
              <div className="select-container">
                <label htmlFor="serviceCategory">Service Category:</label>
                <select
                  id="serviceCategory"
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="custom-select" // Add a custom-select class for styling
                >
                  <option value="">Select Service Category</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Criminal Defense">Criminal Defense</option>
                  <option value="Divorce & Child Custody">Divorce & Child Custody</option>
                  <option value="Property & Real Estate">Property & Real Estate</option>
                  <option value="Employment Issues">Employment Issues</option>
                  <option value="Consumer Protection">Consumer Protection</option>
                  <option value="Civil Matters">Civil Matters</option>
                  <option value="Cyber Crime">Cyber Crime</option>
                  <option value="Company & Start-Ups">Company & Start-Ups</option>
                  <option value="Other Legal Problem">Other Legal Problem</option>
                </select>
              </div>
              <div className="select-container">
                <label htmlFor="isPrivate">Is Private:</label>
                <select
                  id="isPrivate"
                  value={isPrivate}
                  onChange={(e) => setIsPrivate(e.target.value)}
                  className="custom-select" // Add a custom-select class for styling
                >
                  <option value="">Select Is Private</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>
            <p>
              Service Description:
              <input
                type="text"
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
              />
            </p>
            <button className="btn" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
