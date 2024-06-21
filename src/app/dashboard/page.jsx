'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getAccount } from '@/services/getAccount';
import axios from 'axios';
import { Toaster, toast } from 'sonner';

export default function Dashboard() {

    useEffect(() => {
        const msg = localStorage.getItem('toastMessage');
        if (msg) {
            toast.success(msg);
            localStorage.removeItem('toastMessage');
        }
    });

    const acc = Cookies.get('acc');

    const [selectedImage, setSelectedImage] = useState('/user.jpg');

    const [account, setAccount] = useState({ name: '', last_name: '' });

    useEffect(() => {

        getAccount('account/' + acc).then((data) => {
            if (data.code == 200) {
                setAccount(data.context);
            }
        });

    }, []);

    const [imagenURL, setImagenURL] = useState('/user.jpg');

    useEffect(() => {
        const obtenerImagen = async () => {
            try {
                const response = await axios.get('http://localhost:5000/avatar/' + acc);  // Reemplaza 'nombre_del_archivo.jpg' con el nombre de la imagen que quieres mostrar
                setImagenURL(response.request.responseURL);
            } catch (error) {
                console.error('Hubo un problema al obtener la imagen', error);
            }
        };

        obtenerImagen();
    }, []);



    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {

            const ednpoint = 'http://localhost:5000/upload-avatar/' + acc

            const response = await axios.post(ednpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            localStorage.setItem('toastMessage', 'Avatar saved successfully');

        } catch (error) {
            console.error('Error:', error);
        }
        window.location.reload();
    };



    return (
        <main className="w-full p-8 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold my-10">Profile</h1>
            <img className="border rounded-full" src={imagenURL} width={128} height={128} alt="Profile Image" />
            <h2 className="text-sm font-semibold my-4">{account.name} {account.last_name}</h2>
            <div className="max-w-sm my-10">
                <input
                    onChange={handleFileChange}
                    type="file"
                    name="file-input"
                    id="file-input"
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
                    accept="image/*"
                />

                <button onClick={handleUpload} className='w-full border border-gray-300 py-1 rounded my-8'>Save</button>
            </div>
            <Toaster />
        </main>
    );
}
