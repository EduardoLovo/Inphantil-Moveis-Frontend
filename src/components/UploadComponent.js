import { useState } from "react";
import { useUpload } from "../hooks/useUpload";

const UploadComponent = () => {
    const { uploadFile, isLoading, error } = useUpload();
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return alert("Selecione um arquivo primeiro!");

        try {
            const response = await uploadFile(file, "Meu Arquivo");
            console.log("Upload bem-sucedido!", response);
        } catch (error) {
            console.error("Erro no upload:", error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={isLoading}>
                {isLoading ? "Enviando..." : "Fazer Upload"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default UploadComponent;
