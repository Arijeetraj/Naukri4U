const ResumePreview = ({ formData }) => {
    return (
      <div className="border p-4">
        <h1>{formData.name}</h1>
        <p>{formData.email}</p>
        <p>{formData.phone}</p>
        <p>{formData.education}</p>
        <p>{formData.experience}</p>
      </div>
    );
  };
  
  export default ResumePreview;
  