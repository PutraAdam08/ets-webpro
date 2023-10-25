import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';
import 'boxicons';

function Homepage() {

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();
 
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }
 
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row my-5"></div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                            <Carousel style={{height: '32em', width: '32em'}}>
                                <Carousel.Item>
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                    </div>
                    <div className="col-auto">
                        <div className="row">
                            <Button bg={'primary'} className="p-5" style={{height: '15.5em', width: '15em'}}>
                                <div className="row justify-content-center">
                                    <box-icon name='contact' type='solid' color='#ffffff' style={{height: '8em', width: 'auto'}}></box-icon>
                                </div> 
                                <div className="mt-1"> 
                                    <h4 className="text-white text-center">Profile</h4>
                                </div> 
                            </Button>
                        </div>
                        <div className="row" style={{height: '1em', width: '0em'}}>
                        </div>
                        <div className="row">
                            <Button bg={'primary'} className="p-5" style={{height: '15.5em', width: '15em'}}>
                                <div className="row justify-content-center">
                                    <box-icon name='book-open' type='solid' color='#ffffff' style={{height: '8em', width: 'auto'}}></box-icon>
                                </div> 
                                <div className="mt-1"> 
                                    <h4 className="text-white text-center">Recipe</h4>
                                </div> 
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Homepage;
