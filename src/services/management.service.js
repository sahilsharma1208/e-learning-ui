import { sendRequest } from "../helpers/request.helper";
import configService from "./config.service";


export const getInstitutes = async() => {
    return await sendRequest(configService.apiUrl + "institute-managements/","","GET");
}

// For Trainers

export const getTrainers = async() => {
    return await sendRequest(configService.apiUrl + "trainer-managements/","","GET");
}

export const getTrainer = async(id) => {
    return await sendRequest(configService.apiUrl + "trainer-management/",id,"GET");
}

export const createTrainer = async(data) => {
    return await sendRequest(configService.apiUrl + "trainer-managements/",data,"POST");
}

export const updateTrainer = async(data) => {
    return await sendRequest(configService.apiUrl + "trainer-management/"+data.id,data,"PUT");
}

// For Trainee

export const getTrainees = async() => {
    return await sendRequest(configService.apiUrl + "trainee-managements/","","GET");
}

export const getTrainee = async(id) => {
    return await sendRequest(configService.apiUrl + "trainee-management/",id,"GET");
}

export const createTrainee = async(data) => {
    return await sendRequest(configService.apiUrl + "trainee-managements/",data,"POST");
}

export const updateTrainee = async(data) => {
    return await sendRequest(configService.apiUrl + "trainee-management/"+data.id,data,"PUT");
}

// For Module Names

export const getModuleNames = async() => {
    return await sendRequest(configService.apiUrl + "module-names/","","GET");
}

export const getModuleName = async(id) => {
    return await sendRequest(configService.apiUrl + "module-name",id,"GET");
}

//For Manage Batch

export const getBatches = async() => {
    return await sendRequest(configService.apiUrl + "manage-batches/","","GET");
}

export const getBatch = async(id) => {
    return await sendRequest(configService.apiUrl + "manage-batch/",id,"GET");
}

export const createBatch = async(data) => {
    return await sendRequest(configService.apiUrl + "manage-batches/",data,"POST");
}

export const updateBatch = async(data) => {
    return await sendRequest(configService.apiUrl + "manage-batch/"+data.id,data,"PUT");
}

// For Question Bank

export const getQuestionBanks = async() => {
    return await sendRequest(configService.apiUrl + "question-banks/","","GET");
}

export const getQuestionBank = async(id) => {
    return await sendRequest(configService.apiUrl + "question-bank/",id,"GET");
}

export const createQuestionBank = async(data) => {
    return await sendRequest(configService.apiUrl + "question-banks/",data,"POST");
}

export const updateQuestionBank = async(data) => {
    return await sendRequest(configService.apiUrl + "question-bank/"+data.id,data,"PUT");
}