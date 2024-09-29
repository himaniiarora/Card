// Store patients, doctors, and appointments in local storage for simplicity
const patients = [];
const doctors = [];
const appointments = [];

// Patient Management
const patientName = document.getElementById('patientName');
const patientAge = document.getElementById('patientAge');
const patientGender = document.getElementById('patientGender');
const patientContact = document.getElementById('patientContact');
const patientHistory = document.getElementById('patientHistory');
const patientList = document.getElementById('patientList');
const patientSelect = document.getElementById('patientSelect');

document.getElementById('addPatientButton').addEventListener('click', () => {
    const newPatient = {
        name: patientName.value,
        age: patientAge.value,
        gender: patientGender.value,
        contact: patientContact.value,
        history: patientHistory.value
    };
    
    patients.push(newPatient);
    updatePatientList();
    updatePatientSelect();
});

function updatePatientList() {
    patientList.innerHTML = '';
    patients.forEach((patient, index) => {
        const li = document.createElement('li');
        li.textContent = ${patient.name} (${patient.age}, ${patient.gender}) - ${patient.contact};
        patientList.appendChild(li);
    });
}

function updatePatientSelect() {
    patientSelect.innerHTML = '';
    patients.forEach((patient, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = patient.name;
        patientSelect.appendChild(option);
    });
}

// Doctor Management
const doctorName = document.getElementById('doctorName');
const doctorSpecialization = document.getElementById('doctorSpecialization');
const doctorContact = document.getElementById('doctorContact');
const doctorList = document.getElementById('doctorList');
const doctorSelect = document.getElementById('doctorSelect');

document.getElementById('addDoctorButton').addEventListener('click', () => {
    const newDoctor = {
        name: doctorName.value,
        specialization: doctorSpecialization.value,
        contact: doctorContact.value
    };
    
    doctors.push(newDoctor);
    updateDoctorList();
    updateDoctorSelect();
});

function updateDoctorList() {
    doctorList.innerHTML = '';
    doctors.forEach((doctor, index) => {
        const li = document.createElement('li');
        li.textContent = ${doctor.name} - ${doctor.specialization};
        doctorList.appendChild(li);
    });
}

function updateDoctorSelect() {
    doctorSelect.innerHTML = '';
    doctors.forEach((doctor, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = doctor.name;
        doctorSelect.appendChild(option);
    });
}

// Appointment Scheduling
const appointmentDate = document.getElementById('appointmentDate');
const appointmentDescription = document.getElementById('appointmentDescription');
const appointmentList = document.getElementById('appointmentList');

document.getElementById('addAppointmentButton').addEventListener('click', () => {
    const selectedPatient = patients[patientSelect.value];
    const selectedDoctor = doctors[doctorSelect.value];
    const newAppointment = {
        patient: selectedPatient.name,
        doctor: selectedDoctor.name,
        date: appointmentDate.value,
        description: appointmentDescription.value
    };
    
    appointments.push(newAppointment);
    updateAppointmentList();
});

function updateAppointmentList() {
    appointmentList.innerHTML = '';
    appointments.forEach(appointment => {
        const li = document.createElement('li');
        li.textContent = Patient: ${appointment.patient}, Doctor: ${appointment.doctor}, Date: ${appointment.date};
        appointmentList.appendChild(li);
    });
}