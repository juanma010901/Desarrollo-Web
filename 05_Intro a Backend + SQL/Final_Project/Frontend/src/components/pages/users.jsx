// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Realiza la solicitud GET al servidor
        axios
            .get("http://localhost:3000/users")
            .then((response) => {
                // Si la solicitud es exitosa, accede a los datos devueltos por el servidor
                setData(response.data);
            })
            .catch((error) => {
                // Si hay algún error en la solicitud, puedes manejarlo aquí
                console.error("Error al hacer la solicitud:", error);
            });
    }, [data]);

    return (
        <div>
            {/* Renderizar los datos obtenidos del servidor */}
            <ul className="ul">
                {data.map((item) => (
                    <li className="li" key={item._id}>
                        <strong className="li-strong">Nombre:</strong> {item.name} <br />
                        <strong className="li-strong">Rol:</strong> {item.rol} <br />
                        <strong className="li-strong">Email:</strong> {item.email} <br />
                        <strong className="li-strong">Nombre de Usuario: @</strong> {item.username} <br />
                        <strong className="li-strong">ID:</strong> {item._id} <br />
                    </li>
                ))}
            </ul>
            <Link to="/">
                <button>Regresar a home</button>
            </Link>
        </div>
    );
};

export default Users;
