import { useParams } from 'react-router-dom';
import { useFetchUser } from '../Hooks/useFetchUsers';
import { useState, useEffect } from 'react';

const Detalles = () => {
  const [dentista, setDentista] = useState({});
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  const data = useFetchUser(url);

  useEffect(() => {
    if (data) {
      setDentista(data);
    }
  }, [data]);

  return (
    <>
      {data && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Detalles dentista de ID: {dentista.id}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Nombre:</th>
                <td>{dentista.name}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{dentista.email}</td>
              </tr>
              <tr>
                <th>Teléfono:</th>
                <td>{dentista.phone}</td>
              </tr>
              <tr>
                <th>Website:</th>
                <td>{dentista.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Detalles;


