export interface IComplaintDocs{
    complaint:string,
    order_document:number
}

export interface ResponseComplaint{
    ok:boolean,
    response:IComplaintDocs
}