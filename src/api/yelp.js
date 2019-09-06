import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer qnUrcHGLBrBdKGJ1Iyp2BbEGWLY7IhzvGX4dVL8nsZnjUFlbaHPk3w0hh_RBiUWZVW-7bnauUddoouVjzvjVdyTDJ3p1uNr63BUH6d-eiURmqlwIiigw1i7ih2lxXXYx'
    }
});

