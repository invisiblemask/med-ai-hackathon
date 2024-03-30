const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "PATIENT", uid: "patient", sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "MODALITY", uid: "modality", sortable: true},
  {name: "BODY PART", uid: "bodyPart", sortable: true},
  {name: "STUDY DATE", uid: "studyDate", sortable:true},
  {name: "DATE RECEIVED", uid: "dateReceived", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const users = [
  {
    id: 1,
    patient: "Tony Reichert",
    modality: "CEO",
    bodyPart: "ManstudyDatement",
    status: "active",
    studyDate: "29",
    dateReceived: "12 November 2024",
  },
  {
    id: 2,
    patient: "Zoey Lang",
    modality: "Tech Lead",
    bodyPart: "Development",
    status: "paused",
    studyDate: "25",
    dateReceived: "12 November 2024",
  },
  {
    id: 3,
    patient: "Jane Fisher",
    modality: "Sr. Dev",
    bodyPart: "Development",
    status: "active",
    studyDate: "22",
    dateReceived: "12 November 2024",
  },
  {
    id: 4,
    patient: "William Howard",
    modality: "C.M.",
    bodyPart: "Marketing",
    status: "vacation",
    studyDate: "28",
    dateReceived: "12 November 2024",
  },
  {
    id: 5,
    patient: "Kristen Copper",
    modality: "S. ManstudyDater",
    bodyPart: "Sales",
    status: "active",
    studyDate: "24",
    dateReceived: "12 November 2024",
  },
  
];

export {columns, users, statusOptions};
