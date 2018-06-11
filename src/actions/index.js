import axios from 'axios';
import conf from '../config';

let fetchData = async (obj={}) => {
    return axios.post(conf.backend,obj);
}

let response = async (action,data) =>{
    data.action = action;
    let res = await fetchData(data);
    return res.data;
}

//获取组员列表
let GetMemberList = (qdata = {}) => {
    return response('getMember',qdata);
}

//新增组员
let AddMember = async (qdata = {}) => {
    return response('addMember',qdata);
}

//编辑组员
let EditMember = async (qdata = {}) => {
    return response('updateMember',qdata);
}

//删除组员
let DeleteMember = async (qdata = {}) => {
    return response('deleteMember',qdata);
}

//新增加班
let AddOverTime = async (qdata = {}) => {
    return response('addOvertime',qdata);
}

//查询加班
let GetOverTime = async (qdata = {}) => {
    return response('getOvertime',qdata);
}

//新增请假
let AddRestTime = async (qdata = {}) => {
    return response('addLeave',qdata);
}

//查询请假
let GetRestTime = async (qdata = {}) => {
    return response('getLeave',qdata);
}

//查询书籍列表
let GetBookList = async (qdata = {}) => {
    return response('getBook',qdata);
}
//新增书籍
let AddBook = async (qdata = {}) => {
    return response('addBook',qdata);
}

export {
    GetMemberList,
    AddMember,
    EditMember,
    DeleteMember,
    AddOverTime,
    GetOverTime,
    AddRestTime,
    GetRestTime,
    GetBookList,
    AddBook
};