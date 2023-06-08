const COHORT_NAME = '2303-FTB-ET-WEB-AM'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const fetchPosts = async(token) => {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            headers: {
                'Content-Type': 'applicationn/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const results = await response.json();
        return results; 
    } catch(error) {
        console.error(error);
    }
};
//to log in 
export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: {username, password}})
        })
        const result = await response.json();
        return result;
    } catch(error) {
        console.log(error, "Error while logging in user")
    }
};


//to create a new user.
export const createUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify({ user: { username: username, password: password}})
        })
        const result = await response.json();
        return result;
    } catch(error) {
        console.log(error, 'Error while registering new user!')
    }
};

// to see user details. 
export const getUserDetails = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const result = await response.json();
        return result;
    } catch(error) {
        console.log(error, 'Error getting users details')
    }
};

//to create new post 

export const createNewPost = async (token, {title, description, location, price, willDeliver}) => {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "Post",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ post: { title, description, location, price, willDeliver}})
        })
        const result = await response.json();
        return result;
    } catch(error) {
        console.log(error, "error creating a new post")
    }
};

export const deletePost = async (token, postID) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error, 'Error deleting post')
    }
}

export const newMessage = async (token, {postID, message}) => {
    try {
        const response = await fetch (`${BASE_URL}/posts/${postID}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({message})
        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error, "error making a new message")
    }
}

export const updateYourPost = async ({title, description, price, location, willDeliver, postID, token}) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postID}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({posts: {title, description, price, location, willDeliver}})
        })
        const result = await response.json();
        return result;
    } catch(error) {
       console.log(error, "error updating your post!")
    }
}
