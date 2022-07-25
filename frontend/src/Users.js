import useFetch from './useFetch';

const Users = () => {

    const {data} = useFetch('http://127.0.0.1:8000/api/get_list');

    return ( 
        <div className="users">
            {data.map(datas =>
                <div key={datas.id} className="data_items">
                    <h2>user_id: {datas.id}</h2>
                    <h2>username: {datas.username}</h2>
                    <h2>date joined: {datas.date_joined}</h2>
                </div> )}
        </div>
     );
}

export default Users;