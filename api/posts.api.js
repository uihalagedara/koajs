
import {randomBytes} from 'crypto';

const posts = new Map();

export const save = ({text}) => {
    const post = {id:randomBytes(16).toString('hex'), text, postedDate: new Date()};
    posts.set(post.id, post);
    return post;
}

export const get = (id) => {
    const post = posts.get(id);
    if(!post){
        throw new Error(`Not found for the ID ${id}`);
    }
    return post;
}