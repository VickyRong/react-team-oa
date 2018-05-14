import axios from 'axios';
import conf from '../config';

let fetchData = async (obj={}) => {
    return axios.post(conf.backend,obj);
}

//获取组员列表
let GetMemberList = async (qdata = {}) => {
    qdata.action = 'getMember'
    let res = await fetchData(qdata);
    return res.data;
}

//新增组员
let AddMember = async (qdata = {}) => {
    qdata.action = 'addMember'
    let res = await fetchData(qdata);
    return res.data;
}

//编辑组员
let EditMember = async (qdata = {}) => {
    qdata.action = 'updateMember'
    let res = await fetchData(qdata);
    return res.data;
}

//删除组员
let DeleteMember = async (qdata = {}) => {
    qdata.action = 'deleteMember'
    let res = await fetchData(qdata);
    return res.data;
}

//新增加班
let AddOverTime = async (qdata = {}) => {
    qdata.action = 'addOvertime'
    let res = await fetchData(qdata);
    return res.data;
}

//查询加班
let GetOverTime = async (qdata = {}) => {
    qdata.action = 'getOvertime'
    let res = await fetchData(qdata);
    return res.data;
}

//新增请假
let AddRestTime = async (qdata = {}) => {
    qdata.action = 'addLeave'
    let res = await fetchData(qdata);
    return res.data;
}

//查询请假
let GetRestTime = async (qdata = {}) => {
    qdata.action = 'getLeave'
    let res = await fetchData(qdata);
    return res.data;
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
};