import React from 'react';
import {useQuery, useLazyQuery, useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_MESSAGES=gql`
    {
        messages{
            _id
            title
            content 
            author
        }
    }
`;

const MessageList = () => {
    const {loading, error, data}=useQuery(GET_MESSAGES);
    if(loading) return <p className="alert alert-danger">Loading Messages...</p>
    if(error) return <p className="alert alert-danger">Loading Messages...</p>
    console.log(data)
    return ( 
        <div className="row">
            <div className="col-md-6 offset-md">
                {data.messages.map(({_id, title, content, author})=>(
                    <div key={_id} className="card m-2">
                        <div className="card-body">
                            <h4>{title}</h4>
                            <p>{content}</p>
                            <p>{author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default MessageList;