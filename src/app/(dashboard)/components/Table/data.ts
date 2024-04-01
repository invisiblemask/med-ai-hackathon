const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "PATIENT", uid: "patient", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "MODALITY", uid: "modality", sortable: true },
  { name: "BODY PART", uid: "bodyPart", sortable: true },
  { name: "STUDY DATE", uid: "studyDate", sortable: true },
  { name: "DATE RECEIVED", uid: "dateReceived", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [


];

export { columns, users, statusOptions };
