const Home = ({info}) => {
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>Welcome {info.username}</p>
        </div>
     );
}
 
export default Home;