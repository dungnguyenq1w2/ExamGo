import React, { useState } from "react";
import EditExamForm from "../components/EditExamForm";

function EditExam() {
    const [exam, setExam] = useState([]);
    // useEffect(() => {
    //     const fetchExam = async () => {
    //         try {
    //             const id = router.query.idExam;

    //             const url = `${process.env.NEXT_PUBLIC_API_URL}/exams/${id}/update`;
    //             //const token = localStorage.getItem("REFRESH_TOKEN");
    //             const res = await axios.get(url, {
    //                 headers: {
    //                     access_token: localStorage.getItem("REFRESH_TOKEN"),
    //                 },
    //             });

    //             if (res.data) setExam(res.data);
    //         } catch (error) {
    //             console.log("Failed to fetch exam:", error);
    //         }
    //     };
    //     fetchExam();
    // }, [router.query.idExam]);
    return (
        <div className="p-5">
            <EditExamForm exam={exam} />
        </div>
    );
}

export default EditExam;
