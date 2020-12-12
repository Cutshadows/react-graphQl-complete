import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const CREATE_MESSAGE = gql`
        mutation CreateMessage( $title:String!, $content:String!, $author:String!){
                createMessage(title: $title, content:$content, author:$author ){
                    _id
                    author
                }
            }
`;

const MessageForm = ({history}) => {

    // const createMessage=
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [createMessage]=useMutation(CREATE_MESSAGE);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await createMessage({variables:{title, content, author}})
        
        setTimeout(() => {
            history.goBack(); 
        }, 2000); 
    }   
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="author" 
                                    className="form-control" 
                                    onChange={e => setAuthor(e.target.value)} 
                                    value={author}/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="write a title" 
                                    className="form-control" 
                                    onChange={e => setTitle(e.target.value)}
                                    value={title} />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    rows="2" 
                                    placeholder="Content..." 
                                    className="form-control" 
                                    onChange={e => setContent(e.target.value)}
                                    value={content}></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success btn-primary btn-block"> Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageForm;