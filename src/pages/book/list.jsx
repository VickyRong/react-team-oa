import React, { Component } from 'react';
import { GetBookList } from "../../actions";


class BookList extends React.Component {

    componentDidMount() {
        this.getBookList();
    }
    
    getBookList = async value =>{
        let res = await GetBookList();
    }

    render(){
        return (
            <h1>书籍列表页</h1>
        )
    }
}
export default BookList;